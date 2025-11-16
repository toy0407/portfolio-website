export interface UserAnalytics {
  timestamp: string;
  userAgent: string;
  platform: string;
  language: string;
  screenResolution: string;
  timezone: string;
  referrer: string;
  pageUrl: string;
  deviceType: "mobile" | "tablet" | "desktop";
  browserInfo: {
    name: string;
    version: string;
  };
  connectionType?: string;
  deviceMemory?: number;
  hardwareConcurrency?: number;
  eventType: "page_visit" | "resume_click";
}

export async function collectUserAnalytics(
  eventType: "page_visit" | "resume_click" = "page_visit"
): Promise<UserAnalytics> {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const language = navigator.language;
  const screenResolution = `${window.screen.width}x${window.screen.height}`;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const referrer = document.referrer || "direct";
  const pageUrl = window.location.href;

  // Detect device type
  const deviceType = getDeviceType();

  // Get browser info
  const browserInfo = getBrowserInfo(userAgent);

  // Define an extended navigator type to access experimental fields safely
  type NavigatorWithExtras = Navigator & {
    connection?: { effectiveType?: string };
    deviceMemory?: number;
  };

  // Get connection info if available
  const connection = (navigator as NavigatorWithExtras).connection;
  const connectionType = connection?.effectiveType || "unknown";

  // Get device memory if available
  const deviceMemory = (navigator as NavigatorWithExtras).deviceMemory || undefined;

  // Get hardware concurrency (number of logical processors)
  const hardwareConcurrency = navigator.hardwareConcurrency || undefined;

  return {
    timestamp: new Date().toISOString(),
    userAgent,
    platform,
    language,
    screenResolution,
    timezone,
    referrer,
    pageUrl,
    deviceType,
    browserInfo,
    connectionType,
    deviceMemory,
    hardwareConcurrency,
    eventType,
  };
}

function getDeviceType(): "mobile" | "tablet" | "desktop" {
  const ua = navigator.userAgent.toLowerCase();
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      navigator.userAgent
    )
  ) {
    return "mobile";
  }
  return "desktop";
}

function getBrowserInfo(userAgent: string): {
  name: string;
  version: string;
} {
  let name = "Unknown";
  let version = "Unknown";

  if (userAgent.includes("Firefox/")) {
    name = "Firefox";
    version = userAgent.match(/Firefox\/(\d+\.\d+)/)?.[1] || version;
  } else if (userAgent.includes("Edg/")) {
    name = "Edge";
    version = userAgent.match(/Edg\/(\d+\.\d+)/)?.[1] || version;
  } else if (userAgent.includes("Chrome/")) {
    name = "Chrome";
    version = userAgent.match(/Chrome\/(\d+\.\d+)/)?.[1] || version;
  } else if (userAgent.includes("Safari/")) {
    name = "Safari";
    version = userAgent.match(/Version\/(\d+\.\d+)/)?.[1] || version;
  } else if (userAgent.includes("Opera/") || userAgent.includes("OPR/")) {
    name = "Opera";
    version = userAgent.match(/(Opera|OPR)\/(\d+\.\d+)/)?.[2] || version;
  }

  return { name, version };
}

export async function sendAnalyticsToServer(
  analytics: UserAnalytics
): Promise<void> {
  try {
    await fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(analytics),
    });
  } catch (error) {
    console.error("Failed to send analytics:", error);
  }
}

export async function trackPageVisit(): Promise<void> {
  try {
    const analytics = await collectUserAnalytics("page_visit");
    await sendAnalyticsToServer(analytics);
  } catch (error) {
    console.error("Failed to track page visit:", error);
  }
}
