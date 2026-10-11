import DashboardCard from "@/features/dashboard/DashboardCard";
import DeveloperActivity from "@/features/dashboard/DevelopmentActivity";
import LocationTraffic from "@/features/dashboard/LocationTraffic";
import MetricsGrid from "@/features/dashboard/MetricsGrid";
import StatCard from "@/features/dashboard/StatCard";
import SocialMediaTasks from "@/features/dashboard/SocialMediaTask";
import InvoicesService from "@/features/dashboard/InvoicesService";
import PageContent from "@/layout/page/PageContent";

export default function Home() {
  return (
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
  );
}
