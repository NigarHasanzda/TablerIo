"use client";

import React, { useState } from "react";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { Bell, Menu } from "lucide-react";
import NotificationsModal from "./NotificationsModal";

type HeaderProps = {
  onToggleSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <>
      <header className="z-30 flex h-12 shrink-0 items-center justify-between gap-2 border-b border-gray-200/90 bg-white px-3">
        <div className="flex min-w-0 items-center gap-1.5 lg:hidden">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="rounded-md p-1.5 text-gray-600 hover:bg-gray-100"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="flex min-w-0 items-center gap-1.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#206bc4]">
              <span className="text-sm font-bold text-white">t.</span>
            </div>
            <span className="truncate text-base font-semibold text-gray-800">
              tabler
            </span>
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
          <button
            type="button"
            onClick={() => setNotificationsOpen(true)}
            className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-[#206bc4]"
            aria-label="Notifications"
          >
            <span className="relative inline-flex">
              <Bell className="h-[18px] w-[18px]" />
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white" />
            </span>
          </button>
          <div className="ml-1 flex items-center gap-2 border-l border-gray-200 pl-2 sm:pl-3">
            <Avatar src="/profile.png" sx={{ width: 28, height: 28 }} />
            <div className="hidden md:block leading-none">
              <p className="text-[13px] font-medium text-gray-800">
                Paweł Kuna
              </p>
              <p className="mt-0.5 text-[11px] text-gray-500">UI Designer</p>
            </div>
          </div>
        </div>
      </header>

      <NotificationsModal
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />
    </>
  );
};

export default Header;
