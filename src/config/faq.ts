import type { LucideIcon } from "lucide-react";
import { CreditCard, HelpCircle, Wrench } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export type FaqCategory = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    title: "General",
    description: "About Tabler and this dashboard",
    icon: HelpCircle,
    color: "bg-blue-500",
    items: [
      {
        question: "What is Tabler?",
        answer:
          "Tabler is a free, open-source admin dashboard template. This project recreates its look and feel with Next.js and Tailwind CSS.",
      },
      {
        question: "Can I use it for free?",
        answer:
          "Yes. It is available under the MIT license for personal and commercial projects.",
      },
      {
        question: "How do I update the dashboard?",
        answer:
          "Pull the latest changes from your repository, run `pnpm install`, and restart the dev server.",
      },
      {
        question: "Does it work on mobile?",
        answer:
          "Yes. The sidebar opens as a mobile menu, and tables support horizontal scrolling when needed.",
      },
    ],
  },
  {
    id: "account",
    title: "Account",
    description: "Billing and profile",
    icon: CreditCard,
    color: "bg-emerald-500",
    items: [
      {
        question: "How do I change my email?",
        answer:
          "Go to Profile → Email, enter a new address, and confirm via the verification link.",
      },
      {
        question: "Can I cancel my subscription?",
        answer:
          "Yes, anytime from the billing portal. Access continues until the end of the paid period.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Annual plans may be reviewed for refunds within 14 days—contact support with your invoice number.",
      },
      {
        question: "How do I invite team members?",
        answer:
          "Owners and Admins can send invites from Settings → Team.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical",
    description: "Deploy and browsers",
    icon: Wrench,
    color: "bg-violet-500",
    items: [
      {
        question: "Which browsers are supported?",
        answer:
          "Latest Chrome, Firefox, Safari, and Edge. Internet Explorer is not supported.",
      },
      {
        question: "Is there dark mode?",
        answer:
          "Tabler supports dark themes. Use the moon icon in the header when the feature is enabled in your build.",
      },
      {
        question: "How do I deploy to production?",
        answer:
          "Use Vercel or any Node 20+ host: `pnpm install`, `pnpm build`, and set environment variables if needed.",
      },
      {
        question: "pnpm vs npm",
        answer:
          "This repo uses `pnpm-lock.yaml`. Vercel picks pnpm automatically; locally, run `pnpm install`.",
      },
    ],
  },
];
