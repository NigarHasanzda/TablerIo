"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { minimalLayoutPrefixes } from "@/config/navigation";
import Header from "@/layout/header/Header";
import Sidebar from "@/layout/sidebar/Sidebar";

const FooterWrapper = dynamic(
  () => import("@/layout/footer/FooterWrapper"),
  { ssr: false }
);

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isMinimal = minimalLayoutPrefixes.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (isMinimal) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f1f4f9]">
      <Sidebar
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <Header onToggleSidebar={() => setSidebarOpen((o) => !o)} />
        <main className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {children}
        </main>
        <FooterWrapper />
      </div>
    </div>
  );
}
