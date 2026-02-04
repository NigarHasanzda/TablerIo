"use client";

import React from "react";
import { ShoppingCart, Facebook } from "lucide-react";
import dynamic from "next/dynamic";

// MUI Icons Client-Only
const XIcon = dynamic(() => import("@mui/icons-material/X"), { ssr: false });
const AttachMoneyIcon = dynamic(() => import("@mui/icons-material/AttachMoney"), { ssr: false });

interface MetricItem {
  icon: React.ElementType; // Həm Lucide, həm MUI iconları üçün generic tip
  bgColor: string;
  count: string | number;
  label: string;
  footerCount: string | number;
  footerLabel: string;
}

const MetricsGrid: React.FC = () => {
  const metrics: MetricItem[] = [
    {
      icon: AttachMoneyIcon,
      bgColor: "bg-blue-600",
      count: "132",
      label: "Sales",
      footerCount: "12",
      footerLabel: "waiting payments",
    },
    {
      icon: ShoppingCart,
      bgColor: "bg-green-500",
      count: "78",
      label: "Orders",
      footerCount: "32",
      footerLabel: "shipped",
    },
    {
      icon: XIcon,
      bgColor: "bg-black",
      count: "623",
      label: "Shares",
      footerCount: "16",
      footerLabel: "today",
    },
    {
      icon: Facebook,
      bgColor: "bg-blue-500",
      count: "132",
      label: "Likes",
      footerCount: "21",
      footerLabel: "today",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-4 w-[74.4%] mx-auto mb-8">
      {metrics.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <div
            key={idx}
            className="flex items-center h-[80px] p-5 bg-white rounded-xl border border-gray-100 shadow-sm transition-transform duration-200"
          >
            <div className={`${item.bgColor} p-3 rounded-lg flex items-center justify-center shrink-0`}>
              <IconComponent size={22} className="text-[white]" /> 
            </div>

            <div className="ml-4 flex flex-col justify-center overflow-hidden">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[#374151] font-medium text-sm capitalize">{item.count}</span>
                <span className="text-[#374151] font-medium text-sm capitalize">{item.label}</span>
              </div>
              <p className="text-[#374151] text-[14.5px] mt-1.5 font-[500] leading-tight truncate">
                {item.footerCount} {item.footerLabel}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsGrid;
