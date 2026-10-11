"use client";

import React, { useEffect } from "react";
import { X, MessageSquare, UserPlus, AlertCircle, CheckCircle2 } from "lucide-react";

export type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "message" | "user" | "alert" | "success";
};

const mockNotifications: NotificationItem[] = [
  {
    id: "1",
    title: "New message",
    message: "Sarah sent you a message about the dashboard redesign.",
    time: "2 min ago",
    read: false,
    type: "message",
  },
  {
    id: "2",
    title: "Team invite",
    message: "Alex invited you to the Marketing workspace.",
    time: "1 hour ago",
    read: false,
    type: "user",
  },
  {
    id: "3",
    title: "Invoice paid",
    message: "Invoice #001407 from Apple was marked as paid.",
    time: "3 hours ago",
    read: true,
    type: "success",
  },
  {
    id: "4",
    title: "Storage warning",
    message: "You have used 85% of your allocated storage.",
    time: "Yesterday",
    read: true,
    type: "alert",
  },
  {
    id: "5",
    title: "Weekly report",
    message: "Your analytics summary for last week is ready.",
    time: "2 days ago",
    read: true,
    type: "message",
  },
];

function TypeIcon({ type }: { type: NotificationItem["type"] }) {
  const base = "h-4 w-4";
  switch (type) {
    case "message":
      return <MessageSquare className={`${base} text-blue-500`} />;
    case "user":
      return <UserPlus className={`${base} text-violet-500`} />;
    case "alert":
      return <AlertCircle className={`${base} text-orange-500`} />;
    case "success":
      return <CheckCircle2 className={`${base} text-green-500`} />;
  }
}

type NotificationsModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function NotificationsModal({
  open,
  onClose,
}: NotificationsModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const unread = mockNotifications.filter((n) => !n.read).length;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-14 sm:items-center sm:pt-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close notifications"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="notifications-title"
        className="relative flex max-h-[min(520px,85vh)] w-full max-w-md flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
          <div>
            <h2
              id="notifications-title"
              className="text-base font-semibold text-[#1d273b]"
            >
              Notifications
            </h2>
            <p className="text-[12px] text-gray-500">
              {unread} unread · {mockNotifications.length} total
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="min-h-0 flex-1 overflow-y-auto divide-y divide-gray-100">
          {mockNotifications.map((item) => (
            <li
              key={item.id}
              className={`flex gap-3 px-4 py-3 transition-colors hover:bg-gray-50 ${
                !item.read ? "bg-blue-50/40" : ""
              }`}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                <TypeIcon type={item.type} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-gray-800">
                    {item.title}
                    {!item.read && (
                      <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#206bc4] align-middle" />
                    )}
                  </p>
                  <span className="shrink-0 text-[11px] text-gray-400">
                    {item.time}
                  </span>
                </div>
                <p className="mt-0.5 text-[13px] leading-snug text-gray-600">
                  {item.message}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 border-t border-gray-100 px-4 py-3">
          <button
            type="button"
            className="flex-1 rounded-lg border border-gray-200 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50"
          >
            Mark all as read
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg bg-[#206bc4] py-2 text-[13px] font-medium text-white hover:bg-[#1a5cad]"
          >
            View all
          </button>
        </div>
      </div>
    </div>
  );
}
