"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FloatingButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero");
      const form = document.querySelector(".overview-form");
      const formRect = form?.getBoundingClientRect();
      const formVisible =
        !!formRect && formRect.top < window.innerHeight && formRect.bottom > 90;
      const editing = /^(INPUT|SELECT|TEXTAREA)$/.test(
        document.activeElement?.tagName || "",
      );
      setVisible(
        (!hero || hero.getBoundingClientRect().bottom < 90) &&
          !formVisible &&
          !editing,
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    document.addEventListener("focusin", update);
    document.addEventListener("focusout", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.removeEventListener("focusin", update);
      document.removeEventListener("focusout", update);
    };
  }, [pathname]);
  if (["/get-started", "/thank-you"].includes(pathname) || !visible)
    return null;
  return (
    <div className="mobile-inquiry-bar">
      <Link
        href="/get-started"
        className="button button-primary"
        data-track="cta_mobile_inquiry"
      >
        Request Franchise Info <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
