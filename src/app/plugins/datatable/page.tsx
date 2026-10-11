"use client";

import React, { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronDown,
  Download,
  Filter,
  Search,
  UserPlus,
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Pagination from "@/components/Pagination/Paginations";

type Status = "Active" | "Inactive" | "Pending";
type Role = "Owner" | "Admin" | "Moderator" | "User";

type Row = {
  id: string;
  name: string;
  title: string;
  email: string;
  role: Role;
  country: string;
  flag: string;
  status: Status;
  lastLogin: string;
  department: string;
};

const rows: Row[] = [
  { id: "1", name: "Paweł Kuna", title: "UI Designer", email: "pawel@tabler.io", role: "Owner", country: "Poland", flag: "🇵🇱", status: "Active", lastLogin: "2 min ago", department: "Design" },
  { id: "2", name: "Jeffie Worsfold", title: "Chemical Engineer", email: "jworsfold0@bbc.co.uk", role: "User", country: "Brazil", flag: "🇧🇷", status: "Active", lastLogin: "1 hour ago", department: "R&D" },
  { id: "3", name: "Morgan Mathes", title: "Actuary", email: "mmathes1@weibo.com", role: "User", country: "Germany", flag: "🇩🇪", status: "Pending", lastLogin: "Never", department: "Finance" },
  { id: "4", name: "Sara Reddy", title: "Graphic Designer", email: "s.reddy@51.la", role: "Moderator", country: "USA", flag: "🇺🇸", status: "Active", lastLogin: "Yesterday", department: "Design" },
  { id: "5", name: "Yelena Bobrova", title: "Software Engineer", email: "ybobrova3@hostgator.com", role: "User", country: "Russia", flag: "🇷🇺", status: "Inactive", lastLogin: "3 days ago", department: "Engineering" },
  { id: "6", name: "Haskel Sherwell", title: "Media Planner", email: "hsherwell4@reverbnation.com", role: "User", country: "France", flag: "🇫🇷", status: "Active", lastLogin: "5 hours ago", department: "Marketing" },
  { id: "7", name: "Lisette Lapre", title: "Research Associate", email: "llapre5@imgur.com", role: "User", country: "Spain", flag: "🇪🇸", status: "Pending", lastLogin: "1 week ago", department: "Research" },
  { id: "8", name: "Carlson Limited", title: "Account Executive", email: "carlson@example.com", role: "Admin", country: "UK", flag: "🇬🇧", status: "Active", lastLogin: "Today", department: "Sales" },
  { id: "9", name: "Bluewolf Dev", title: "Developer", email: "dev@bluewolf.io", role: "Moderator", country: "Canada", flag: "🇨🇦", status: "Active", lastLogin: "30 min ago", department: "Engineering" },
  { id: "10", name: "Salesforce PM", title: "Product Manager", email: "pm@salesforce.com", role: "User", country: "USA", flag: "🇺🇸", status: "Inactive", lastLogin: "2 weeks ago", department: "Product" },
  { id: "11", name: "Printic Studio", title: "Marketing Lead", email: "marketing@printic.com", role: "User", country: "Italy", flag: "🇮🇹", status: "Active", lastLogin: "4 hours ago", department: "Marketing" },
  { id: "12", name: "Tabdaq Sales", title: "Sales Director", email: "sales@tabdaq.com", role: "User", country: "Netherlands", flag: "🇳🇱", status: "Pending", lastLogin: "Never", department: "Sales" },
  { id: "13", name: "Ana Costa", title: "HR Manager", email: "ana.costa@corp.pt", role: "Admin", country: "Portugal", flag: "🇵🇹", status: "Active", lastLogin: "Today", department: "HR" },
  { id: "14", name: "Kenji Tanaka", title: "DevOps", email: "k.tanaka@infra.jp", role: "User", country: "Japan", flag: "🇯🇵", status: "Active", lastLogin: "12 min ago", department: "Engineering" },
  { id: "15", name: "Olivia Martin", title: "Support Lead", email: "olivia@help.io", role: "Moderator", country: "Australia", flag: "🇦🇺", status: "Active", lastLogin: "1 hour ago", department: "Support" },
  { id: "16", name: "Diego Fernandez", title: "Analyst", email: "diego@data.es", role: "User", country: "Spain", flag: "🇪🇸", status: "Inactive", lastLogin: "5 days ago", department: "Analytics" },
  { id: "17", name: "Nina Petrova", title: "QA Engineer", email: "nina.qa@mail.ru", role: "User", country: "Russia", flag: "🇷🇺", status: "Active", lastLogin: "Yesterday", department: "Engineering" },
  { id: "18", name: "James O'Brien", title: "Legal Counsel", email: "j.obrien@legal.ie", role: "User", country: "Ireland", flag: "🇮🇪", status: "Pending", lastLogin: "Never", department: "Legal" },
  { id: "19", name: "Emma Wilson", title: "Content Writer", email: "emma@content.co.uk", role: "User", country: "UK", flag: "🇬🇧", status: "Active", lastLogin: "3 hours ago", department: "Marketing" },
  { id: "20", name: "Ahmed Hassan", title: "Security Engineer", email: "ahmed@sec.ae", role: "Admin", country: "UAE", flag: "🇦🇪", status: "Active", lastLogin: "20 min ago", department: "Security" },
];

type SortKey = "name" | "title" | "lastLogin";
type SortDir = "asc" | "desc";

const PAGE_SIZES = [8, 12, 20] as const;

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function statusBadge(status: Status) {
  const map: Record<Status, string> = {
    Active: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
    Inactive: "bg-gray-100 text-gray-600",
  };
  return map[status];
}

function roleBadge(role: Role) {
  const map: Record<Role, string> = {
    Owner: "bg-[#206bc4]/10 text-[#206bc4]",
    Admin: "bg-violet-100 text-violet-700",
    Moderator: "bg-amber-100 text-amber-800",
    User: "bg-gray-100 text-gray-700",
  };
  return map[role];
}

export default function DatatablePage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<Status | "All">("All");
  const [roleFilter, setRoleFilter] = useState<Role | "All">("All");
  const [selected, setSelected] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<(typeof PAGE_SIZES)[number]>(8);
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const stats = useMemo(
    () => ({
      total: rows.length,
      active: rows.filter((r) => r.status === "Active").length,
      pending: rows.filter((r) => r.status === "Pending").length,
      inactive: rows.filter((r) => r.status === "Inactive").length,
    }),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = rows.filter((r) => {
      if (statusFilter !== "All" && r.status !== statusFilter) return false;
      if (roleFilter !== "All" && r.role !== roleFilter) return false;
      if (!q) return true;
      return (
        r.name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.title.toLowerCase().includes(q) ||
        r.department.toLowerCase().includes(q)
      );
    });

    list = [...list].sort((a, b) => {
      const av = a[sortKey].toLowerCase();
      const bv = b[sortKey].toLowerCase();
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return list;
  }, [query, statusFilter, roleFilter, sortKey, sortDir]);

  const lastPage = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(currentPage, lastPage);

  const pageRows = filtered.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize
  );

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column)
      return <ArrowUpDown className="ml-1 inline h-3 w-3 opacity-40" />;
    return sortDir === "asc" ? (
      <ArrowUp className="ml-1 inline h-3 w-3 text-[#206bc4]" />
    ) : (
      <ArrowDown className="ml-1 inline h-3 w-3 text-[#206bc4]" />
    );
  };

  const toggleRow = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleAllOnPage = () => {
    const ids = pageRows.map((r) => r.id);
    const allSelected = ids.every((id) => selected.includes(id));
    if (allSelected) {
      setSelected((prev) => prev.filter((id) => !ids.includes(id)));
    } else {
      setSelected((prev) => [...new Set([...prev, ...ids])]);
    }
  };

  const allPageSelected =
    pageRows.length > 0 && pageRows.every((r) => selected.includes(r.id));

  const topCountries = useMemo(() => {
    const counts: Record<string, number> = {};
    rows.forEach((r) => {
      counts[r.country] = (counts[r.country] ?? 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, []);

  const roleCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    rows.forEach((r) => {
      counts[r.role] = (counts[r.role] ?? 0) + 1;
    });
    return Object.entries(counts);
  }, []);

  return (
    <div className="min-h-full bg-[#f1f4f9]">
      <div className="w-full space-y-4 px-4 py-4 sm:px-5 sm:py-5 lg:px-6">
        <PageHeader
          title="Datatable"
          description="User table with search, filters, sorting, and pagination."
          actions={
            <>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[13px] font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                <Download className="h-4 w-4" />
                Export CSV
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#206bc4] px-3 py-1.5 text-[13px] font-medium text-white shadow-sm hover:bg-[#1a5cad]"
              >
                <UserPlus className="h-4 w-4" />
                Add user
              </button>
            </>
          }
        />

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { label: "Total", value: stats.total, sub: "registered" },
            { label: "Active", value: stats.active, sub: "online", accent: "text-green-600" },
            { label: "Pending", value: stats.pending, sub: "approval", accent: "text-orange-600" },
            { label: "Selected", value: selected.length, sub: "rows", accent: "text-[#206bc4]" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                {s.label}
              </p>
              <p className={`mt-1 text-2xl font-bold text-[#1d273b] ${s.accent ?? ""}`}>
                {s.value}
              </p>
              <p className="text-[11px] text-gray-500">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 border-b border-gray-100 p-3 sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-base font-semibold text-[#1d273b]">
                Users
              </h2>
              <div className="relative w-full sm:max-w-xs">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Name, email, department…"
                  className="w-full rounded-lg border border-gray-200 py-2 pl-9 pr-3 text-sm focus:border-[#206bc4] focus:outline-none focus:ring-2 focus:ring-[#206bc4]/15"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-[12px] text-gray-500">Status:</span>
              {(["All", "Active", "Pending", "Inactive"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setStatusFilter(s);
                    setCurrentPage(1);
                  }}
                  className={`rounded-full px-2.5 py-0.5 text-[12px] font-medium transition-colors ${
                    statusFilter === s
                      ? "bg-[#206bc4] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {s === "All" ? "All" : s}
                </button>
              ))}
              <span className="mx-1 hidden h-4 w-px bg-gray-200 sm:inline" />
              <select
                value={roleFilter}
                onChange={(e) => {
                  setRoleFilter(e.target.value as Role | "All");
                  setCurrentPage(1);
                }}
                className="rounded-lg border border-gray-200 bg-white px-2 py-1 text-[12px] text-gray-700"
              >
                <option value="All">All roles</option>
                <option value="Owner">Owner</option>
                <option value="Admin">Admin</option>
                <option value="Moderator">Moderator</option>
                <option value="User">User</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="border-y border-gray-100 bg-gray-50/80 text-[11px] font-medium uppercase tracking-wider text-gray-400">
                <tr>
                  <th className="w-10 px-3 py-2.5">
                    <input
                      type="checkbox"
                      checked={allPageSelected}
                      onChange={toggleAllOnPage}
                      className="h-4 w-4 rounded accent-[#206bc4]"
                      aria-label="Select all"
                    />
                  </th>
                  <th className="px-3 py-2.5">
                    <button
                      type="button"
                      onClick={() => toggleSort("name")}
                      className="inline-flex items-center hover:text-gray-600"
                    >
                      Name
                      <SortIcon column="name" />
                    </button>
                  </th>
                  <th className="px-3 py-2.5">
                    <button
                      type="button"
                      onClick={() => toggleSort("title")}
                      className="inline-flex items-center hover:text-gray-600"
                    >
                      Title
                      <SortIcon column="title" />
                    </button>
                  </th>
                  <th className="px-3 py-2.5">Email</th>
                  <th className="px-3 py-2.5">Department</th>
                  <th className="px-3 py-2.5">Role</th>
                  <th className="px-3 py-2.5">Country</th>
                  <th className="px-3 py-2.5">Status</th>
                  <th className="px-3 py-2.5">
                    <button
                      type="button"
                      onClick={() => toggleSort("lastLogin")}
                      className="inline-flex items-center hover:text-gray-600"
                    >
                      Last login
                      <SortIcon column="lastLogin" />
                    </button>
                  </th>
                  <th className="px-3 py-2.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pageRows.map((row) => {
                  const isSelected = selected.includes(row.id);
                  return (
                    <tr
                      key={row.id}
                      onClick={() => toggleRow(row.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected ? "bg-[#ecf4fc]" : "hover:bg-gray-50/80"
                      }`}
                    >
                      <td className="px-3 py-2.5">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleRow(row.id)}
                          onClick={(e) => e.stopPropagation()}
                          className="h-4 w-4 rounded accent-[#206bc4]"
                        />
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#206bc4]/10 text-[11px] font-bold text-[#206bc4]">
                            {initials(row.name)}
                          </span>
                          <span className="font-medium text-gray-800">
                            {row.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-gray-600">{row.title}</td>
                      <td className="px-3 py-2.5 text-gray-500">{row.email}</td>
                      <td className="px-3 py-2.5 text-gray-600">
                        {row.department}
                      </td>
                      <td className="px-3 py-2.5">
                        <span
                          className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${roleBadge(row.role)}`}
                        >
                          {row.role}
                        </span>
                      </td>
                      <td className="px-3 py-2.5">
                        <span className="inline-flex items-center gap-1 text-gray-700">
                          <span>{row.flag}</span>
                          {row.country}
                        </span>
                      </td>
                      <td className="px-3 py-2.5">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${statusBadge(row.status)}`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-[12px] text-gray-500">
                        {row.lastLogin}
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <button
                          type="button"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-0.5 rounded-md border border-gray-200 px-2 py-1 text-[11px] text-gray-600 hover:bg-gray-50"
                        >
                          Actions
                          <ChevronDown className="h-3 w-3" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <p className="px-4 py-10 text-center text-sm text-gray-500">
              No results found.
            </p>
          )}

          <div className="flex flex-col gap-3 border-t border-gray-100 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-gray-500">
              <p>
                {filtered.length === 0
                  ? "0 entries"
                  : `${(safePage - 1) * pageSize + 1}–${Math.min(
                      safePage * pageSize,
                      filtered.length
                    )} / ${filtered.length}`}
              </p>
              <label className="flex items-center gap-1.5">
                <span className="text-[12px]">Page size:</span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value) as (typeof PAGE_SIZES)[number]);
                    setCurrentPage(1);
                  }}
                  className="rounded border border-gray-200 px-1.5 py-0.5 text-[12px]"
                >
                  {PAGE_SIZES.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            {filtered.length > 0 && (
              <Pagination
                currentPage={safePage}
                lastPage={lastPage}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-[#1d273b]">
              By country
            </h3>
            <ul className="mt-3 space-y-2">
              {topCountries.map(([country, count]) => (
                <li
                  key={country}
                  className="flex items-center justify-between text-[13px]"
                >
                  <span className="text-gray-700">{country}</span>
                  <span className="font-medium text-gray-900">{count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-[#1d273b]">
              Role distribution
            </h3>
            <ul className="mt-3 space-y-2">
              {roleCounts.map(([role, count]) => {
                const pct = Math.round((count / rows.length) * 100);
                return (
                  <li key={role}>
                    <div className="mb-1 flex justify-between text-[12px]">
                      <span className="text-gray-600">{role}</span>
                      <span className="font-medium text-gray-800">
                        {count} ({pct}%)
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-[#206bc4]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
