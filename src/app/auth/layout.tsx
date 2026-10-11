import type { Metadata } from "next";
import { privatePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = privatePageMetadata({
  title: "Authentication",
  description: "Sign in, sign up, and account verification for Tabler.",
  path: "/auth/signin",
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
