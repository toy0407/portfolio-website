"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageVisit } from "@/utils/analytics.utils";
import { portfolioData } from "@/data/portfolio.data";

export function AnalyticsTracker() {
  const hasTracked = useRef(false);
  const pathname = usePathname();
  const trackablePages = portfolioData.analytics.trackablePages;

  useEffect(() => {
    // Only track if it's a valid page
    if (!trackablePages.includes(pathname)) return;

    // Prevent double-tracking in React Strict Mode (development)
    if (hasTracked.current) return;

    hasTracked.current = true;
    trackPageVisit();
  }, [pathname, trackablePages]);

  return null;
}
