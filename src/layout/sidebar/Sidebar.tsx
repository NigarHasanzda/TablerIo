"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { navSections } from "@/config/navigation";

type SidebarProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

function isItemActive(pathname: string, path: string) {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function isSectionActive(pathname: string, section: (typeof navSections)[number]) {
  return section.items.some((item) => isItemActive(pathname, item.path));
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const initialExpanded = useMemo(
    () =>
      Object.fromEntries(
        navSections.map((s) => [s.title, isSectionActive(pathname, s)])
      ),
    [pathname]
  );

  const [expanded, setExpanded] =
    useState<Record<string, boolean>>(initialExpanded);

  useEffect(() => {
    setExpanded((prev) => {
      const next = { ...prev };
      navSections.forEach((s) => {
        if (isSectionActive(pathname, s)) next[s.title] = true;
      });
      return next;
    });
  }, [pathname]);

  const toggle = (title: string) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex h-screen w-[220px] flex-col border-r border-gray-200/90 bg-white
          transition-transform duration-200 ease-out
          lg:static lg:z-auto lg:shrink-0 lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex h-12 shrink-0 items-center border-b border-gray-200/90 px-3">
          <Link
            href="/"
            onClick={onClose}
            className="flex min-w-0 items-center gap-2"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#206bc4]">
              <span className="text-sm font-bold text-white">t.</span>
            </div>
            <span className="truncate text-base font-semibold text-gray-800">
              tabler
            </span>
          </Link>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2">
          {navSections.map((section) => {
            const Icon = section.icon;
            const isOpen = expanded[section.title] ?? false;
            const sectionActive = isSectionActive(pathname, section);

            return (
              <div key={section.title} className="mb-0.5">
                <button
                  type="button"
                  onClick={() => toggle(section.title)}
                  className={`flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-[13px] font-medium transition-colors ${
                    sectionActive
                      ? "text-[#206bc4]"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {Icon && (
                    <Icon className="h-3.5 w-3.5 shrink-0 opacity-70" />
                  )}
                  <span className="min-w-0 flex-1 truncate">{section.title}</span>
                  {isOpen ? (
                    <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-40" />
                  ) : (
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-40" />
                  )}
                </button>
                {isOpen && (
                  <ul className="mb-1 ml-2 space-y-px border-l border-gray-200 pl-2">
                    {section.items.map((item) => {
                      const active = isItemActive(pathname, item.path);
                      return (
                        <li key={item.path}>
                          <Link
                            href={item.path}
                            onClick={onClose}
                            className={`block truncate rounded-md px-2 py-1 text-[13px] leading-snug transition-colors ${
                              active
                                ? "bg-[#206bc4] font-medium text-white"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
