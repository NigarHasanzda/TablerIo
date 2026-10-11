import type { Metadata } from "next";
import "./globals.css";
import { rootMetadata, viewport } from "@/lib/seo/metadata";
import { ClientProviders } from "./providers";

export const metadata: Metadata = rootMetadata;
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
