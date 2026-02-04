"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; // 'npm install lucide-react' lazımdır, yoxdursa standart SVG-dən istifadə et
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const InternalServerError: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 select-none">
      <div className="max-w-md w-full text-center mt-[40px] space-y-6">
        <h1
          className="text-[60px] font-[400] text-slate-500 tracking-widest leading-none"
          style={{ letterSpacing: '5px' }}
        >
          500

        </h1>


        <div className="space-y-2">
          <h2 className="text-[20px] font-bold text-slate-800">
            Oops... You just found an error page
          </h2>
          <p className="text-slate-500 text-[14px] font-[500]">
            We are sorry but our server encountered an internal error
          </p>
        </div>

        <div className="pt-4">
        </div>



      </div>
      <Link href="/" className="group flex items-center justify-center mt-[-10px] gap-2 text-[14px] bg-[#066fd1]  text-white px-3 py-2 rounded-md font-semibold transition-all duration-200 shadow-md "
      >
        <ArrowBackIcon
          fontSize="small"
          className="!text-[18px] !w-4 !h-4"
        />

        Take me home
      </Link>
    </main>
  );
};

export default InternalServerError;