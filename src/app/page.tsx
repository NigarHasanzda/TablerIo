import Head from "next/head";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import DeveloperActivity from "@/components/DevelopmentActivity/DevelopmentActivity";
import LocationTraffic from "@/components/LocationTraffic/LocationTrafic";
import MetricsGrid from "@/components/MetricsGrid/MetricsGrid";
import StatCard from "@/components/StatCards/StatCard";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <DashboardCard />
        <StatCard />
        <MetricsGrid />
        <LocationTraffic />
        <DeveloperActivity />
      </div>
    </>
  );
}
