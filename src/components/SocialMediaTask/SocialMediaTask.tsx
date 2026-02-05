"use client";
import React, { useState } from 'react';
import { Calendar, CheckSquare, Check } from 'lucide-react';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

interface SocialTraffic {
    network: string;
    visitors: string;
    percentage: number;
}

interface Task {
    id: number;
    title: string;
    date: string;
    completedSubtasks: number;
    totalSubtasks: number;
    comments: number;
    userAvatar: string;
    isDone: boolean;
}

const SocialMediaTasks = () => {
    const trafficData: SocialTraffic[] = [
        { network: 'Instagram', visitors: '3,550', percentage: 70 },
        { network: 'Twitter', visitors: '1,798', percentage: 60 },
        { network: 'Facebook', visitors: '1,245', percentage: 50 },
        { network: 'TikTok', visitors: '986', percentage: 25 },
        { network: 'Pinterest', visitors: '854', percentage: 22 },
        { network: 'VK', visitors: '650', percentage: 75 },
        { network: 'Pinterest', visitors: '420', percentage: 90 },
    ];

    const tasks: Task[] = [
        { id: 1, title: 'Extend the data model.', date: 'December 08, 2024', completedSubtasks: 2, totalSubtasks: 7, comments: 3, userAvatar: 'https://i.pravatar.cc/150?u=1', isDone: true },
        { id: 2, title: 'Verify the event flow.', date: 'January 01, 2024', completedSubtasks: 0, totalSubtasks: 5, comments: 0, userAvatar: 'https://i.pravatar.cc/150?u=2', isDone: false },
        { id: 3, title: 'Database backup and maintenance', date: 'January 01, 2024', completedSubtasks: 0, totalSubtasks: 5, comments: 0, userAvatar: 'https://i.pravatar.cc/150?u=3', isDone: false },
        { id: 4, title: 'Identify the implementation team.', date: 'September 01, 2024', completedSubtasks: 6, totalSubtasks: 10, comments: 12, userAvatar: 'https://i.pravatar.cc/150?u=4', isDone: true },
        { id: 5, title: 'Define users and workflow', date: 'January 01, 2024', completedSubtasks: 0, totalSubtasks: 5, comments: 0, userAvatar: 'https://i.pravatar.cc/150?u=5', isDone: false },
        { id: 6, title: 'Check Pull Requests', date: 'July 17, 2024', completedSubtasks: 2, totalSubtasks: 9, comments: 3, userAvatar: 'https://i.pravatar.cc/150?u=6', isDone: true },
    ];
    const [selectedTasks, setSelectedTasks] = useState<number[]>(
        tasks.filter(t => t.isDone).map(t => t.id)
    );

    const toggleSelect = (id: number) => {
        setSelectedTasks(prev => 
            prev.includes(id) ? prev.filter(tid => tid !== id) : [...prev, id]
        );
    };

    return (
        <div className="flex w-[74.9%] -mt-2 flex-col lg:flex-row gap-4 p-4 bg-slate-50 mx-auto font-sans antialiased text-slate-600">

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm flex-1 h-fit">
                <div className="p-4 border-b border-slate-100">
                    <h2 className="text-base font-[600] text-slate-800">Social Media Traffic</h2>
                </div>
                <div className="w-full">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100 text-[12px] uppercase tracking-wider text-[#6B7280] font-[500]">
                                <th className="px-4 py-2.5">Network</th>
                                <th className="px-4 py-2.5">Visitors</th>
                                <th className="px-4 py-2.5"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {trafficData.map((item, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="px-4 py-3 text-sm text-slate-700">{item.network}</td>
                                    <td className="px-4 py-3 text-sm text-slate-600 font-medium">{item.visitors}</td>
                                    <td className="px-4 py-3 w-32">
                                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                                            <div
                                                className="bg-[#206bc4] h-1.5 rounded-full"
                                                style={{ width: `${item.percentage}%` }}
                                            ></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Tasks Card */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm flex-[1.8] h-fit">
                <div className="p-4 border-b border-slate-100">
                    <h2 className="text-base font-semibold text-slate-800">Tasks</h2>
                </div>
                <div className="divide-y divide-slate-100">
                    {tasks.map((task) => {
                        const isSelected = selectedTasks.includes(task.id);
                        return (
                            <div 
                                key={task.id} 
                                onClick={() => toggleSelect(task.id)}
                                className={`p-3.5 flex items-center group cursor-pointer transition-all duration-200 ${
                                    isSelected ? 'bg-[#F5F9FD]' : 'hover:bg-slate-50'
                                }`}
                            >
                                <div className={`w-[18px] h-[18px] rounded flex items-center justify-center border transition-all duration-200 ${
                                    isSelected ? 'bg-[#206bc4] border-[#206bc4]' : 'bg-white border-slate-300'
                                }`}>
                                    {isSelected && <Check size={12} strokeWidth={4} className="text-white" />}
                                </div>

                                {/* Title */}
                                <div className="ml-3 flex-1">
                                    <p className={`text-[14px] font-medium transition-colors ${
                                        isSelected ? 'text-slate-900' : 'text-[#6B7280]'
                                    }`}>
                                        {task.title}
                                    </p>
                                </div>

                                {/* Metadata Container */}
                                <div className="flex items-center gap-5 text-[#6B7280] text-[13px]">
                                    <div className="flex items-center gap-1.5 w-36">
                                        <CalendarMonthOutlinedIcon sx={{ fontSize: 19 }} />
                                        <span className="whitespace-nowrap">{task.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 w-12">
                                        <CheckSquare size={15} strokeWidth={1.5} />
                                        <span>{task.completedSubtasks}/{task.totalSubtasks}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 w-10">
                                        <MessageOutlinedIcon sx={{ fontSize: 17 }} />
                                        <span>{task.comments}</span>
                                    </div>
                                </div>

                                {/* Avatar */}
                                <div className="ml-4">
                                    <img
                                        src={task.userAvatar}
                                        alt="user"
                                        className="w-[30px] h-[30px] rounded-full border border-slate-100 object-cover"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SocialMediaTasks;