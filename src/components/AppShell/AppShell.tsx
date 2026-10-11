"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { minimalLayoutPrefixes } from "@/config/navigation";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

const FooterWrapper = dynamic(
  () => import("@/components/Footer/FooterWrapper"),
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
