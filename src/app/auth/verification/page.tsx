"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Verification = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f6fa] font-sans">

      <div className="flex items-center gap-2 mb-8">
        <div className="bg-[#066FD1] p-1.5 rounded-lg shadow-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 8l-4 4l4 4M17 8l4 4l-4 4M14 4l-4 16" />
          </svg>
        </div>
        <span className="text-[22px] font-bold tracking-tight text-[#1d273b]">tabler</span>
      </div>

      <div className="w-full max-w-[450px] bg-white rounded-lg border border-[#dadcde] shadow-sm p-8">
        <h1 className="text-[18px] font-semibold text-[#1d273b] mb-6 text-center">
          2-Step Verification
        </h1>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-[#1d273b]">Country</label>
            <div className="relative">
              <select className="w-full h-[38px] appearance-none pl-3 pr-10 border border-[#dadcde] rounded-[4px] text-sm text-[#1d273b] bg-white focus:ring-1 focus:ring-[#066fd180] focus:border-[#066fd1] outline-none transition-all">
                <option>Andorra</option>
                <option>Turkey</option>
                <option>United States</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-[#626976]">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-[#1d273b]">Your Phone Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 border border-r-0 border-[#dadcde] rounded-l-[4px] bg-[#f8f9fa] text-sm text-[#626976]">
                +1
              </span>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="block w-full h-[38px] px-3 border border-[#dadcde] rounded-r-[4px] text-sm text-[#1d273b] placeholder:text-[#9ca3af] focus:ring-1 focus:ring-[#066fd180] focus:border-[#066fd1] outline-none transition-all"
              />
            </div>
          </div>

          <div className=' w-[99%] pt-[10px] ' >
            <p className="text-[14.5px] font-[550] leading-relaxed text-[#888c96]">
              Security is critical in Tabler. to help keep your account safe, we'll text you a verification code when you sign in on a new device
            </p>
          </div>

          <button
            type="submit"
            className="w-full h-[38px] bg-[#066FD1] hover:bg-[#0563bc] text-white rounded-[4px] font-medium text-sm transition-colors mt-6 shadow-sm"
          >
            Send code
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;