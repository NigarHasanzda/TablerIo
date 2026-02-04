"use client";
import React from 'react';

const SignInLink = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] font-sans p-4">
      <div className="flex items-center gap-2 mb-10">
        <div className="bg-[#066FD1] p-[7px] rounded-lg shadow-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 8l-4 4l4 4M17 8l4 4l-4 4M14 4l-4 16" />
          </svg>
        </div>
        <span className="text-[22px] font-bold tracking-tight text-[#34373d] leading-none">tabler</span>
      </div>

      {/* Content Section */}
      <div className="text-center max-w-[400px]">
        <h1 className="text-[24px] font-bold text-[#1d273b] mb-1 tracking-tight">
          Check your inbox
        </h1>
        
        <p className="text-[15px] text-[#626976] leading-relaxed mb-8">
          We've sent you a magic link to <span className="font-semibold text-[#6B7280]">support@tabler.io</span>.<br />
          Please click the link to confirm your address.
        </p>

        <div className="space-y-1">
          <p className="text-[13px] text-[#626976]">
            Can't see the email? Please check the spam folder.
          </p>
          <p className="text-[13px] text-[#626976]">
            Wrong email? Please{" "}
            <a href="#" className="text-[#066FD1] hover:underline font-medium decoration-1 underline-offset-2">
              re-enter your address
            </a>.
          </p>
        </div>
      </div>

    </div>
  );
};

export default SignInLink;