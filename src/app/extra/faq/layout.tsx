import type { Metadata } from "next";
import { faqCategories } from "@/config/faq";
import { createPageMetadata } from "@/lib/seo/metadata";
import { JsonLd, faqPageJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Tabler, billing, deployment, and using this admin dashboard.",
  path: "/extra/faq",
  keywords: ["FAQ", "help", "support", "Tabler"],
});

const allFaqItems = faqCategories.flatMap((c) => c.items);

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqPageJsonLd(allFaqItems)} />
      {children}
    </>
  );
}
