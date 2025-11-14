export const dynamic = "force-dynamic";

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

    const type = request.nextUrl.searchParams.get("type") || "all";
    const analyticsDir = join(process.cwd(), "analytics");

    let filePath: string;
    switch (type) {
      case "page_visits":
        filePath = join(analyticsDir, "page_visits.json");
        break;
      case "resume_clicks":
        filePath = join(analyticsDir, "resume_clicks.json");
        break;
      case "all":
      default:
        filePath = join(analyticsDir, "all-events.json");
        break;
    }

    if (!existsSync(filePath)) {
      return NextResponse.json([], { status: 200 });
    }

    const fileContent = await readFile(filePath, "utf-8");
    const logs = JSON.parse(fileContent);

    // Sort by timestamp descending (newest first)
    logs.sort(
      (a: { timestamp: string }, b: { timestamp: string }) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return NextResponse.json(logs, { status: 200 });
  } catch (error) {
    console.error("Error fetching logs:", error);
    return NextResponse.json(
      { error: "Failed to fetch logs" },
      { status: 500 }
    );
  }
}
