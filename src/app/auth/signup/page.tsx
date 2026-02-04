"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-4">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#066FD1] p-1.5 rounded-lg shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 8l-4 4l4 4M17 8l4 4l-4 4M14 4l-4 16" />
                    </svg>
                </div>
                <span className="text-[22px] font-bold tracking-tight text-[#1d273b]">tabler</span>
            </div>
            <div className="bg-white w-full max-w-[440px] rounded-xl border border-[#e6e7e9] shadow-sm p-8">
                <h1 className="text-[18px] font-semibold text-center text-[#1d273b] mb-6">
                    Create new account
                </h1>

                <form className="space-y-4">
                    <div>
                        <label className="block text-[13px] font-semibold text-[#1d273b] mb-1.5">
                             Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="w-full px-3 py-2 bg-white border border-[#d9dbde] rounded-[4px] text-sm focus:outline-none focus:ring-2 focus:ring-[#0054a6]/20 focus:border-[#0054a6] transition-all placeholder:text-[#9ca3af]"
                        />
                    </div>
                    <div>
                        <label className="block text-[13px] font-semibold text-[#1d273b] mb-1.5">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full px-3 py-2 bg-white border border-[#d9dbde] rounded-[4px] text-sm focus:outline-none focus:ring-2 focus:ring-[#0054a6]/20 focus:border-[#0054a6] transition-all placeholder:text-[#9ca3af]"
                        />
                    </div>
                    <div>
                        <label className="block text-[13px] font-semibold text-[#1d273b] mb-1.5">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full px-3 py-2 bg-white border border-[#d9dbde] rounded-[4px] text-sm focus:outline-none focus:ring-2 focus:ring-[#0054a6]/20 focus:border-[#0054a6] transition-all placeholder:text-[#9ca3af]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#4b5563]"
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 pt-1">
                        <input
                            type="checkbox"
                            id="policy"
                            className="mt-1 w-4 h-4 rounded border-[#d9dbde] text-[#0054a6] focus:ring-[#0054a6]"
                        />
                        <label htmlFor="policy" className="text-[13px] text-[#4b5563] leading-tight select-none">
                            Agree the <Link href="#" className="text-[#0054a6] hover:underline">terms and policy</Link>.
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#066FD1] hover:bg-[#004a92] text-white text-sm font-semibold py-2.5 rounded-[4px] transition-colors mt-2"
                    >
                        Create new account
                    </button>
                </form>
            </div>

            <p className="mt-6 text-[14px] text-[#6b7280]">
               Already have account?{' '}
                <Link href="/auth/signin" className="text-[#0054a6] hover:underline font-medium">
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default SignUp;