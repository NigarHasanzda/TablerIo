"use client";

import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ErrorPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6  text-center">
            <div className="relative w-full max-w-[430px] aspect-video mt-8 mb-8">
                <Image
                    src="/errorpage.png"
                    alt="404 Not Found"
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            <h1 className="text-[21px] font-extrabold text-[#2d3748] mb-3">
                Oops... You just found an error page
            </h1>
            <p className="text-gray-500 text-[14.5px] mb-10  w-[380px] leading-relaxed">
                We are sorry but the page you are looking for was not found
            </p>
            <Link href="/" className="group flex items-center justify-center mt-[-10px] gap-2 text-[14px] bg-[#066fd1]  text-white px-3 py-2 rounded-md font-semibold transition-all duration-200 shadow-md "
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

export default ErrorPage;