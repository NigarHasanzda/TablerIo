"use client";

import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from "recharts";

const StatsDashboard = () => {

  const statsData = {
    sales: { value: 92, conversionRate: 15 },
    revenue: {
      amount: 10840,
      growth: 23,
      chart: [
        { day: "1", value: 10 },
        { day: "3", value: 95 },
        { day: "5", value: 4 },
        { day: "7", value: 21 },
        { day: "9", value: 70 },
        { day: "10", value: 5 },
        { day: "13", value: 95 },
        { day: "15", value: 50 },
        { day: "20", value: 20 },
        { day: "25", value: 60 },
        { day: "30", value: 15 }
      ]
    },
    newClients: {
      count: 9421,
      growth: 18,
      chart: [
        { day: "1", current: 100, last: 10 },
        { day: "5", current: 20, last: 80 },
        { day: "10", current: 90, last: 5 },
        { day: "15", current: 30, last: 95 },
        { day: "20", current: 70, last: 25 },
        { day: "25", current: 50, last: 10 },
        { day: "30", current: 95, last: 40 }
      ]
    },
    subscriptions: {
      count: 3154,
      growth: 12,
      bars: [
        10, 70, 30, 85, 20, 75,
        15, 65, 25, 90, 40, 80,
        10, 70, 30, 85, 20, 75,
        50, 95, 35, 100, 45, 85,
        10, 70, 30, 85, 20, 5,
      ]
    }
  };

  const { sales, revenue, newClients, subscriptions } = statsData;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="bg-[#0f172a] text-white px-4 py-3 rounded-xl shadow-lg border border-slate-700 text-[12px] min-w-[140px]">
        <p className="font-bold mb-2 border-b border-slate-600 pb-1">📅 July {label}</p>
        {payload.map((item: any, i: number) => (
          <div key={i} className="flex justify-between text-slate-300">
            <span>{item.name}</span>
            <span className="font-bold text-white">{item.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex w-[90%] mx-auto  mt-[-10px] flex-wrap gap-5 h-fit font-sans justify-center">

      {/* SALES */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-[330px] h-[170px] flex flex-col justify-between transition hover:shadow-md">
        <div className="flex justify-between items-center">
          <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">SALES</span>
          <div className="flex items-center text-[13px] text-gray-500 cursor-pointer hover:text-blue-500 transition">
            Last 7 days <ChevronDown size={14} className="ml-1" />
          </div>
        </div>
        <h2 className="text-[27px] font-bold mt-[-20px] text-[#374151]">{sales.value}%</h2>
        <div>
          <div className="flex justify-between items-end mb-2 text-[15px]">
            <span className="text-[#3c4043]">Conversion rate</span>
            <div className="flex items-center font-bold text-green-600">
              {sales.conversionRate}% <ArrowUpRight size={16} />
            </div>
          </div>
          <div className="w-full bg-gray-100 h-[7px] rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full rounded-full transition-all duration-700" style={{ width: `${sales.value}%` }} />
          </div>
        </div>
      </div>

      {/* REVENUE */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-[330px] h-[170px] flex flex-col relative transition hover:shadow-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">REVENUE</span>
          <div className="flex items-center text-[13px] text-gray-500 hover:text-blue-500 cursor-pointer">
            Last 7 days <ChevronDown size={14} />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-[27px] mt-[-10px] font-bold text-[#374151]">${revenue.amount.toLocaleString()}</h2>
          <div className="flex items-center text-[15px] font-bold text-green-600">{revenue.growth}% <ArrowUpRight size={16} /></div>
        </div>
        <div className="w-full h-[65px] mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenue.chart} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#3b82f6" stopOpacity={0.5} />
                  <stop offset="90%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="linear"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2.5}
                fill="url(#revGradient)"
                dot={false}
                animationDuration={900}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* NEW CLIENTS */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-[330px] h-[170px] flex flex-col justify-between transition hover:shadow-md">
        <div className="flex justify-between items-center">
          <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">NEW CLIENTS</span>
          <div className="flex items-center text-[13px] text-gray-500 hover:text-blue-500 cursor-pointer">
            Last 7 days <ChevronDown size={14} />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-[27px] mt-[-6px] font-bold text-[#374151]">{newClients.count.toLocaleString()}</h2>
          <span className="text-[14px] font-bold text-green-600">{newClients.growth}%</span>
        </div>
        <div className="w-full h-[65px] mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={newClients.chart} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Tooltip content={<CustomTooltip />} />
              <Area type="linear" dataKey="last" stroke="#cbd5e1" strokeDasharray="4 4" strokeWidth={2} fill="none" dot={false} />
              <Area type="linear" dataKey="current" stroke="#3b82f6" strokeWidth={2.8} fill="transparent" dot={false} animationDuration={900} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-[330px] h-[170px] flex flex-col transition hover:shadow-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">ACTIVE SUBSCRIPTIONS</span>
          <div className="flex items-center text-[13px] text-gray-500 hover:text-blue-500 cursor-pointer">
            Last 7 days <ChevronDown size={14} />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-[27px] mt-[-10px] font-bold text-[#374151]">{subscriptions.count.toLocaleString()}</h2>
          <div className="flex items-center text-[15px] font-bold text-green-600">{subscriptions.growth}% <ArrowUpRight size={16} /></div>
        </div>
        <div className="mt-auto w-full h-[50px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={subscriptions.bars.map((val, i) => ({ name: `Day ${i+1}`, value: val }))}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#3b82f6" radius={[1,1,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default StatsDashboard;
