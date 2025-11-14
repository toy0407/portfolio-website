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

    const type = request.nextUrl.searchParams.get("type") || "all";
    const db = await getDb();

    let collectionName = "all_events";
    if (type === "page_visits") collectionName = "page_visits";
    else if (type === "resume_clicks") collectionName = "resume_clicks";

    const logs = await db
      .collection(collectionName)
      .find()
      .sort({ timestamp: -1 })
      .toArray();

    return NextResponse.json(logs || [], { status: 200 });
  } catch (error) {
    console.error("Error fetching logs:", error);
    return NextResponse.json(
      { error: "Failed to fetch logs" },
      { status: 500 }
    );
  }
}
