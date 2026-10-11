import React from "react";
import Link from "next/link";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

export default function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0">
        <nav className="mb-1 text-[12px] text-gray-500">
          <Link href="/" className="hover:text-[#206bc4]">
            Home
          </Link>
          <span className="mx-1.5 text-gray-300">/</span>
          <span className="text-gray-600">{title}</span>
        </nav>
        <h1 className="text-xl font-semibold tracking-tight text-[#1d273b] sm:text-2xl">
          {title}
        </h1>
        {description && (
          <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-gray-500 sm:text-sm">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>}
    </div>
  );
}
