import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Datatable",
  description:
    "Searchable, sortable user datatable with filters, pagination, and Tabler-style UI.",
  path: "/plugins/datatable",
  keywords: ["datatable", "table", "users", "pagination"],
});

export default function DatatableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
