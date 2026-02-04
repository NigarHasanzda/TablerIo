"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Forgot = () => {
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
                    Forgot password
                </h1>
                <p className="text-[14px] font-[500] text-[#6B7280] mb-6">
                    Enter your email address and your password will be reset and emailed to you.
                </p>

                <form className="space-y-4">
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
                    <button
                        type="submit"
                        className="w-full bg-[#066FD1] hover:bg-[#004a92] text-white text-sm font-semibold py-2.5 rounded-[4px] transition-colors mt-2"
                    >
                        <EmailOutlinedIcon
                            className="mr-2 inline-block !text-[18px] "
                            fontSize="small"
                        />
                        Send me new password
                    </button>
                </form>
            </div>

            <p className="mt-6 text-[14px] text-[#6b7280]">
                Forget it, {" "}
                <Link href="/auth/signin" className="text-[#0054a6] hover:underline font-medium">
                    send me back
                </Link>
                {" "} to the sign in screen.

            </p>
        </div>
    );
};

export default Forgot;