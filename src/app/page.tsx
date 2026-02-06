import Head from "next/head";
import DashboardCard from "@/components/_homesections/Dashboard/DashboardCard";
import DeveloperActivity from "@/components/_homesections/DevelopmentActivity/DevelopmentActivity";
import LocationTraffic from "@/components/_homesections/LocationTraffic/LocationTrafic";
import MetricsGrid from "@/components/_homesections/MetricsGrid/MetricsGrid";
import StatCard from "@/components/_homesections/StatCards/StatCard";
import SocialMediaTasks from "@/components/_homesections/SocialMediaTask/SocialMediaTask";
import InvoicesService from "@/components/_homesections/Invoices/InvoicesService";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <DashboardCard />
        <StatCard />
        <MetricsGrid />
        <LocationTraffic />
        <DeveloperActivity />
        <SocialMediaTasks/>
        <InvoicesService/>
      </div>
    </>
  );
}
