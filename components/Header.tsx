"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { dict } from "@/lib/i18n";
import { LogoMark } from "./icons";

const navItems = [
  { href: "/#menu", label: dict.nav.menu },
  { href: "/#story", label: dict.nav.story },
  { href: "/#catering", label: dict.nav.catering },
  { href: "/#locations", label: dict.nav.locations },
];

export function Header() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] py-[18px]">
      <div
        className={`flip mx-auto flex max-w-[1220px] items-center justify-between gap-4 rounded-full border border-cream/14 py-2.5 ps-[22px] pe-[14px] backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-300 ${
          scrolled ? "bg-navy-deep/85" : "bg-navy/68"
        }`}
      >
        <Link href="/#top" className="flip flex items-center gap-2.5">
          <LogoMark className="h-[30px] w-[30px]" />
          <span className="font-display text-[19px] font-bold text-cream">
            moby<b className="text-saffron-bright">dick</b>
          </span>
        </Link>

        <nav className="flip hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13.5px] font-medium text-cream/78 transition-colors hover:text-teal-bright"
            >
              {item.label[lang]}
            </Link>
          ))}
        </nav>

        <div className="flip hidden items-center gap-2.5 md:flex">
          <LangSwitch lang={lang} setLang={setLang} />
          <Link
            href="/#order"
            className="whitespace-nowrap rounded-full border border-cream/30 px-5 py-2.5 text-[13.5px] font-semibold text-cream transition hover:border-teal-bright hover:text-teal-bright"
          >
            {dict.nav.cateringQuote[lang]}
          </Link>
          <Link
            href="/#order"
            className="whitespace-nowrap rounded-full bg-saffron px-5 py-2.5 text-[13.5px] font-semibold text-navy-deep transition hover:-translate-y-0.5 hover:bg-saffron-bright hover:shadow-[0_10px_24px_rgba(240,168,48,0.35)]"
          >
            {dict.nav.orderPickup[lang]}
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="text-2xl text-cream md:hidden"
        >
          ☰
        </button>
      </div>

      {mobileOpen && (
        <div className="mx-3.5 mt-2 flex flex-col gap-4 rounded-2xl border border-cream/14 bg-navy p-5 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-[13.5px] font-medium text-cream/78"
            >
              {item.label[lang]}
            </Link>
          ))}
          <LangSwitch lang={lang} setLang={setLang} />
          <Link
            href="/#order"
            onClick={() => setMobileOpen(false)}
            className="rounded-full border border-cream/30 px-5 py-2.5 text-center text-[13.5px] font-semibold text-cream"
          >
            {dict.nav.cateringQuote[lang]}
          </Link>
          <Link
            href="/#order"
            onClick={() => setMobileOpen(false)}
            className="rounded-full bg-saffron px-5 py-2.5 text-center text-[13.5px] font-semibold text-navy-deep"
          >
            {dict.nav.orderPickup[lang]}
          </Link>
        </div>
      )}
    </header>
  );
}

function LangSwitch({
  lang,
  setLang,
}: {
  lang: "en" | "fa";
  setLang: (l: "en" | "fa") => void;
}) {
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-cream/18 bg-cream/8 p-[3px]">
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
          lang === "en" ? "bg-saffron text-navy-deep" : "text-cream/60"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("fa")}
        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
          lang === "fa" ? "bg-saffron text-navy-deep" : "text-cream/60"
        }`}
      >
        فارسی
      </button>
    </div>
  );
}
