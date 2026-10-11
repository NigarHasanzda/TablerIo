'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import "./globals.css";

const AppShell = dynamic(() => import('@/components/AppShell/AppShell'), {
  ssr: false,
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="az">
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
