"use client";
import React from 'react';

const VerificationCode = () => {
  return (
    // Arka plan rengi isteğine göre biraz daha açıldı (#f4f6fa -> #f8fafc)
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] font-sans p-4">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-[#066FD1] p-[7px] rounded-lg shadow-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 8l-4 4l4 4M17 8l4 4l-4 4M14 4l-4 16" />
          </svg>
        </div>
        <span className="text-[22px] font-bold tracking-tight text-[#1d273b] leading-none">tabler</span>
      </div>

      {/* Card */}
      <div className="w-full max-w-[450px] bg-white rounded-lg border border-[#e6e8e9] shadow-[0_2px_4px_rgba(0,0,0,0.04)] p-8">
        <h1 className="text-[17px] font-semibold text-[#1d273b] mb-4 text-center tracking-tight">
          Authenticate Your Account
        </h1>

        <p className="text-[14px] text-[#1d273b] w-[80%] mx-auto text-center mb-8 leading-[1.6]">
          Please confirm your account by entering the authorization code sent to <span className="font-semibold text-[#1d273b]">+1 856-672-8552</span>.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* OTP Input Boxes */}
          <div className="flex justify-between gap-[10px]">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-[90%] h-14 text-center text-[18px] font-medium border border-[#e5e6e7] rounded-[7px] focus:ring-[3px] focus:ring-[#066fd11a] focus:border-[#066fd1] outline-none transition-all text-[#1d273b]"
              />
            ))}
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2.5 py-2">
            <input 
              type="checkbox" 
              id="remember"
              className="w-4 h-4 rounded border-[#dadcde] text-[#066FD1] focus:ring-offset-0 focus:ring-1 focus:ring-[#066fd1]" 
            />
            <label htmlFor="remember" className="text-[14px] text-[#1d273b] cursor-pointer select-none">
              Don't ask for codes again on this device
            </label>
          </div>

          {/* Buttons Group */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              className="flex-1 h-[38px] bg-white hover:bg-[#fcfdfe] text-[#1d273b] border border-[#dadcde] rounded-[4px] font-medium text-sm transition-all active:scale-[0.98]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-[38px] bg-[#066FD1] hover:bg-[#0563bc] text-white border border-[#0563bc] rounded-[4px] font-medium text-sm transition-all shadow-sm active:scale-[0.98]"
            >
              Verify
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-center font-[500] text-[13px] text-[#626976] max-w-[380px] leading-relaxed">
        It may take a minute to receive your code. Haven't received it?{" "}
        <a href="#" className="text-[#066FD1] hover:underline decoration-1 underline-offset-2">
          Resend a new code.
        </a>
      </div>
    </div>
  );
};

export default VerificationCode;