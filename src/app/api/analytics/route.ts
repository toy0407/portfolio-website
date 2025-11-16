import { NextRequest, NextResponse } from "next/server";
import getDb from "@/utils/mongodb";

interface EnrichedData {
  eventType: string;
  ip?: string;
  deviceType?: string;
  browserInfo?: { name?: string };
  timezone?: string;
  timestamp: string;
  referrer?: string;
}

async function updateMetadata(enrichedData: EnrichedData) {
  const db = await getDb();
  const metadataCol = db.collection("metadata");

  const deviceKey = enrichedData.deviceType || "unknown";
  const browserName = enrichedData.browserInfo?.name || "unknown";
  const timezone = enrichedData.timezone || "unknown";
  const referrer =
    enrichedData.referrer === "direct"
      ? "direct"
      : enrichedData.referrer
      ? (() => {
          try {
            return new URL(String(enrichedData.referrer)).hostname || "unknown";
          } catch {
            return "unknown";
          }
        })()
      : "unknown";
  const hour = new Date(enrichedData.timestamp).getHours();

  const inc: Record<string, number> = {};
  if (enrichedData.eventType === "page_visit") inc["totalVisits"] = 1;
  if (enrichedData.eventType === "resume_click") inc["totalResumeClicks"] = 1;
  inc[`deviceBreakdown.${deviceKey}`] =
    (inc[`deviceBreakdown.${deviceKey}`] || 0) + 1;
  inc[`browserBreakdown.${browserName}`] =
    (inc[`browserBreakdown.${browserName}`] || 0) + 1;
  inc[`timezoneBreakdown.${timezone}`] =
    (inc[`timezoneBreakdown.${timezone}`] || 0) + 1;
  inc[`referrerBreakdown.${referrer}`] =
    (inc[`referrerBreakdown.${referrer}`] || 0) + 1;
  inc[`peakHours.${hour}`] = (inc[`peakHours.${hour}`] || 0) + 1;

  const updateOps: Record<string, unknown> = {
    $inc: inc,
    $set: { lastUpdated: new Date().toISOString() },
  };

  if (enrichedData.ip) {
    updateOps.$addToSet = { uniqueVisitors: enrichedData.ip };
  }

  await metadataCol.updateOne({}, updateOps, { upsert: true });
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

    const db = await getDb();

    // Insert into all events collection
    await db.collection("all_events").insertOne(enrichedData);

    // Insert into event-specific collection
    if (enrichedData.eventType === "page_visit") {
      await db.collection("page_visits").insertOne(enrichedData);
    } else if (enrichedData.eventType === "resume_click") {
      await db.collection("resume_clicks").insertOne(enrichedData);
    }

    // Update metadata document
    await updateMetadata(enrichedData);

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
