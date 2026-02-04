"use client";
import React from 'react';
import Image from 'next/image';
import { Lock } from 'lucide-react';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const LockScreen = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f6fa] p-4">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#066FD1] p-1.5 rounded-lg shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 8l-4 4l4 4M17 8l4 4l-4 4M14 4l-4 16" />
                    </svg>
                </div>
                <span className="text-[22px] font-bold tracking-tight text-[#1d273b]">tabler</span>
            </div>

            <div className="w-full max-w-[450px] bg-white rounded-[6px] border border-[#e5e7eba8] shadow-sm p-8 text-center">
                <h1 className="text-[17px] font-semibold text-[#3a3e46] mb-2">Account Locked</h1>
                <p className="text-[#626976] text-sm mb-6">
                    Please enter your password to unlock your account
                </p>

                <div className="flex flex-col items-center mb-6">
                    <div className="relative w-20 h-20 mb-3">
                        <img
                            src="/profile.png"
                            alt="Paweł Kuna"
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <h2 className="font-semibold text-[#1d273b]">Paweł Kuna</h2>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="password"
                        placeholder="Password..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0054a6] focus:border-transparent transition-all placeholder:text-gray-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#066FD1] hover:bg-[#4689cc] text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                        <LockOpenIcon className="!text-[16px]" />
                        Unlock
                    </button>
                </form>
            </div>

        </div>
    );
};

export default LockScreen;