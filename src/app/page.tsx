
import DashboardCard from "@/components/Dashboard/DashboardCard";
import DeveloperActivity from "@/components/DevelopmentActivity/DevelopmentActivity";
import MetricsGrid from "@/components/MetricsGrid/MetricsGrid";
import StatCard from "@/components/StatCards/StatCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
    <DashboardCard/>
    <StatCard/>
    <MetricsGrid/>
    <DeveloperActivity/>
    
    </div>
  );
}
