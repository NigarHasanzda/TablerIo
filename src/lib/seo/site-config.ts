/** Central SEO / brand config — single source of truth */
export const siteConfig = {
  name: "Tabler",
  shortName: "Tabler",
  titleDefault: "Tabler — Admin Dashboard & UI Kit",
  description:
    "Modern admin dashboard built with Next.js. Analytics, datatables, authentication pages, and Tabler-inspired UI components.",
  keywords: [
    "Tabler",
    "admin dashboard",
    "Next.js",
    "React",
    "analytics",
    "datatable",
    "UI kit",
  ],
  locale: "en_US",
  themeColor: "#206bc4",
  creator: "Tabler",
  /** Set in Vercel: NEXT_PUBLIC_SITE_URL=https://your-domain.com */
  get url() {
    const env = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
    if (env) return env;
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    return "http://localhost:3000";
  },
} as const;
