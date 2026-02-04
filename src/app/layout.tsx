'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import './globals.css';

// // Client-only wrappers
const HeaderWrapper = dynamic(() => import('@/components/Header/HeaderWrapper'), { ssr: false });
const FooterWrapper = dynamic(() => import('@/components/Footer/FooterWrapper'), { ssr: false });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <HeaderWrapper />
        <main>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
