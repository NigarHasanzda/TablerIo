"use client";

import React from "react";
import { ArrowUp, ArrowDown, Plus } from "lucide-react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { day: "1", current: 30, lastMonth: 15 },
  { day: "2", current: 42, lastMonth: 28 },
  { day: "3", current: 25, lastMonth: 35 },
  { day: "4", current: 55, lastMonth: 40 },
  { day: "5", current: 38, lastMonth: 22 },
  { day: "6", current: 60, lastMonth: 50 },
  { day: "7", current: 45, lastMonth: 30 },
  { day: "8", current: 70, lastMonth: 105 },
  { day: "9", current: 50, lastMonth: 35 },
  { day: "10", current: 80, lastMonth: 60 },
  { day: "11", current: 35, lastMonth: 95 },
  { day: "12", current: 90, lastMonth: 70 },
  { day: "13", current: 65, lastMonth: 50 },
  { day: "14", current: 95, lastMonth: 75 },
  { day: "15", current: 55, lastMonth: 40 },
  { day: "16", current: 85, lastMonth: 65 },
  { day: "17", current: 60, lastMonth: 45 },
  { day: "18", current: 90, lastMonth: 80 },
  { day: "19", current: 45, lastMonth: 30 },
  { day: "20", current: 75, lastMonth: 55 },
  { day: "21", current: 50, lastMonth: 35 },
  { day: "22", current: 90, lastMonth: 70 },
  { day: "23", current: 65, lastMonth: 45 },
  { day: "24", current: 105, lastMonth: 80 },
  { day: "25", current: 0, lastMonth: 50 },
  { day: "26", current: 95, lastMonth: 65 },
  { day: "27", current: 55, lastMonth: 35 },
  { day: "28", current: 100, lastMonth: 75 },
  { day: "29", current: 80, lastMonth: 55 },
  { day: "30", current: 110, lastMonth: 85 },
  { day: "31", current: 90, lastMonth: 10 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-[#374151] text-white p-3 rounded-lg shadow-xl border border-slate-700 text-[12px]">
        <p className="font-bold mb-1 border-b border-slate-600 pb-1">July {label}</p>
        <p className="text-blue-400">
          Visitors: <span className="font-bold text-white">{payload[0].value}</span>
        </p>
        <p className="text-slate-400">
          Last Month: <span className="font-bold text-white">{payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const Dashboard = () => {
  return (
    <div className="mx-auto w-full  max-w-[72.4%] px-4 lg:px-0 py-8 font-sans">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Overview</p>
          <h1 className="text-[20px] font-bold text-[#374151]">Dashboard</h1>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 shadow-sm">
            New view
          </button>
          <button className="px-5 py-2.5 bg-[#066fd1] text-white rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 shadow-sm">
            <Plus size={18} /> Create new report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">

        {/* WELCOME CARD */}
        <div className="col-span-12 lg:col-span-6 h-[240px] shadow-sm bg-[linear-gradient(0deg,rgba(255,255,255,1)_74%,rgba(222,236,249,1)_100%)] px-5 py-5 rounded-[8px] border border-blue-50 relative flex flex-col justify-between">
          <div>
            <h2 className="text-[21px] font-bold text-[#374151]">Welcome back, Paweł</h2>
            <p className="text-gray-500 text-[14px] font-[500] w-full md:w-[50%] mt-2">
              You have 5 new messages and 2 new notifications.
            </p>
          </div>

          {/* Illustration — hidden on mobile */}
          <div className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 opacity-90">
            <img src="/logo.png" className="w-[280px] h-[280px] object-contain" />
          </div>

          <div className="flex gap-6 mt-6 flex-wrap">
            <div>
              <p className="text-[12px] font-bold text-gray-500 uppercase tracking-tighter">Today's Sales</p>
              <div className="flex items-center gap-1">
                <span className="text-[17px] font-black text-slate-800">6,782</span>
                <span className="text-xs font-bold text-green-500 flex items-center">
                  7% <ArrowUp size={12} />
                </span>
              </div>
              <div className="w-20 h-[4px] bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-green-500"></div>
              </div>
            </div>

            <div>
              <p className="text-[12px] font-bold text-gray-500 uppercase tracking-tighter">Growth Rate</p>
              <div className="flex items-center gap-1">
                <span className="text-[17px] font-black text-slate-800">78,4%</span>
                <span className="text-xs font-bold text-red-500 flex items-center">
                  -1% <ArrowDown size={12} />
                </span>
              </div>
              <div className="w-20 h-[4px] bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[50%] h-full bg-red-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* TOTAL USERS */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white p-4 rounded-[12px] h-[236px] border border-gray-100 shadow-sm flex flex-col overflow-hidden">
          <p className="text-[13px] font-medium text-slate-500 uppercase tracking-wider">Total Users</p>

          <div className="flex items-center gap-3 mt-1">
            <h2 className="text-[27px] font-[700] text-[#374151]">75,782</h2>
            <span className="text-[14px] font-semibold text-emerald-500 flex items-center">
              2% <ArrowUp size={13} />
            </span>
          </div>

          <p className="text-[14px] text-slate-600 mt-1">
            24,635 users increased from last month
          </p>

          {/* FULL WIDTH CHART FIX */}
          <div className="mt-auto h-[110px] -mx-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Tooltip content={<CustomTooltip />} cursor={{ strokeWidth: 1 }} />
                <Area type="monotone" dataKey="lastMonth" stroke="#9CA3AF" strokeWidth={1} strokeDasharray="3 3" fill="transparent" dot={false} />
                <Area type="monotone" dataKey="current" stroke="#3b82f6" strokeWidth={3} fill="transparent" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ACTIVE USERS */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white p-6 rounded-[16px] h-[236px] border border-gray-100 shadow-sm flex flex-col">
          <p className="text-[13px] font-medium text-slate-500 uppercase tracking-wider">Active Users</p>

          <div className="flex items-center gap-3 mt-1.5 mb-6">
            <h2 className="text-[27px] font-[700] text-[#374151]">25,782</h2>
            <span className="text-[14px] font-bold text-red-400 flex items-center">
              -1% <ArrowDown size={16} />
            </span>
          </div>

          <div className="relative w-full flex justify-center mt-auto">
            <svg className="w-full max-w-[420px] h-[120px] rotate-[135deg]" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#f1f5f9" strokeWidth="19" strokeDasharray={2 * Math.PI * 50 * 0.7} />
              <circle cx="60" cy="60" r="50" fill="none" stroke="#0066ff" strokeWidth="16" strokeDasharray={2 * Math.PI * 50 * 0.75} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[28px] font-[300]">70%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
