import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FranchiseLongForm from "../app/components/FranchiseLongForm";

const { push, attribution } = vi.hoisted(() => ({
  push: vi.fn(),
  attribution: {
    utm_source: "google",
    utm_medium: "cpc",
    gclid: "test-click-id",
    landing_page: "/get-started",
  },
}));
vi.mock("next/navigation", () => ({ useRouter: () => ({ push }) }));
vi.mock("../app/lib/attribution", () => ({
  getAttribution: () => attribution,
}));
const fetchMock = vi.fn();
beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal("fetch", fetchMock);
  window.gtag = vi.fn();
  fetchMock.mockResolvedValue({ ok: true, json: async () => ({}) });
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
async function contact(capital = "$200K - $500K") {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText("First Name"), "Test");
  await user.type(screen.getByLabelText("Last Name"), "Candidate");
  await user.type(screen.getByLabelText("Email"), "candidate@example.test");
  await user.type(screen.getByLabelText("Phone"), "3035550100");
  await user.type(screen.getByLabelText("Zip Code"), "80202");
  await user.selectOptions(
    screen.getByLabelText("Liquid Capital Available"),
    capital,
  );
  await user.click(screen.getByRole("button", { name: "Continue →" }));
  await screen.findByLabelText("Estimated Net Worth");
  return user;
}
async function goals(netWorth = "$500K - $700K", capital = "$200K - $500K") {
  const user = await contact(capital);
  expect(document.activeElement).toBe(
    screen.getByLabelText("Estimated Net Worth"),
  );
  await user.selectOptions(
    screen.getByLabelText("Estimated Net Worth"),
    netWorth,
  );
  await user.selectOptions(screen.getByLabelText("Credit Score"), "720+");
  await user.selectOptions(
    screen.getByLabelText("Primary Goal"),
    "More Meaningful Career",
  );
  return user;
}
it.each([
  ["$200K - $500K", "$500K - $700K", 2, "/thank-you?ceo=1"],
  ["$200K - $500K", "$150K - $350K", 1, "/thank-you?ceo=1"],
  ["$0 - $200K", "$700K +", 1, "/thank-you"],
])(
  "preserves liquid %s and net worth %s qualification and calendar routing",
  async (capital, netWorth, count, route) => {
    render(<FranchiseLongForm leadSource="get-started" />);
    const user = await goals(netWorth, capital);
    await user.click(screen.getByRole("button", { name: "Submit Request" }));
    await waitFor(() => expect(push).toHaveBeenCalledWith(route));
    expect(fetchMock.mock.calls.map((c) => c[0])).toEqual([
      "/api/franchise-lead-long-step1-db",
      "/api/franchise-lead-long-db",
      "/api/franchise-lead-long",
    ]);
    const final = JSON.parse(fetchMock.mock.calls[2][1].body);
    expect(final).toEqual({
      firstName: "Test",
      lastName: "Candidate",
      email: "candidate@example.test",
      phone: "3035550100",
      zip: "80202",
      liquidAssets: capital,
      netWorth,
      creditScore: "720+",
      primaryGoal: "More Meaningful Career",
      leadSource: "get-started",
      attribution,
    });
    const events = vi
      .mocked(window.gtag!)
      .mock.calls.filter((c) => c[1] === "conversion");
    expect(events).toHaveLength(count);
    expect(events[0][2]).toMatchObject({
      send_to: "AW-944657062/OhOICIf4y_cbEKalucID",
    });
    if (count === 2)
      expect(events[1][2]).toMatchObject({
        send_to: "AW-944657062/lfH3CPHQ3rMcEKalucID",
      });
  },
);
it("retains ownership goals on CRM failure and retries without premature conversion", async () => {
  render(<FranchiseLongForm />);
  const user = await goals();
  fetchMock.mockImplementation(async (url: string) => ({
    ok: url !== "/api/franchise-lead-long",
    json: async () => ({ error: "Please try again." }),
  }));
  await user.click(screen.getByRole("button", { name: "Submit Request" }));
  await screen.findByRole("alert");
  expect(
    (screen.getByLabelText("Estimated Net Worth") as HTMLSelectElement).value,
  ).toBe("$500K - $700K");
  expect(push).not.toHaveBeenCalled();
  expect(
    vi.mocked(window.gtag!).mock.calls.filter((c) => c[1] === "conversion"),
  ).toHaveLength(0);
  fetchMock.mockResolvedValue({ ok: true });
  await user.click(screen.getByRole("button", { name: "Try Again" }));
  await waitFor(() => expect(push).toHaveBeenCalledTimes(1));
});
