import type { Metadata } from "next";
import { privatePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = privatePageMetadata({
  title: "Error",
  description: "Error and maintenance pages.",
  path: "/errors/500",
});

export default function ErrorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
