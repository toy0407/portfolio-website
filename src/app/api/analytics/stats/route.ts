export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import getDb from "@/utils/mongodb";

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

    const db = await getDb();
    const metadataCol = db.collection("metadata");
    const metadata = (await metadataCol.findOne({})) as Record<
      string,
      unknown
    > | null;

    if (!metadata || Object.keys(metadata).length === 0) {
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

    const browserBreakdown =
      (metadata.browserBreakdown as Record<string, number>) || {};
    const deviceBreakdown =
      (metadata.deviceBreakdown as Record<string, number>) || {};
    const peakHours = (metadata.peakHours as Record<string, number>) || {};

    const uniqueVisitorsCount = Array.isArray(metadata.uniqueVisitors)
      ? (metadata.uniqueVisitors as string[]).length
      : 0;
    const totalVisits = Number(
      (metadata as Record<string, unknown>)["totalVisits"] || 0
    );
    const totalResumeClicks = Number(
      (metadata as Record<string, unknown>)["totalResumeClicks"] || 0
    );
    const conversionRate =
      totalVisits > 0
        ? ((totalResumeClicks / totalVisits) * 100).toFixed(2) + "%"
        : "0%";

    const stats = {
      ...metadata,
      uniqueVisitors: uniqueVisitorsCount,
      conversionRate,
      topBrowser:
        Object.keys(browserBreakdown).length > 0
          ? Object.keys(browserBreakdown).reduce((a, b) =>
              (browserBreakdown[a] || 0) > (browserBreakdown[b] || 0) ? a : b
            )
          : "N/A",
      topDevice:
        Object.keys(deviceBreakdown).length > 0
          ? Object.keys(deviceBreakdown).reduce((a, b) =>
              (deviceBreakdown[a] || 0) > (deviceBreakdown[b] || 0) ? a : b
            )
          : "N/A",
      mostActiveHour:
        Object.keys(peakHours).length > 0
          ? Object.keys(peakHours).reduce((a, b) =>
              (peakHours[a] || 0) > (peakHours[b] || 0) ? a : b
            )
          : "N/A",
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
