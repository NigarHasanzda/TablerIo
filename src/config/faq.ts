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
    title: "Ümumi",
    description: "Tabler və dashboard haqqında",
    icon: HelpCircle,
    color: "bg-blue-500",
    items: [
      {
        question: "Tabler nədir?",
        answer:
          "Tabler pulsuz və açıq mənbəli admin panel şablonudur. Bu layihə onun vizual dilini Next.js və Tailwind ilə təkrarlayır.",
      },
      {
        question: "Pulsuz istifadə oluna bilər?",
        answer:
          "Bəli, MIT lisenziyası altında fərdi və kommersiya layihələrində istifadə edə bilərsiniz.",
      },
      {
        question: "Dashboard necə yenilənir?",
        answer:
          "Repozitoriyadan son dəyişiklikləri çəkin, `pnpm install` işlədin və dev serveri yenidən başladın.",
      },
      {
        question: "Mobil cihazlarda işləyir?",
        answer:
          "Bəli. Sidebar mobil menyu kimi açılır, cədvəllər horizontal scroll dəstəkləyir.",
      },
    ],
  },
  {
    id: "account",
    title: "Hesab",
    description: "Abunəlik və profil",
    icon: CreditCard,
    color: "bg-emerald-500",
    items: [
      {
        question: "E-poçtu necə dəyişim?",
        answer:
          "Profil → E-poçt bölməsindən yeni ünvan daxil edin və təsdiq linkinə klik edin.",
      },
      {
        question: "Abunəliyi ləğv edə bilərəm?",
        answer:
          "Billing portalından istənilən vaxt ləğv edə bilərsiniz. Ödənişli dövrün sonuna qədər giriş qalır.",
      },
      {
        question: "Geri ödəmə var?",
        answer:
          "İllik planlar üçün 14 gün ərzində dəstək komandasına müraciətlə nəzərdən keçirilir.",
      },
      {
        question: "Komanda üzvləri əlavə etmək",
        answer:
          "Owner və Admin rolları Settings → Team bölməsindən dəvət göndərə bilər.",
      },
    ],
  },
  {
    id: "technical",
    title: "Texniki",
    description: "Deploy və brauzerlər",
    icon: Wrench,
    color: "bg-violet-500",
    items: [
      {
        question: "Hansı brauzerlər dəstəklənir?",
        answer:
          "Chrome, Firefox, Safari və Edge-in son versiyaları. IE dəstəklənmir.",
      },
      {
        question: "Dark mode var?",
        answer:
          "Tabler dark tema dəstəkləyir. Header-dakı ay ikonu ilə (aktiv olduqda) dəyişdirilir.",
      },
      {
        question: "Production deploy",
        answer:
          "Vercel və ya Node 20+ host: `pnpm install`, `pnpm build`, lazım gələrsə env dəyişənləri.",
      },
      {
        question: "pnpm və npm",
        answer:
          "Layihə `pnpm-lock.yaml` istifadə edir. Vercel-də avtomatik pnpm seçilir; lokal üçün `pnpm install` tövsiyə olunur.",
      },
    ],
  },
];
