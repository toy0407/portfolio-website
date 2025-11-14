import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

interface AnalyticsMetadata {
  totalVisits: number;
  totalResumeClicks: number;
  uniqueVisitors: string[];
  deviceBreakdown: { mobile: number; tablet: number; desktop: number };
  browserBreakdown: Record<string, number>;
  timezoneBreakdown: Record<string, number>;
  referrerBreakdown: Record<string, number>;
  peakHours: Record<string | number, number>;
  topCountries: Record<string, number>;
  lastUpdated: string;
  averageSessionsPerDay?: number;
}
interface EnrichedData {
  eventType: string;
  ip?: string;
  deviceType?: string;
  browserInfo?: { name?: string };
  timezone?: string;
  timestamp: string;
  referrer?: string;
}

async function updateMetadata(
  analyticsDir: string,
  enrichedData: EnrichedData
): Promise<void> {
  const metadataPath = join(analyticsDir, "metadata.json");
  const allEventsPath = join(analyticsDir, "all-events.json");

  // Read existing metadata or create new
  let metadata: AnalyticsMetadata = {
    totalVisits: 0,
    totalResumeClicks: 0,
    uniqueVisitors: [],
    deviceBreakdown: { mobile: 0, tablet: 0, desktop: 0 },
    browserBreakdown: {},
    timezoneBreakdown: {},
    referrerBreakdown: {},
    peakHours: {},
    topCountries: {},
    lastUpdated: new Date().toISOString(),
  };

  if (existsSync(metadataPath)) {
    const metadataContent = await readFile(metadataPath, "utf-8");
    metadata = JSON.parse(metadataContent);
  }

  // Read all events
  let allEvents: { timestamp: string }[] = [];
  if (existsSync(allEventsPath)) {
    const eventsContent = await readFile(allEventsPath, "utf-8");
    allEvents = JSON.parse(eventsContent);
  }

  // Update metadata based on event type
  if (enrichedData.eventType === "page_visit") {
    metadata.totalVisits++;
  } else if (enrichedData.eventType === "resume_click") {
    metadata.totalResumeClicks++;
  }

  // Track unique visitors by IP
  if (enrichedData.ip && !metadata.uniqueVisitors.includes(enrichedData.ip)) {
    metadata.uniqueVisitors.push(enrichedData.ip);
  }

  // Update device breakdown
  if (enrichedData.deviceType) {
    const deviceKey =
      enrichedData.deviceType as keyof typeof metadata.deviceBreakdown;
    if (deviceKey in metadata.deviceBreakdown) {
      metadata.deviceBreakdown[deviceKey] =
        (metadata.deviceBreakdown[deviceKey] || 0) + 1;
    }
  }

  // Update browser breakdown
  const browserName = enrichedData.browserInfo?.name || "unknown";
  metadata.browserBreakdown[browserName] =
    (metadata.browserBreakdown[browserName] || 0) + 1;

  // Update timezone breakdown
  if (enrichedData.timezone) {
    metadata.timezoneBreakdown[enrichedData.timezone] =
      (metadata.timezoneBreakdown[enrichedData.timezone] || 0) + 1;
  }

  // Update referrer breakdown
  const referrer =
    enrichedData.referrer === "direct"
      ? "direct"
      : enrichedData.referrer
      ? new URL(String(enrichedData.referrer)).hostname || "unknown"
      : "unknown";
  metadata.referrerBreakdown[referrer] =
    (metadata.referrerBreakdown[referrer] || 0) + 1;

  // Update peak hours
  const hour = new Date(enrichedData.timestamp).getHours();
  metadata.peakHours[hour] = (metadata.peakHours[hour] || 0) + 1;

  // Calculate average sessions per day
  if (allEvents.length > 0) {
    const firstEvent = new Date(allEvents[0].timestamp);
    const lastEvent = new Date(enrichedData.timestamp);
    const daysDiff = Math.max(
      1,
      Math.ceil(
        (lastEvent.getTime() - firstEvent.getTime()) / (1000 * 60 * 60 * 24)
      )
    );
    metadata.averageSessionsPerDay = (allEvents.length + 1) / daysDiff;
  } else {
    metadata.averageSessionsPerDay = 1;
  }

  metadata.lastUpdated = new Date().toISOString();

  // Write metadata
  await writeFile(metadataPath, JSON.stringify(metadata, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const analyticsData = await request.json();

    // Add server-side data
    const enrichedData = {
      ...analyticsData,
      ip: request.ip || request.headers.get("x-forwarded-for") || "unknown",
      headers: {
        userAgent: request.headers.get("user-agent"),
        acceptLanguage: request.headers.get("accept-language"),
        acceptEncoding: request.headers.get("accept-encoding"),
      },
    };

    // Create analytics directory if it doesn't exist
    const analyticsDir = join(process.cwd(), "analytics");
    if (!existsSync(analyticsDir)) {
      await mkdir(analyticsDir, { recursive: true });
    }

    // Save to all-events.json
    const allEventsPath = join(analyticsDir, "all-events.json");
    let allEvents = [];
    if (existsSync(allEventsPath)) {
      const fileContent = await readFile(allEventsPath, "utf-8");
      allEvents = JSON.parse(fileContent);
    }
    allEvents.push(enrichedData);
    await writeFile(allEventsPath, JSON.stringify(allEvents, null, 2));

    // Save to specific event type file
    const eventFilePath = join(analyticsDir, `${enrichedData.eventType}s.json`);
    let eventData = [];
    if (existsSync(eventFilePath)) {
      const fileContent = await readFile(eventFilePath, "utf-8");
      eventData = JSON.parse(fileContent);
    }
    eventData.push(enrichedData);
    await writeFile(eventFilePath, JSON.stringify(eventData, null, 2));

    // Update metadata
    await updateMetadata(analyticsDir, enrichedData);

    return NextResponse.json(
      { success: true, message: "Analytics recorded" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error recording analytics:", error);
    return NextResponse.json(
      { success: false, message: "Failed to record analytics" },
      { status: 500 }
    );
  }
}
