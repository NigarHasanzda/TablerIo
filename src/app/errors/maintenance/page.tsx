import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="max-w-md w-full text-center mt-[20px] space-y-8">
        <div className="relative flex justify-center">
          <Image bg-amber-950
            src="/maintenance.png"
            alt="Bakım Çalışması"
            width={230}
            height={230}
            priority
            className="object-contain"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-[20px] font-bold text-slate-800">
            Temporarily down for maintenance
          </h1>
          <p className="text-slate-600 text-[14px]  mx-auto w-[80%] leading-relaxed">
            Sorry for the inconvenience but we&apos;re performing some
            maintenance at the moment. We&apos;ll be back online shortly!
          </p>
        </div>
        <div className="pt-4">
        </div>

      </div>
      <Link href="/" className="group flex items-center justify-center mt-[-10px] gap-2 text-[14.6px] bg-[#066fd1]  text-white px-3.5 py-2.5 rounded-md font-semibold transition-all duration-200 shadow-md "
      >
        <ArrowBackIcon
          fontSize="small"
          className="!text-[18px] !w-4 !h-4"
        />

        Take me home
      </Link>
    </div>
  );
};

export default MaintenancePage;