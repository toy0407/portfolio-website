import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

export async function GET(request: NextRequest) {
  try {
    // Check for secret key in query params
    const secret = request.nextUrl.searchParams.get("secret");
    const expectedSecret = process.env.ANALYTICS_SECRET;

    if (!secret || !expectedSecret || secret !== expectedSecret) {
      return NextResponse.json(
        { error: "Unauthorized: Invalid or missing secret key" },
        { status: 401 }
      );
    }

    const analyticsDir = join(process.cwd(), "analytics");
    const metadataPath = join(analyticsDir, "metadata.json");

    if (!existsSync(metadataPath)) {
      return NextResponse.json(
        {
          totalVisits: 0,
          totalResumeClicks: 0,
          uniqueVisitors: 0,
          message: "No analytics data available yet",
        },
        { status: 200 }
      );
    }

    const metadataContent = await readFile(metadataPath, "utf-8");
    const metadata = JSON.parse(metadataContent);

    // Calculate additional stats
    const stats = {
      ...metadata,
      uniqueVisitors: metadata.uniqueVisitors?.length || 0,
      conversionRate:
        metadata.totalVisits > 0
          ? ((metadata.totalResumeClicks / metadata.totalVisits) * 100).toFixed(
              2
            ) + "%"
          : "0%",
      topBrowser: Object.keys(metadata.browserBreakdown || {}).reduce(
        (a, b) =>
          (metadata.browserBreakdown[a] || 0) >
          (metadata.browserBreakdown[b] || 0)
            ? a
            : b,
        "N/A"
      ),
      topDevice: Object.keys(metadata.deviceBreakdown || {}).reduce(
        (a, b) =>
          (metadata.deviceBreakdown[a] || 0) >
          (metadata.deviceBreakdown[b] || 0)
            ? a
            : b,
        "N/A"
      ),
      mostActiveHour: Object.keys(metadata.peakHours || {}).reduce(
        (a, b) =>
          (metadata.peakHours[a] || 0) > (metadata.peakHours[b] || 0) ? a : b,
        "N/A"
      ),
    };

    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    console.error("Error fetching analytics stats:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch analytics stats" },
      { status: 500 }
    );
  }
}
