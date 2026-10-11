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

/** Yalnız layihədə mövcud marşrutlar */
export const navSections: NavSection[] = [
  {
    title: "Əsas",
    icon: LayoutDashboard,
    items: [{ label: "Dashboard", path: "/" }],
  },
  {
    title: "Autentifikasiya",
    icon: LogIn,
    items: [
      { label: "Daxil ol", path: "/auth/signin" },
      { label: "Link ilə daxil ol", path: "/auth/signin-link" },
      { label: "Qeydiyyat", path: "/auth/signup" },
      { label: "Şifrəni unutdum", path: "/auth/forgot-password" },
      { label: "İstifadə şərtləri", path: "/auth/terms" },
      { label: "Kilid ekranı", path: "/auth/lock-screen" },
      { label: "2 addımlı təsdiq", path: "/auth/verification" },
      { label: "Təsdiq kodu", path: "/auth/verification-code" },
    ],
  },
  {
    title: "Səhifələr",
    icon: FileQuestion,
    items: [{ label: "FAQ", path: "/extra/faq" }],
  },
  {
    title: "Plaginlər",
    icon: Table2,
    items: [{ label: "Datatable", path: "/plugins/datatable" }],
  },
  {
    title: "Xəta səhifələri",
    icon: AlertTriangle,
    items: [
      { label: "500", path: "/errors/500" },
      { label: "Texniki xidmət", path: "/errors/maintenance" },
    ],
  },
];

export const minimalLayoutPrefixes = ["/errors", "/error", "/auth"];
