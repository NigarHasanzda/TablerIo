"use client";

import React, { useState, useEffect } from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const chartData = [
  { value: 400 }, { value: 380 }, { value: 420 }, { value: 390 }, 
  { value: 450 }, { value: 650 }, { value: 480 }, { value: 460 }, 
  { value: 550 }, { value: 520 }, { value: 780 }, { value: 620 }, 
  { value: 700 }, { value: 850 }, { value: 920 }, { value: 880 }, 
  { value: 1050 }, { value: 1100 }
];

const DeveloperActivitySection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const notifications = [
    { name: "Jeffie Lewzey", action: "commented on your post:", target: "Not everything is what it seems", time: "1 day ago", img: "https://i.pravatar.cc/100?u=1", dot: true },
    { name: "Mallory Hulme", action: "'s birthday today", target: "", time: "now", img: "https://i.pravatar.cc/100?u=2", dot: true },
    { name: "Dunn Slane", action: "posted a status:", target: "Trying to figure things out one step at a time.", time: "now", img: "https://i.pravatar.cc/100?u=3", dot: true },
    { name: "Emmy Levet", action: "created a new project:", target: "Smart Morning Alarm", time: "4 days ago", img: "https://i.pravatar.cc/100?u=4", dot: true },
    { name: "Maryjo Lebarree", action: "liked your photo", target: "", time: "now", img: "https://i.pravatar.cc/100?u=5", dot: false },
    { name: "Egan Poetz", action: "registered a new client:", target: "Trilla Solutions", time: "1 day ago", img: "https://i.pravatar.cc/100?u=6", dot: false }
  ];

  const commits = [
    { userImg: "https://i.pravatar.cc/100?u=3", msg: "Fix dart Sass compatibility (#29755)", date: "28 Nov 2025" },
    { userImg: "https://i.pravatar.cc/100?u=1", msg: "Change deprecated html tags to text decoration classes (#296...", date: "27 Nov 2025" },
    { userImg: "https://i.pravatar.cc/100?u=2", msg: "justify-content:between => justify-content:space-between (#29...", date: "26 Nov 2025" },
    { userImg: "https://i.pravatar.cc/100?u=4", msg: "Update change-version.js (#29736)", date: "26 Nov 2025" },
    { userImg: "https://i.pravatar.cc/100?u=8", msg: "Regenerate package-lock.json (#29730)", date: "25 Nov 2025" }
  ];

  // SSR sırasında boş bir iskelet veya null dönerek eşleşme hatasını engelliyoruz
  if (!mounted) return <div className="min-h-screen bg-transparent" />;

  return (
    <div className="p-6 min-h-screen font-sans antialiased text-[#495057]">
      <div className="w-[74.9%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SOL KOLON */}
        <div className="space-y-6">
          <div className="bg-white rounded-md shadow-sm border border-[#e9ecef] p-5">
            <h4 className="text-[13px] font-semibold mb-4 text-[#495057]">
              Using Storage <span className="font-bold">6854.45 MB</span> <span className="text-gray-400 font-normal text-xs ml-1">of 8 GB</span>
            </h4>
            <div className="flex h-2 w-full rounded-full overflow-hidden bg-[#e9ecef] mb-4">
              <div className="bg-[#206bc4]" style={{ width: '35%' }}></div>
              <div className="bg-[#4299e1] border-l border-white" style={{ width: '20%' }}></div>
              <div className="bg-[#2fb344] border-l border-white" style={{ width: '15%' }}></div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { label: 'Regular', size: '915MB', color: 'bg-[#206bc4]' },
                { label: 'System', size: '415MB', color: 'bg-[#4299e1]' },
                { label: 'Shared', size: '201MB', color: 'bg-[#2fb344]' },
                { label: 'Free', size: '612MB', color: 'bg-[#ced4da]' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-sm ${item.color}`}></span>
                  <span className="text-[11px] text-gray-500 font-medium">{item.label}</span>
                  <span className="text-[11px] text-gray-400">{item.size}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-md shadow-sm border border-[#e9ecef] overflow-hidden">
            {/* Scrollbar gizleme Tailwind class'ı globals.css'de tanımlanmalıdır */}
            <div className="max-h-[480px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {notifications.map((n, i) => (
                <div key={i} className="flex items-center p-4 border-b border-[#f1f3f5] last:border-0 hover:bg-[#f8f9fa] transition-colors">
                  <img src={n.img} alt="" className="w-9 h-9 rounded-full mr-3 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] leading-snug">
                      <span className="font-bold text-[#212529]">{n.name}</span> {n.action} <span className="font-bold text-[#212529]">{n.target}</span>
                    </p>
                    <span className="text-[11px] text-gray-400 uppercase font-medium">{n.time}</span>
                  </div>
                  {n.dot && <div className="w-1.5 h-1.5 rounded-full bg-[#206bc4] ml-2"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SAĞ KOLON - Development Activity */}
        <div className="bg-white rounded-md shadow-sm border border-[#e9ecef] flex flex-col overflow-hidden">
          <div className="p-5 pb-0">
            <h3 className="text-[15px] font-bold text-[#212529] mb-4">Development activity</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-10 h-10 shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f3f5" strokeWidth="3" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#206bc4" strokeWidth="3" strokeDasharray="70 100" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-1">
                  Today's Earning: <span className="text-[#212529] text-sm ml-1">$4,262.40</span>
                </p>
                <p className="text-[11px] font-bold">
                  <span className='text-[#2fb344]'><TrendingUpOutlinedIcon sx={{ fontSize: 13 }} /></span> +5% more than yesterday
                </p>
              </div>
            </div>
          </div>

          {/* Grafik Alanı */}
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#206bc4" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#206bc4" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ fontSize: '12px', borderRadius: '4px', border: '1px solid #e9ecef' }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#206bc4" 
                  strokeWidth={2} 
                  fill="url(#colorValue)" 
                  animationDuration={1000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Commit Tablosu */}
          <div className="mt-auto">
            <div className="grid grid-cols-12 bg-[#f8f9fa] border-t border-[#e9ecef] px-5 py-2">
              <div className="col-span-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">User</div>
              <div className="col-span-7 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Commit</div>
              <div className="col-span-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Date</div>
            </div>
            <div className="divide-y divide-[#f1f3f5]">
              {commits.map((c, i) => (
                <div key={i} className="grid grid-cols-12 px-5 py-3 items-center hover:bg-[#fbfcfd] transition-colors">
                  <div className="col-span-2">
                    <img src={c.userImg} className="w-7 h-7 rounded-full" alt="" />
                  </div>
                  <div className="col-span-7 text-[12px] text-[#495057] font-medium truncate pr-4">{c.msg}</div>
                  <div className="col-span-3 text-[11px] text-gray-400 text-right">{c.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperActivitySection;