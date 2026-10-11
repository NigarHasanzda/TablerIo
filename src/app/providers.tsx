"use client";

import React from "react";
import AppShell from "@/layout/shell/AppShell";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
