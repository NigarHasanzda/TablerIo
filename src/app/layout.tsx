'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import "./globals.css";

const AppShell = dynamic(() => import('@/layout/shell/AppShell'), {
  ssr: false,
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
