'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import "./globals.css";

const HeaderWrapper = dynamic(() => import('@/components/Header/HeaderWrapper'), { ssr: false });
const FooterWrapper = dynamic(() => import('@/components/Footer/FooterWrapper'), { ssr: false });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <HeaderWrapper />
        <main className="flex-1">
          {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}
