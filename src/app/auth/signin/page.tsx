"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Github } from 'lucide-react';
import CodeIcon from '@mui/icons-material/Code';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] flex flex-col items-center justify-center p-4 pt-8.5">
            <div className="flex items-center gap-2 mb-8">
                <div className="bg-[#066FD1] p-1.5 rounded-lg">
                    <CodeIcon fontSize="small" className="!text-white !w-5 !h-5" />
                </div>
                <span className="text-[22px] font-[600] text-[#4A4A4A]">tabler</span>
            </div>

            <div className="bg-white w-full max-w-[450px] rounded-xl border border-[#E5E8EC] shadow-sm p-8">
                <h1 className="text-xl font-semibold text-center text-[#1d273b] mb-8">
                    Login to your account
                </h1>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1.5">
                            <label className="text-sm font-medium text-slate-700">Password</label>
                            <Link href="#" className="text-[14px] font-[500] text-[#076fd1] hover:underline">
                                I forgot password
                            </Link>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Your password"
                                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4.5 h-4.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="remember" className="text-sm text-slate-600 select-none">
                            Remember me on this device
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#066FD1] hover:bg-[#1a7fdd] text-white font-medium py-2.5 rounded-md transition-colors"
                    >
                        Sign in
                    </button>
                </form>


                <div className="relative my-8 text-center">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-200"></span>
                    </div>
                    <span className="relative bg-white px-2 text-xs uppercase text-slate-400 font-semibold tracking-wider">
                        OR
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 border border-slate-200 py-2 rounded-md hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700">
                        <Github size={18} /> Login with Github
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-slate-200 py-2 rounded-md hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        Login with X
                    </button>
                </div>
            </div>


            <p className="mt-6 font-[500] text-sm text-slate-500">
                Don&apos;t have account yet?{' '}
                <Link href="/auth/signup" className="text-blue-600 hover:underline">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;