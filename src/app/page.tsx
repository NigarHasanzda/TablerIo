import type { Metadata } from "next";
import DashboardCard from "@/features/dashboard/DashboardCard";
import DeveloperActivity from "@/features/dashboard/DevelopmentActivity";
import LocationTraffic from "@/features/dashboard/LocationTraffic";
import MetricsGrid from "@/features/dashboard/MetricsGrid";
import StatCard from "@/features/dashboard/StatCard";
import SocialMediaTasks from "@/features/dashboard/SocialMediaTask";
import InvoicesService from "@/features/dashboard/InvoicesService";
import PageContent from "@/layout/page/PageContent";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  JsonLd,
  organizationJsonLd,
  webSiteJsonLd,
} from "@/lib/seo/json-ld";

export const metadata: Metadata = createPageMetadata({
  title: "Dashboard",
  description:
    "Overview dashboard with analytics, user metrics, traffic charts, invoices, and activity feeds.",
  path: "/",
  keywords: ["dashboard", "analytics", "admin panel"],
});

export default function Home() {
  return (
    <>
      <JsonLd data={[webSiteJsonLd(), organizationJsonLd()]} />
      <div className="min-h-full bg-[#f1f4f9]">
        <PageContent className="space-y-5 pb-6">
          <DashboardCard />
          <StatCard />
          <MetricsGrid />
          <LocationTraffic />
          <DeveloperActivity />
          <SocialMediaTasks />
          <InvoicesService />
        </PageContent>
      </div>
    </>
  );
}
