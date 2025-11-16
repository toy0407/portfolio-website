"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Tabs, Tab } from "@nextui-org/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

interface AnalyticsData {
  totalVisits: number;
  totalResumeClicks: number;
  uniqueVisitors: number;
  conversionRate: string;
  topBrowser: string;
  topDevice: string;
  mostActiveHour: string;
  averageSessionsPerDay: number;
  deviceBreakdown: Record<string, number>;
  browserBreakdown: Record<string, number>;
  timezoneBreakdown: Record<string, number>;
  referrerBreakdown: Record<string, number>;
  peakHours: Record<string, number>;
  lastUpdated: string;
}

interface EventLog {
  timestamp: string;
  userAgent: string;
  platform: string;
  language: string;
  screenResolution: string;
  timezone: string;
  referrer: string;
  pageUrl: string;
  deviceType: string;
  browserInfo: {
    name: string;
    version: string;
  };
  ip: string;
  eventType: string;
  connectionType?: string;
  deviceMemory?: number;
  hardwareConcurrency?: number;
  headers?: {
    acceptLanguage?: string;
    acceptEncoding?: string;
  };
}

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
  "#FFC658",
];

import React from "react";

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [allEvents, setAllEvents] = useState<EventLog[]>([]);
  const [pageVisits, setPageVisits] = useState<EventLog[]>([]);
  const [resumeClicks, setResumeClicks] = useState<EventLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const secret =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("secret")
      : null;

  useEffect(() => {
    if (!secret) {
      setError("Access denied: Secret key required");
      setLoading(false);
      return;
    }

    // Fetch stats
    fetch(`/api/analytics/stats?secret=${secret}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unauthorized or error fetching data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [secret]);

  const fetchLogs = async (type: "all" | "page_visits" | "resume_clicks") => {
    if (!secret) return;

    try {
      const response = await fetch(
        `/api/analytics/logs?secret=${secret}&type=${type}`
      );
      if (!response.ok) throw new Error("Failed to fetch logs");

      const logs = await response.json();

      if (type === "all") setAllEvents(logs);
      else if (type === "page_visits") setPageVisits(logs);
      else if (type === "resume_clicks") setResumeClicks(logs);
    } catch (err) {
      console.error(`Error fetching ${type}:`, err);
    }
  };

  const handleTabChange = (key: React.Key) => {
    setActiveTab(String(key));

    // Fetch logs when switching to log tabs
    if (key === "all-logs" && allEvents.length === 0) {
      fetchLogs("all");
    } else if (key === "page-visits" && pageVisits.length === 0) {
      fetchLogs("page_visits");
    } else if (key === "resume-clicks" && resumeClicks.length === 0) {
      fetchLogs("resume_clicks");
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const LogTable = ({ logs, title }: { logs: EventLog[]; title: string }) => (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-sm text-muted-foreground">
            {logs.length} {logs.length === 1 ? "entry" : "entries"}
          </span>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr className="text-left">
                <th className="p-3 w-8"></th>
                <th className="p-3">Timestamp</th>
                <th className="p-3">Device</th>
                <th className="p-3">Browser</th>
                <th className="p-3">Location</th>
                <th className="p-3">Referrer</th>
                <th className="p-3">IP</th>
              </tr>
            </thead>
            <tbody>
              {logs.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="p-8 text-center text-muted-foreground"
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                logs.map((log, index) => (
                  <>
                    <tr
                      key={index}
                      className="border-b hover:bg-muted/50 cursor-pointer transition-colors"
                      onClick={() => toggleRow(index)}
                    >
                      <td className="p-3">
                        <span className="text-muted-foreground">
                          {expandedRow === index ? "▼" : "▶"}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-xs">
                        {formatDate(log.timestamp)}
                      </td>
                      <td className="p-3">
                        <div className="capitalize">{log.deviceType}</div>
                        <div className="text-xs text-muted-foreground">
                          {log.screenResolution}
                        </div>
                      </td>
                      <td className="p-3">
                        <div>{log.browserInfo.name}</div>
                        <div className="text-xs text-muted-foreground">
                          v{log.browserInfo.version}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-xs">{log.timezone}</div>
                        <div className="text-xs text-muted-foreground">
                          {log.language}
                        </div>
                      </td>
                      <td className="p-3 text-xs max-w-[200px] truncate">
                        {log.referrer}
                      </td>
                      <td className="p-3 font-mono text-xs">{log.ip}</td>
                    </tr>
                    {expandedRow === index && (
                      <tr className="bg-muted/30">
                        <td colSpan={7} className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">
                                Event Information
                              </h4>
                              <div className="space-y-1 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Event Type:
                                  </span>
                                  <span className="font-mono">
                                    {log.eventType}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Timestamp:
                                  </span>
                                  <span className="font-mono">
                                    {log.timestamp}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2 text-sm">
                                Device Details
                              </h4>
                              <div className="space-y-1 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Type:
                                  </span>
                                  <span className="capitalize">
                                    {log.deviceType}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Platform:
                                  </span>
                                  <span>{log.platform}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Resolution:
                                  </span>
                                  <span>{log.screenResolution}</span>
                                </div>
                                {log.deviceMemory && (
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                      Memory:
                                    </span>
                                    <span>{log.deviceMemory} GB</span>
                                  </div>
                                )}
                                {log.hardwareConcurrency && (
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                      CPU Cores:
                                    </span>
                                    <span>{log.hardwareConcurrency}</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2 text-sm">
                                Browser & Network
                              </h4>
                              <div className="space-y-1 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Browser:
                                  </span>
                                  <span>
                                    {log.browserInfo.name} v
                                    {log.browserInfo.version}
                                  </span>
                                </div>
                                {log.connectionType && (
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                      Connection:
                                    </span>
                                    <span className="uppercase">
                                      {log.connectionType}
                                    </span>
                                  </div>
                                )}
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    User Agent:
                                  </span>
                                </div>
                                <div className="font-mono text-[10px] break-all bg-background/50 p-2 rounded">
                                  {log.userAgent}
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2 text-sm">
                                Location & Language
                              </h4>
                              <div className="space-y-1 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Timezone:
                                  </span>
                                  <span>{log.timezone}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Language:
                                  </span>
                                  <span>{log.language}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    IP Address:
                                  </span>
                                  <span className="font-mono">{log.ip}</span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2 text-sm">
                                Navigation
                              </h4>
                              <div className="space-y-1 text-xs">
                                <div>
                                  <span className="text-muted-foreground">
                                    Page URL:
                                  </span>
                                  <div className="font-mono text-[10px] break-all bg-background/50 p-2 rounded mt-1">
                                    {log.pageUrl}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">
                                    Referrer:
                                  </span>
                                  <div className="font-mono text-[10px] break-all bg-background/50 p-2 rounded mt-1">
                                    {log.referrer}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {log.headers && (
                              <div>
                                <h4 className="font-semibold mb-2 text-sm">
                                  Headers
                                </h4>
                                <div className="space-y-1 text-xs">
                                  {log.headers.acceptLanguage && (
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">
                                        Accept-Language:
                                      </span>
                                      <span className="text-[10px]">
                                        {log.headers.acceptLanguage}
                                      </span>
                                    </div>
                                  )}
                                  {log.headers.acceptEncoding && (
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">
                                        Accept-Encoding:
                                      </span>
                                      <span className="text-[10px]">
                                        {log.headers.acceptEncoding}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))
              )}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl font-bold text-destructive">
              Access Denied
            </h1>
          </CardHeader>
          <CardBody>
            <p className="text-center text-muted-foreground">
              {error || "Unable to load analytics data"}
            </p>
            <p className="text-sm text-center mt-4 text-muted-foreground">
              Please provide a valid secret key to access this page.
            </p>
          </CardBody>
        </Card>
      </div>
    );
  }

  // Prepare chart data
  const deviceData = Object.entries(data.deviceBreakdown).map(
    ([name, value]) => ({ name, value })
  );

  const browserData = Object.entries(data.browserBreakdown).map(
    ([name, value]) => ({ name, value })
  );

  const hourlyData = Object.entries(data.peakHours)
    .map(([hour, count]) => ({
      hour: `${hour}:00`,
      visits: count,
    }))
    .sort((a, b) => parseInt(a.hour) - parseInt(b.hour));

  const referrerData = Object.entries(data.referrerBreakdown)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date(data.lastUpdated).toLocaleString()}
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          selectedKey={activeTab}
          onSelectionChange={handleTabChange}
          variant="underlined"
          classNames={{
            tabList: "mb-8",
            cursor: "bg-primary",
            tab: "text-base",
          }}
        >
          <Tab key="overview" title="Overview">
            <div>
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
                  <CardBody className="text-center p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Total Visits
                    </p>
                    <p className="text-4xl font-bold text-blue-600">
                      {data?.totalVisits ?? "-"}
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20">
                  <CardBody className="text-center p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Resume Clicks
                    </p>
                    <p className="text-4xl font-bold text-green-600">
                      {data?.totalResumeClicks ?? "-"}
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
                  <CardBody className="text-center p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Unique Visitors
                    </p>
                    <p className="text-4xl font-bold text-purple-600">
                      {data?.uniqueVisitors ?? "-"}
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20">
                  <CardBody className="text-center p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Conversion Rate
                    </p>
                    <p className="text-4xl font-bold text-orange-600">
                      {data?.conversionRate ?? "-"}
                    </p>
                  </CardBody>
                </Card>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card>
                  <CardBody className="text-center p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Top Browser
                    </p>
                    <p className="text-2xl font-bold">
                      {data?.topBrowser ?? "-"}
                    </p>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody className="text-center p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Top Device
                    </p>
                    <p className="text-2xl font-bold capitalize">
                      {data?.topDevice ?? "-"}
                    </p>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody className="text-center p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Most Active Hour
                    </p>
                    <p className="text-2xl font-bold">
                      {data?.mostActiveHour ?? "-"} hour
                    </p>
                  </CardBody>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Device Breakdown */}
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">
                      Device Distribution
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({
                            name,
                            percent,
                          }: {
                            name?: string;
                            percent?: number;
                          }) => {
                            const pct = percent ?? 0;
                            return `${name ?? "Unknown"}: ${(pct * 100).toFixed(
                              0
                            )}%`;
                          }}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {deviceData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardBody>
                </Card>

                {/* Browser Breakdown */}
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Browser Usage</h3>
                  </CardHeader>
                  <CardBody>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={browserData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardBody>
                </Card>

                {/* Peak Hours */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">
                      Hourly Traffic Distribution
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={hourlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="visits"
                          stroke="#8884d8"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardBody>
                </Card>

                {/* Top Referrers */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">
                      Top Referral Sources
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={referrerData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={150} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardBody>
                </Card>
              </div>

              {/* Footer Stats */}
              <Card className="mt-8">
                <CardBody className="text-center p-6">
                  <p className="text-sm text-muted-foreground">
                    Average Sessions Per Day:{" "}
                    <span className="font-bold text-foreground">
                      {data.averageSessionsPerDay?.toFixed(2)}
                    </span>
                  </p>
                </CardBody>
              </Card>
            </div>
          </Tab>

          <Tab key="all-logs" title="All Events">
            <LogTable logs={allEvents} title="All Events Log" />
          </Tab>

          <Tab key="page-visits" title="Page Visits">
            <LogTable logs={pageVisits} title="Page Visits Log" />
          </Tab>

          <Tab key="resume-clicks" title="Resume Clicks">
            <LogTable logs={resumeClicks} title="Resume Clicks Log" />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
