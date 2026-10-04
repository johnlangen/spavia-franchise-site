import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FranchiseOverviewForm from "../app/components/FranchiseOverviewForm";

const { push, attribution } = vi.hoisted(() => ({
  push: vi.fn(),
  attribution: {
    utm_source: "google",
    utm_medium: "cpc",
    utm_content: "wellness",
    gclid: "test-click-id",
    landing_page: "/",
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
async function enterEmail() {
  const user = userEvent.setup();
  await user.type(
    screen.getByLabelText("Email address"),
    "candidate@example.test",
  );
  await user.click(
    screen.getByRole("button", { name: /Get the Franchise Overview/ }),
  );
  await screen.findByLabelText("First name");
  return user;
}
async function enterDetails(capital = "$200K - $500K", phone = "3035550100") {
  const user = await enterEmail();
  await user.type(screen.getByLabelText("First name"), "Test");
  await user.type(screen.getByLabelText("Last name"), "Candidate");
  await user.type(screen.getByLabelText("Phone number"), phone);
  await user.type(screen.getByLabelText("ZIP code"), "80202");
  await user.selectOptions(
    screen.getByLabelText("Liquid capital available to invest"),
    capital,
  );
  return user;
}
const conversions = () =>
  vi.mocked(window.gtag!).mock.calls.filter((call) => call[1] === "conversion");

describe("working lead capture contracts", () => {
  it.each([
    ["hero", "homepage-hero"],
    ["landing", "wellness-franchise"],
    ["intro", "arizona_campaign"],
  ] as const)(
    "preserves %s source, partial save, attribution and successful conversions",
    async (formType, leadSource) => {
      render(
        <FranchiseOverviewForm
          leadSource={leadSource}
          formType={formType}
          compact={formType === "hero"}
        />,
      );
      const user = await enterDetails();
      expect(document.activeElement).toBe(
        screen.getByLabelText("Liquid capital available to invest"),
      );
      await user.click(screen.getByRole("button", { name: "Request Info" }));
      await waitFor(() => expect(push).toHaveBeenCalledWith("/thank-you"));
      expect(fetchMock.mock.calls.map((call) => call[0])).toEqual([
        "/api/franchise-lead-step1",
        "/api/franchise-lead-short-db",
        "/api/franchise-lead",
      ]);
      expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual({
        email: "candidate@example.test",
        leadSource,
        attribution,
      });
      const final = JSON.parse(fetchMock.mock.calls[2][1].body);
      expect(final).toEqual({
        email: "candidate@example.test",
        firstName: "Test",
        lastName: "Candidate",
        phone: "3035550100",
        zip: "80202",
        liquidTier: "$200K - $500K",
        leadSource,
        attribution,
      });
      const source = formType === "hero" ? {} : { leadSource };
      expect(window.gtag).toHaveBeenCalledWith(
        "event",
        "form_step1_submitted",
        {
          form: formType,
          ...source,
        },
      );
      expect(window.gtag).toHaveBeenCalledWith(
        "event",
        "form_step2_submitted",
        {
          form: formType,
          liquidTier: "$200K - $500K",
          ...source,
        },
      );
      expect(window.gtag).toHaveBeenCalledWith(
        "event",
        "qualified_lead_submitted",
        {
          liquidTier: "$200K - $500K",
          ...(formType === "landing" ? { leadSource } : {}),
        },
      );
      expect(
        conversions().map((call) => (call[2] as { send_to: string }).send_to),
      ).toEqual([
        "AW-944657062/OhOICIf4y_cbEKalucID",
        "AW-944657062/lfH3CPHQ3rMcEKalucID",
      ]);
    },
  );
  it("moves focus to the first detail field after the email step", async () => {
    render(<FranchiseOverviewForm />);
    await enterEmail();
    expect(document.activeElement).toBe(screen.getByLabelText("First name"));
    expect(window.gtag).toHaveBeenCalledWith("event", "form_step1_submitted", {
      form: "intro",
      leadSource: "unspecified",
    });
  });
  it("records only the standard conversion for a lower capital tier", async () => {
    render(<FranchiseOverviewForm />);
    const user = await enterDetails("$0 - $200K");
    await user.click(screen.getByRole("button", { name: "Request Info" }));
    await waitFor(() => expect(push).toHaveBeenCalled());
    expect(conversions()).toHaveLength(1);
    expect(
      vi
        .mocked(window.gtag!)
        .mock.calls.some((call) => call[1] === "qualified_lead_submitted"),
    ).toBe(false);
  });
  it("keeps entered details and sends no conversion when the CRM API rejects, then permits retry", async () => {
    render(<FranchiseOverviewForm />);
    const user = await enterDetails();
    fetchMock.mockImplementation(async (url: string) => ({
      ok: url !== "/api/franchise-lead",
      json: async () => ({ error: "Please try again shortly." }),
    }));
    await user.click(screen.getByRole("button", { name: "Request Info" }));
    expect((await screen.findByRole("alert")).textContent).toContain(
      "Please try again shortly.",
    );
    expect(
      (screen.getByLabelText("First name") as HTMLInputElement).value,
    ).toBe("Test");
    expect(push).not.toHaveBeenCalled();
    expect(conversions()).toHaveLength(0);
    fetchMock.mockResolvedValue({ ok: true, json: async () => ({}) });
    await user.click(screen.getByRole("button", { name: "Try Again" }));
    await waitFor(() => expect(push).toHaveBeenCalledTimes(1));
  });
  it("validates a US phone before calling either final endpoint", async () => {
    render(<FranchiseOverviewForm />);
    const user = await enterDetails("$200K - $500K", "1234567");
    await user.click(screen.getByRole("button", { name: "Request Info" }));
    expect((await screen.findByRole("alert")).textContent).toContain(
      "10-digit US phone",
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(conversions()).toHaveLength(0);
    expect(document.activeElement).toBe(screen.getByLabelText("Phone number"));
  });
  it("lets the candidate continue if the optional partial save fails", async () => {
    fetchMock.mockRejectedValueOnce(new Error("offline"));
    vi.spyOn(console, "error").mockImplementation(() => {});
    render(<FranchiseOverviewForm />);
    await enterEmail();
    expect(screen.getByRole("button", { name: "Request Info" })).toBeTruthy();
    vi.restoreAllMocks();
  });
});
