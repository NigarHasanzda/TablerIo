import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  LogIn,
  FileQuestion,
  Table2,
  AlertTriangle,
} from "lucide-react";

export type NavLink = {
  label: string;
  path: string;
};

export type NavSection = {
  title: string;
  icon?: LucideIcon;
  items: NavLink[];
};

/** Routes that exist in this project */
export const navSections: NavSection[] = [
  {
    title: "Main",
    icon: LayoutDashboard,
    items: [{ label: "Dashboard", path: "/" }],
  },
  {
    title: "Authentication",
    icon: LogIn,
    items: [
      { label: "Sign in", path: "/auth/signin" },
      { label: "Sign in link", path: "/auth/signin-link" },
      { label: "Sign up", path: "/auth/signup" },
      { label: "Forgot password", path: "/auth/forgot-password" },
      { label: "Terms of service", path: "/auth/terms" },
      { label: "Lock screen", path: "/auth/lock-screen" },
      { label: "2-step verification", path: "/auth/verification" },
      { label: "Verification code", path: "/auth/verification-code" },
    ],
  },
  {
    title: "Pages",
    icon: FileQuestion,
    items: [{ label: "FAQ", path: "/extra/faq" }],
  },
  {
    title: "Plugins",
    icon: Table2,
    items: [{ label: "Datatable", path: "/plugins/datatable" }],
  },
  {
    title: "Error pages",
    icon: AlertTriangle,
    items: [
      { label: "500", path: "/errors/500" },
      { label: "Maintenance", path: "/errors/maintenance" },
    ],
  },
];

export const minimalLayoutPrefixes = ["/errors", "/error", "/auth"];
