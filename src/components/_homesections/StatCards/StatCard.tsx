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
    sales: { value: 75, conversionRate: 15 },

    revenue: {
      amount: 10840,
      growth: 23,
      chart: [
        { day: "1", value: 18 },
        { day: "3", value: 32 },
        { day: "5", value: 26 },
        { day: "7", value: 38 },
        { day: "9", value: 45 },
        { day: "10", value: 34 },
        { day: "13", value: 52 },
        { day: "15", value: 48 },
        { day: "20", value: 42 },
        { day: "25", value: 55 },
        { day: "30", value: 46 },
        { day: "7", value: 38 },
        { day: "9", value: 45 },
        { day: "10", value: 34 },
        { day: "13", value: 52 },
        { day: "15", value: 48 },
        { day: "20", value: 42 },
        { day: "25", value: 55 },
      ]
    },

    newClients: {
      count: 9421,
      growth: 18,
      chart: [
        { day: "1", current: 55, last: 60 },
        { day: "5", current: 62, last: 58 },
        { day: "10", current: 50, last: 63 },
        { day: "15", current: 70, last: 65 },
        { day: "20", current: 58, last: 60 },
        { day: "25", current: 72, last: 68 },
        { day: "30", current: 95, last: 62 },
        { day: "1", current: 55, last: 60 },
        { day: "5", current: 62, last: 58 },
        { day: "10", current: 50, last: 63 },
        { day: "15", current: 70, last: 65 },
        { day: "20", current: 58, last: 60 },
        { day: "25", current: 72, last: 68 },
        { day: "30", current: 95, last: 62 },
        { day: "15", current: 70, last: 65 },
        { day: "20", current: 58, last: 60 },
        { day: "25", current: 72, last: 68 },
        { day: "30", current: 95, last: 62 },
        { day: "1", current: 55, last: 60 },
        { day: "5", current: 62, last: 58 },
        { day: "10", current: 50, last: 63 },
        { day: "15", current: 70, last: 65 },
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
        <p className="font-bold mb-2 border-b border-slate-600 pb-1">
          📅 July {label}
        </p>
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
    <div className="flex w-[90%] mx-auto mt-[-10px] flex-wrap gap-5 h-fit font-sans justify-center">

      {/* SALES */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-[330px] h-[170px] flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">SALES</span>
          <div className="flex items-center text-[13px] text-gray-500">
            Last 7 days <ChevronDown size={14} />
          </div>
        </div>

        <h2 className="text-[27px] font-bold mt-[-20px] text-[#374151]">{sales.value}%</h2>

        <div>
          <div className="flex justify-between items-end mb-2 text-[15px]">
            <span>Conversion rate</span>
            <div className="flex items-center font-bold text-green-600">
              {sales.conversionRate}% <ArrowUpRight size={16} />
            </div>
          </div>

          <div className="w-full bg-gray-100 h-[7px] rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-full rounded-full transition-all duration-700"
              style={{ width: `${sales.value}%` }}
            />
          </div>
        </div>
      </div>

      {/* REVENUE */}
      <div className="bg-white pt-6 rounded-xl border border-gray-200 shadow-sm w-[330px] h-[170px] flex flex-col relative">
        <div className="flex justify-between mx-[20px] items-center mb-2">
          <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">REVENUE</span>
          <div className="flex items-center text-[13px] text-gray-500">
            Last 7 days <ChevronDown size={14} />
          </div>
        </div>

        <div className="flex ml-[20px] items-center gap-2 mb-3">
          <h2 className="text-[27px] mt-[-10px] font-bold text-[#374151]">
            ${revenue.amount.toLocaleString()}
          </h2>
          <div className="flex items-center text-[15px] font-bold text-green-600">
            {revenue.growth}% <ArrowUpRight size={16} />
          </div>
        </div>

        <div className="w-full h-[65px] mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={revenue.chart}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#3b82f6" stopOpacity={0.45} />
                  <stop offset="90%" stopColor="#3b82f6" stopOpacity={0.2} />
                </linearGradient>
              </defs>

              <XAxis dataKey="day" hide padding={{ left: 0, right: 0 }} />
              <YAxis hide />

              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2.4}
                fill="url(#revGradient)"
                dot={false}
                connectNulls
                animationDuration={900}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* NEW CLIENTS */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-[330px] h-[170px] flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">NEW CLIENTS</span>
          <div className="flex items-center text-[13px] text-gray-500">
            Last 7 days <ChevronDown size={14} />
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-[27px] mt-[-6px] font-bold text-[#374151]">
            {newClients.count.toLocaleString()}
          </h2>
          <span className="text-[14px] font-bold text-green-600">
            {newClients.growth}%
          </span>
        </div>

        <div className="w-full h-[65px] mt-auto mb-[-25px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={newClients.chart} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="last"
                stroke="#9ca3af"
                strokeDasharray="4"
                strokeWidth={1.2}
                fill="none"
                dot={false}
              />

              <Area
                type="monotone"
                dataKey="current"
                stroke="#3b82f6"
                strokeWidth={2.5}
                fill="transparent"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SUBSCRIPTIONS */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-[330px] h-[170px] flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">ACTIVE SUBSCRIPTIONS</span>
          <div className="flex items-center text-[13px] text-gray-500">
            Last 7 days <ChevronDown size={14} />
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-[27px] mt-[-10px] font-bold text-[#374151]">
            {subscriptions.count.toLocaleString()}
          </h2>
          <div className="flex items-center text-[15px] font-bold text-green-600">
            {subscriptions.growth}% <ArrowUpRight size={16} />
          </div>
        </div>

        <div className="mt-auto w-full mb-[-10px] h-[50px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={subscriptions.bars.map((val, i) => ({ name: i, value: val }))}>
              <XAxis hide />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default StatsDashboard;
