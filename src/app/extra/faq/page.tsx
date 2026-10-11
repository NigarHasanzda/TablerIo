"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Mail,
  MessageCircle,
  Search,
  Sparkles,
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { faqCategories } from "@/config/faq";

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openKey, setOpenKey] = useState<string | null>(
    `${faqCategories[0].id}-0`
  );

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqCategories;
    return faqCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  const currentCategory =
    filteredCategories.find((c) => c.id === activeCategory) ??
    filteredCategories[0];

  useEffect(() => {
    if (!filteredCategories.some((c) => c.id === activeCategory)) {
      const first = filteredCategories[0];
      if (first) {
        setActiveCategory(first.id);
        setOpenKey(`${first.id}-0`);
      }
    }
  }, [filteredCategories, activeCategory]);

  const popular = useMemo(
    () =>
      faqCategories.flatMap((c) =>
        c.items.slice(0, 1).map((item) => ({ ...item, categoryId: c.id }))
      ),
    []
  );

  return (
    <div className="min-h-full bg-[#f1f4f9]">
      <div className="w-full px-4 py-4 sm:px-5 sm:py-5 lg:px-6">
        <PageHeader
          title="FAQ"
          description="Tez-tez verilən suallar — axtarın və ya kateqoriya seçin."
        />

        {/* Hero axtarış */}
        <div className="relative mb-5 overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-[#206bc4] to-[#1a5a9e] p-5 text-white shadow-sm sm:p-6">
          <div className="relative z-10 max-w-xl">
            <div className="mb-2 flex items-center gap-2 text-blue-100">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wide">
                Kömək mərkəzi
              </span>
            </div>
            <h2 className="text-lg font-semibold sm:text-xl">
              Sualınız var? Cavabı burada tapın.
            </h2>
            <p className="mt-1 text-sm text-blue-100/90">
              12+ hazır cavab — hesab, texniki və ümumi mövzular.
            </p>
            <div className="relative mt-4">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Məs: deploy, abunəlik, dark mode…"
                className="w-full rounded-lg border-0 py-2.5 pl-10 pr-3 text-sm text-gray-800 shadow-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
          </div>
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-12 right-12 h-32 w-32 rounded-full bg-white/5"
            aria-hidden
          />
        </div>

        {/* Populyar */}
        {!query && (
          <div className="mb-5 flex flex-wrap gap-2">
            <span className="w-full text-[11px] font-semibold uppercase tracking-wide text-gray-500 sm:w-auto sm:py-1.5">
              Populyar:
            </span>
            {popular.map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setActiveCategory(item.categoryId);
                  setOpenKey(`${item.categoryId}-0`);
                }}
                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[12px] text-gray-700 shadow-sm hover:border-[#206bc4]/40 hover:text-[#206bc4]"
              >
                {item.question}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-5">
          {/* Kateqoriya nav — sticky */}
          <aside className="lg:sticky lg:top-0 lg:self-start">
            <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
              <p className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Kateqoriyalar
              </p>
              <ul className="space-y-0.5">
                {filteredCategories.map((cat) => {
                  const Icon = cat.icon;
                  const active = currentCategory?.id === cat.id;
                  return (
                    <li key={cat.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setOpenKey(`${cat.id}-0`);
                        }}
                        className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-[13px] transition-colors ${
                          active
                            ? "bg-[#ecf4fc] font-medium text-[#206bc4]"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-white ${cat.color}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="min-w-0 flex-1 truncate">{cat.title}</span>
                        <span className="text-[11px] text-gray-400">
                          {cat.items.length}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Suallar */}
          <div className="min-w-0 space-y-4">
            {filteredCategories.length === 0 && (
              <div className="rounded-xl border border-gray-200 bg-white px-4 py-12 text-center text-sm text-gray-500 shadow-sm">
                Heç bir sual tapılmadı. Başqa açar söz yoxlayın.
              </div>
            )}

            {currentCategory && (
              <>
                <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                  <h2 className="text-base font-semibold text-[#1d273b]">
                    {currentCategory.title}
                  </h2>
                  <p className="text-[13px] text-gray-500">
                    {currentCategory.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {currentCategory.items.map((item, index) => {
                    const key = `${currentCategory.id}-${index}`;
                    const isOpen = openKey === key;
                    return (
                      <li
                        key={key}
                        className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-colors ${
                          isOpen
                            ? "border-[#206bc4]/30 ring-1 ring-[#206bc4]/10"
                            : "border-gray-200"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          className="flex w-full items-start gap-3 px-4 py-3.5 text-left"
                          aria-expanded={isOpen}
                        >
                          <span
                            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                              isOpen
                                ? "bg-[#206bc4] text-white"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {index + 1}
                          </span>
                          <span className="flex-1 text-sm font-medium text-[#1d273b]">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`mt-0.5 h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                              isOpen ? "rotate-180 text-[#206bc4]" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="border-t border-gray-100 px-4 pb-4 pl-[3.25rem] pt-2 text-[13px] leading-relaxed text-gray-600">
                            {item.answer}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {/* CTA */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ecf4fc] text-[#206bc4]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1d273b]">E-poçt</p>
                  <p className="mt-0.5 text-[12px] text-gray-500">
                    24 saat ərzində cavab
                  </p>
                  <a
                    href="mailto:support@tabler.io"
                    className="mt-2 inline-block text-[13px] font-medium text-[#206bc4] hover:underline"
                  >
                    support@tabler.io
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1d273b]">Chat</p>
                  <p className="mt-0.5 text-[12px] text-gray-500">
                    İş saatları 09:00–18:00
                  </p>
                  <Link
                    href="/"
                    className="mt-2 inline-block text-[13px] font-medium text-[#206bc4] hover:underline"
                  >
                    Dashboard-a qayıt
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
