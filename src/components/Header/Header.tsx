'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Path-lar üçün Link əlavə edildi
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import LayersOutlined from '@mui/icons-material/LayersOutlined';
import CheckBoxOutlined from '@mui/icons-material/CheckBoxOutlined';
import StarOutlineOutlined from '@mui/icons-material/StarOutlineOutlined';
import ViewQuiltOutlined from '@mui/icons-material/ViewQuiltOutlined';
import ExtensionOutlined from '@mui/icons-material/ExtensionOutlined';
import CardGiftcardOutlined from '@mui/icons-material/CardGiftcardOutlined';
import HelpOutlineOutlined from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';

/* ================= TYPES ================= */
interface NavItemType {
  label: string;
  icon: React.ElementType;
  path: string; // Path əlavə edildi
  hasDropdown?: boolean;
  active?: boolean;
  mega?: boolean;
}

interface MenuItemType {
  label: string;
  path: string; // Path əlavə edildi
  new?: boolean;
  arrow?: boolean;
}

/* ================= DATA ================= */
const interfaceLeft: MenuItemType[] = [
  { label: "All Elements", path: "/interface/all" },
  { label: "Accordion", path: "/interface/accordion", new: true },
  { label: "Alerts", path: "/interface/alerts" },
  { label: "Authentication", path: "/interface/auth", arrow: true },
  { label: "Avatars", path: "/interface/avatars", new: true },
  { label: "Badges", path: "/interface/badges" },
  { label: "Blank page", path: "/interface/blank" },
  { label: "Buttons", path: "/interface/buttons" },
  { label: "Cards", path: "/interface/cards", arrow: true },
  { label: "Carousel", path: "/interface/carousel" },
  { label: "Colors", path: "/interface/colors" },
  { label: "Data grid", path: "/interface/datagrid" },
  { label: "Dropdowns", path: "/interface/dropdowns" },
  { label: "Error pages", path: "/interface/error", arrow: true },
  { label: "Lists", path: "/interface/lists" },
  { label: "Modals", path: "/interface/modals" }
];

const interfaceRight: MenuItemType[] = [
  { label: "Prose", path: "/interface/prose" },
  { label: "Navigation", path: "/interface/navigation" },
  { label: "Offcanvas", path: "/interface/offcanvas" },
  { label: "Pagination", path: "/interface/pagination" },
  { label: "Placeholder", path: "/interface/placeholder" },
  { label: "Progress", path: "/interface/progress", new: true },
  { label: "Segmented control", path: "/interface/segmented", new: true },
  { label: "Scroll spy", path: "/interface/scrollspy", new: true },
  { label: "Social icons", path: "/interface/social" },
  { label: "Stars rating", path: "/interface/rating" },
  { label: "Steps", path: "/interface/steps" },
  { label: "Tables", path: "/interface/tables" },
  { label: "Tabs", path: "/interface/tabs" },
  { label: "Tags", path: "/interface/tags" },
  { label: "Toasts", path: "/interface/toasts" },
  { label: "Typography", path: "/interface/typography" }
];

const authSubMenu = [
  { label: "Sign in", path: "/auth/signin" },
  { label: "Sign in link", path: "/auth/signin-link" },
  { label: "Sign in with illustration", path: "/auth/signin-illustration" },
  { label: "Sign in with cover", path: "/auth/signin-cover" },
  { label: "Sign up", path: "/auth/signup" },
  { label: "Forgot password", path: "/auth/forgot-password" },
  { label: "Terms of service", path: "/auth/terms" },
  { label: "Lock screen", path: "/auth/lock-screen" },
  { label: "2 step verification", path: "/auth/2step" },
  { label: "2 step verification code", path: "/auth/2step-code" }
];

const cards = [
  { label: "Sample Cards", path: "/cards/sample" },
  { label: "Card actions", path: "/cards/actions" },
  { label: "Card gradient", path: "/cards/gradient" },
  { label: "Card Massorny", path: "/cards/masonry" }
];

const errorPagesSubMenu = [
  { label: "404 Page", path: "/errors/404" },
  { label: "500 Page", path: "/errors/500" },
  { label: "Maintenance Page", path: "/errors/maintenance" }
];

const formsSubMenu = [
  { label: "Form Elements", path: "/forms/elements" },
  { label: "Form Layout", path: "/forms/layout" }
];

const extraeLeft: MenuItemType[] = [
  { label: "Activity", path: "/extra/activity" },
  { label: "Chat", path: "/extra/chat" },
  { label: "Email Inbox", path: "/extra/inbox", new: true },
  { label: "Cookie Banner", path: "/extra/cookie-banner" },
  { label: "Empty page", path: "/extra/empty" },
  { label: "FAQ", path: "/extra/faq" },
  { label: "Gallery", path: "/extra/gallery" },
  { label: "Invoice", path: "/extra/invoice" },
  { label: "Pay", path: "/extra/pay" },
  { label: "Job List", path: "/extra/jobs" },
  { label: "License", path: "/extra/license" },
  { label: "Logs", path: "/extra/logs" },
  { label: "Marketing", path: "/extra/marketing" },
  { label: "Music", path: "/extra/music" },
];

const extraRight: MenuItemType[] = [
  { label: "Page Loader", path: "/extra/loader" },
  { label: "Photogrid", path: "/extra/photogrid" },
  { label: "Pricing Cards", path: "/extra/pricing-cards" },
  { label: "Pricing table", path: "/extra/pricing-table" },
  { label: "Search results", path: "/extra/search" },
  { label: "Setting", path: "/extra/setting" },
  { label: "Signature", path: "/extra/signature", new: true },
  { label: "Task", path: "/extra/task", arrow: true },
  { label: "Text Features", path: "/extra/text-features", new: true },
  { label: "Trial Ended", path: "/extra/trial-ended" },
  { label: "Uptime Monitor", path: "/extra/uptime" },
  { label: "Users", path: "/extra/users" },
  { label: "Widgets", path: "/extra/widgets" },
  { label: "Wizard", path: "/extra/wizard" },
];

const layoutLeft: MenuItemType[] = [
  { label: "Boxed", path: "/layout/boxed" },
  { label: "Combined", path: "/layout/combined" },
  { label: "Condensed", path: "/layout/condensed" },
  { label: "Fluid", path: "/layout/fluid" },
  { label: "Fluid vertical", path: "/layout/fluid-vertical" },
  { label: "Horizontal", path: "/layout/horizontal" },
  { label: "Navbar dark", path: "/layout/navbar-dark" }
];

const layoutRight: MenuItemType[] = [
  { label: "Navbar overlap", path: "/layout/navbar-overlap" },
  { label: "Navbar sticky", path: "/layout/navbar-sticky" },
  { label: "Right vertical", path: "/layout/right-vertical" },
  { label: "RTL mode", path: "/layout/rtl" },
  { label: "Vertical", path: "/layout/vertical" },
  { label: "Vertical Transparent", path: "/layout/vertical-transparent" },
];

const pluginItem = [
  { label: "Chart", path: "/plugins/chart" },
  { label: "Color picker", path: "/plugins/color-picker" },
  { label: "Datatable", path: "/plugins/datatable" },
  { label: "Dropzone", path: "/plugins/dropzone" },
  { label: "Sortable", path: "/plugins/sortable" },
  { label: "Fullcalendar", path: "/plugins/calendar" },
  { label: "Inline player", path: "/plugins/player" },
  { label: "Lightbox", path: "/plugins/lightbox" },
  { label: "Map", path: "/plugins/map" },
  { label: "Map fullsize", path: "/plugins/map-full" },
  { label: "Map Vector", path: "/plugins/map-vector" },
  { label: "Tour", path: "/plugins/tour" },
  { label: "Turbo Loader", path: "/plugins/turbo" },
  { label: "Wysiwyg Editor", path: "/plugins/editor" }
];

const addonsItem = [
  { label: "Icons", path: "/addons/icons" },
  { label: "Email", path: "/addons/email" },
  { label: "Flags", path: "/addons/flags" },
  { label: "Illustrations", path: "/addons/illustrations" },
  { label: "Payment Providers", path: "/addons/payments" }
];

const helpItem = [
  { label: "Documentation", path: "/docs" },
  { label: "Changelog", path: "/changelog" },
  { label: "Source code", path: "/source-code" }
];

const navItems: NavItemType[] = [
  { label: 'Home', icon: HomeOutlined, active: true, path: "/" },
  { label: 'Interface', icon: LayersOutlined, hasDropdown: true, mega: true, path: "/interface" },
  { label: 'Forms', icon: CheckBoxOutlined, hasDropdown: true, path: "/forms" },
  { label: 'Extra', icon: StarOutlineOutlined, hasDropdown: true, path: "/extra" },
  { label: 'Layout', icon: ViewQuiltOutlined, hasDropdown: true, path: "/layout" },
  { label: 'Plugins', icon: ExtensionOutlined, hasDropdown: true, path: "/plugins" },
  { label: 'Addons', icon: CardGiftcardOutlined, hasDropdown: true, path: "/addons" },
  { label: 'Help', icon: HelpOutlineOutlined, hasDropdown: true, path: "/help" }
];

const badgeStyle = "text-[11px] bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full font-small";


const Header: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white font-sans">
      <div className="max-w-[73%] mx-auto py-1 px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#206bc4] rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">t.</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">tabler</span>
        </Link>

        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-pink-500 hover:bg-gray-50">
            <FavoriteBorderIcon sx={{ fontSize: 18 }} /> Sponsor
          </button>

          <div className="flex items-center gap-3 text-gray-600">
            <NightlightOutlinedIcon className="cursor-pointer hover:text-blue-500" />
            <div className="relative cursor-pointer hover:text-blue-500">
              <NotificationsNoneOutlinedIcon />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
            <GridViewIcon className="cursor-pointer hover:text-blue-500" />
          </div>

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-blue-600"
            >
              EN <KeyboardArrowDownIcon fontSize="small" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white border shadow-lg rounded-md text-sm z-50">
                {['AZ', 'RU', 'EN'].map(lang => (
                  <div key={lang} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">{lang}</div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 border-l pl-4 cursor-pointer">
            <Avatar src="https://github.com/vhesener.png" sx={{ width: 32, height: 32 }} />
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-800">Paweł Kuna</p>
              <p className="text-xs text-gray-500">UI Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-200"></div>

      <div className="max-w-[73%] mx-auto px-4 py-1">
        <nav className="flex justify-between">
          <ul className="flex gap-6">
            {navItems.map(item => <NavItem key={item.label} {...item} />)}
          </ul>
          <Link href="/settings" className="flex items-center gap-1 text-gray-500 py-3 cursor-pointer hover:text-blue-600">
            <SettingsOutlined fontSize="small" />
            <span className="text-sm font-medium">Theme Settings</span>
            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full ml-1">New</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};


const NavItem: React.FC<NavItemType> = ({ icon: Icon, label, path, hasDropdown = false, active = false, mega = false }) => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleSubmenu = (name: string) => setSubmenuOpen(prev => prev === name ? null : name);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSubmenuOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex border-none items-center gap-1 py-4 px-1 text-gray-500 hover:text-blue-600 transition-colors"
      >
        <Icon className="!text-[21px]" />
        <span className="text-sm font-medium">{label}</span>
        {hasDropdown && <KeyboardArrowDownIcon fontSize="small" />}
      </button>

      {active && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500"></span>}

      {mega && open && (
        <div
          ref={menuRef}
          className="absolute top-full border-none left-0 mt-2 w-[450px] bg-white border border-gray-100 shadow-xl rounded-xl p-4 grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-700 z-50"
        >
          <div className="space-y-0.5">
            {interfaceLeft.map(item => {
              const isOpen = submenuOpen === item.label;
              return (
                <div key={item.label} className="relative">
                  <div
                    onClick={() => ["Authentication", "Cards", "Error pages"].includes(item.label) ? toggleSubmenu(item.label) : null}
                    className={`flex justify-between items-center px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer ${isOpen ? 'bg-gray-50 text-blue-600' : ''}`}
                  >
                    {!item.arrow ? <Link href={item.path} className="w-full">{item.label}</Link> : <span>{item.label}</span>}
                    <div className="flex items-center gap-2">
                      {item.new && <span className={badgeStyle}>NEW</span>}
                      {item.arrow && <span className="text-gray-400 text-xs">›</span>}
                    </div>
                  </div>

                  {item.label === "Authentication" && isOpen && (
                    <div className="absolute left-full top-0 ml-2 w-56 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-[60]">
                      {authSubMenu.map(sub => <Link href={sub.path} key={sub.label} className="block px-4 py-1.5 hover:bg-gray-50 hover:text-blue-600 cursor-pointer text-[13px]">{sub.label}</Link>)}
                    </div>
                  )}
                  {item.label === "Cards" && isOpen && (
                    <div className="absolute left-full top-0 ml-2 w-56 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-[60]">
                      {cards.map(sub => <Link href={sub.path} key={sub.label} className="block px-4 py-1.5 hover:bg-gray-50 hover:text-blue-600 cursor-pointer text-[13px]">{sub.label}</Link>)}
                    </div>
                  )}
                  {item.label === "Error pages" && isOpen && (
                    <div className="absolute left-full top-0 ml-2 w-56 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-[60]">
                      {errorPagesSubMenu.map(sub => <Link href={sub.path} key={sub.label} className="block px-4 py-1.5 hover:bg-gray-50 hover:text-blue-600 cursor-pointer text-[13px]">{sub.label}</Link>)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="space-y-0.5">
            {interfaceRight.map(item => (
              <Link href={item.path} key={item.label} className="flex justify-between items-center px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer">
                <span>{item.label}</span>
                {item.new && <span className={badgeStyle}>NEW</span>}
              </Link>
            ))}
          </div>
        </div>
      )}

      {label === "Forms" && hasDropdown && open && (
        <div ref={menuRef} className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-50">
          {formsSubMenu.map(sub => <Link href={sub.path} key={sub.label} className="block px-4 py-1.5 hover:bg-gray-50 hover:text-blue-600 cursor-pointer text-[13px]">{sub.label}</Link>)}
        </div>
      )}

      {label === "Extra" && open && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 mt-2 w-[450px] bg-white border border-gray-100 shadow-xl rounded-xl p-4 grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-700 z-50"
        >
          <div className="space-y-0.5">
            {extraeLeft.map(item => (
              <Link href={item.path} key={item.label} className="flex justify-between items-center px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer">
                <span>{item.label}</span>
                <div className="flex items-center gap-2">
                  {item.new && <span className={badgeStyle}>NEW</span>}
                  {item.arrow && <span className="text-gray-400 text-xs">›</span>}
                </div>
              </Link>
            ))}
          </div>
          <div className="space-y-0.5">
            {extraRight.map(item => (
              <Link href={item.path} key={item.label} className="flex justify-between items-center px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer">
                <span>{item.label}</span>
                {item.new && <span className={badgeStyle}>NEW</span>}
              </Link>
            ))}
          </div>
        </div>
      )}

      {label === "Layout" && open && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 mt-2 w-[450px] bg-white border border-gray-100 shadow-xl rounded-xl p-4 grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-700 z-50"
        >
          <div className="space-y-0.5">
            {layoutLeft.map(item => (
              <Link href={item.path} key={item.label} className="flex justify-between items-center px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer">
                <span>{item.label}</span>
                <div className="flex items-center gap-2">
                  {item.new && <span className={badgeStyle}>NEW</span>}
                  {item.arrow && <span className="text-gray-400 text-xs">›</span>}
                </div>
              </Link>
            ))}
          </div>
          <div className="space-y-0.5">
            {layoutRight.map(item => (
              <Link href={item.path} key={item.label} className="flex justify-between items-center px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer">
                <span>{item.label}</span>
                {item.new && <span className={badgeStyle}>NEW</span>}
              </Link>
            ))}
          </div>
        </div>
      )}

      {label === "Plugins" && hasDropdown && open && (
        <div ref={menuRef} className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-50">
          {pluginItem.map(sub => <Link href={sub.path} key={sub.label} className="block px-4 py-1.5 hover:bg-gray-50 hover:text-blue-600 cursor-pointer text-[13px]">{sub.label}</Link>)}
        </div>
      )}

      {label === "Addons" && hasDropdown && open && (
        <div ref={menuRef} className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-50">
          {addonsItem.map(sub => <Link href={sub.path} key={sub.label} className="block px-4 py-1.5 hover:bg-gray-50 hover:text-blue-600 cursor-pointer text-[13px]">{sub.label}</Link>)}
        </div>
      )}

      {label === "Help" && hasDropdown && open && (
        <div ref={menuRef} className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-50">
          {helpItem.map(sub => <Link href={sub.path} key={sub.label} className="block px-4 py-1.5 hover:bg-gray-50 hover:text-blue-600 cursor-pointer text-[13px]">{sub.label}</Link>)}
        </div>
      )}
    </li>
  );
};

export default Header;