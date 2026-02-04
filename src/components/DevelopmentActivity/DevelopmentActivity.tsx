"use client";

import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
    { name: '1', value: 400 },
    { name: '2', value: 350 },
    { name: '3', value: 500 },
    { name: '4', value: 800 },
    { name: '5', value: 450 },
    { name: '6', value: 550 },
    { name: '7', value: 1100 },
    { name: '8', value: 900 },
    { name: '9', value: 1400 },
];

const DeveloperActivitySection = () => {
    const notifications = [
        { name: "Jeffie Lewzey", action: "commented on your post:", target: "Not everything is what it seems", time: "1 day ago", img: "https://i.pravatar.cc/100?u=1" },
        { name: "Mallory Hulme", action: "'s birthday today", target: "", time: "now", img: "https://i.pravatar.cc/100?u=2", isBirthday: true },
        { name: "Dunn Slane", action: "posted a status:", target: "Trying to figure things out one step at a time.", time: "now", img: "https://i.pravatar.cc/100?u=3" },
        { name: "Emmy Levet", action: "created a new project:", target: "Smart Morning Alarm", time: "4 days ago", img: "https://i.pravatar.cc/100?u=4" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },

        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },
        { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5" },

        { name: "Emmy Levet", action: "created a new project:", target: "Smart Morning Alarm", time: "4 days ago", img: "https://i.pravatar.cc/100?u=4" },
        { name: "Emmy Levet", action: "created a new project:", target: "Smart Morning Alarm", time: "4 days ago", img: "https://i.pravatar.cc/100?u=4" },
        { name: "Emmy Levet", action: "created a new project:", target: "Smart Morning Alarm", time: "4 days ago", img: "https://i.pravatar.cc/100?u=4" },
        { name: "Emmy Levet", action: "created a new project:", target: "Smart Morning Alarm", time: "4 days ago", img: "https://i.pravatar.cc/100?u=4" },
        { name: "Egan Poetz", action: "registered a new client:", target: "Trilla Solutions", time: "1 day ago", img: "https://i.pravatar.cc/100?u=6" }
    ];

    const commits = [
        { user: "Dunn Slane", msg: "Fix dart Sass compatibility (#29755)", date: "28 Nov 2025", img: "https://i.pravatar.cc/100?u=3" },
        { user: "Jeffie Lewzey", msg: "Change deprecated html tags to text decoration (#296...)", date: "27 Nov 2025", img: "https://i.pravatar.cc/100?u=1" },
        { user: "Mallory Hulme", msg: "justify-content:between => justify-content:space-between (#29...", date: "26 Nov 2025", img: "https://i.pravatar.cc/100?u=2" },
        { user: "Emmy Levet", msg: "Update change-version.js (#29736)", date: "26 Nov 2025", img: "https://i.pravatar.cc/100?u=4" }
    ];

    return (
        <div className="bg-[#f8f9fa] p-8 min-h-screen font-sans text-gray-700">
            <div className="w-[74.6%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-6">

                    {/* Storage */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-sm font-semibold">
                                Using Storage <span className="text-blue-600">6854.45 MB</span> of 8 GB
                            </h4>
                        </div>
                        <div className="w-full h-3 bg-gray-100 rounded-full flex overflow-hidden">
                            <div style={{ width: '40%' }} className="bg-blue-600 h-full"></div>
                            <div style={{ width: '20%' }} className="bg-blue-400 h-full border-l border-white"></div>
                            <div style={{ width: '15%' }} className="bg-green-500 h-full border-l border-white"></div>
                            <div style={{ width: '25%' }} className="bg-gray-200 h-full border-l border-white"></div>
                        </div>
                        <div className="flex gap-4 mt-4 text-[11px] text-gray-500">
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-[3px] bg-blue-600"></span> Regular 915MB</span>
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-[3px] bg-blue-400"></span> System 415MB</span>
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-[3px] bg-green-500"></span> Shared 201MB</span>
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-[3px] bg-gray-200"></span> Free 612MB</span>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex-1">
                        <div className="max-h-[500px]  overflow-y-auto custom-scrollbar">
                            {notifications.map((item, idx) => (
                                <div key={idx} className="p-4 flex items-start gap-3 border-b border-gray-50 hover:bg-gray-50 transition-colors relative group">
                                    <img src={item.img} className="w-10 h-10 rounded-full object-cover" alt={item.name} />
                                    <div className="flex-1">
                                        <p className="text-sm leading-tight">
                                            <span className="font-bold text-gray-800">{item.name}</span> {item.action} {item.target && <span className="font-bold">{item.target}</span>}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Development activity</h3>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-12 h-12">
                                <svg viewBox="0 0 36 36" className="w-12 h-12 transform -rotate-90">
                                    <path className="stroke-gray-100" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="stroke-blue-500" strokeDasharray="75, 100" strokeWidth="3" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-bold tracking-tighter">Today's Earning: <span className="text-gray-900 text-lg">$4,262.40</span></p>
                                <p className="text-xs text-green-500 font-medium">↗ +5% more than yesterday</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-[250px] w-full -ml-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Tooltip cursor={{ stroke: '#3b82f6', strokeWidth: 1 }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-auto">
                        <div className="grid grid-cols-12 px-6 py-2 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            <div className="col-span-2">User</div>
                            <div className="col-span-7">Commit</div>
                            <div className="col-span-3 text-right">Date</div>
                        </div>
                        {commits.map((commit, i) => (
                            <div key={i} className="grid grid-cols-12 px-6 py-3 items-center border-t border-gray-50 hover:bg-gray-50 transition-all">
                                <div className="col-span-2">
                                    <img src={commit.img} className="w-8 h-8 rounded-full" alt={commit.user} />
                                </div>
                                <div className="col-span-7 text-xs font-medium text-gray-600 truncate pr-4">{commit.msg}</div>
                                <div className="col-span-3 text-[11px] text-gray-400 text-right">{commit.date}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeveloperActivitySection;
