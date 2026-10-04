"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";
import { startSiteMotion } from "../lib/siteMotion";

export default function SiteMotion({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  useEffect(() => startSiteMotion(), [pathname]);
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
