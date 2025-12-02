"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ActiveCampaignForm() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Remove any existing AC embed scripts for this form
    document
      .querySelectorAll('script[src*="embed.php?id=36"]')
      .forEach((s) => s.remove());

    // 2. Inject a fresh script
    const script = document.createElement("script");
    script.src =
      "https://spaviainternational.activehosted.com/f/embed.php?id=36";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    // Helper: keep only the form that lives inside our React container
    const cleanupStrayForms = () => {
      const container = document.querySelector("div._form_36");
      if (!container) return;

      const forms = document.querySelectorAll("form._form");

      forms.forEach((form) => {
        // If this form is not inside our container, it's a ghost → remove its wrapper
        if (!container.contains(form)) {
          const wrapper =
            form.closest("._form_36") ||
            form.closest("._form-wrap") ||
            form.parentElement;

          if (wrapper && !container.contains(wrapper)) {
            wrapper.remove();
          } else if (!container.contains(form)) {
            form.remove();
          }
        }
      });
    };

    // 3. Periodically clean stray forms while AC is doing its thing
    const interval = setInterval(cleanupStrayForms, 300);

    // Stop polling after a few seconds (form should be fully mounted by then)
    const timeout = setTimeout(() => {
      cleanupStrayForms();
      clearInterval(interval);
    }, 4000);

    // 4. Cleanup on unmount / route change
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      cleanupStrayForms();
      script.remove();
    };
  }, [pathname]);

  // This is the *only* place we actually want the AC form to live
  return <div className="_form_36" key={pathname} />;
}
