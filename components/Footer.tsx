"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { dict } from "@/lib/i18n";
import { LogoMark, InstagramIcon, FacebookIcon, TikTokIcon } from "./icons";

export function Footer() {
  const { lang } = useLang();

  return (
    <footer id="order" className="bg-navy-deep pt-20 pb-7.5 text-cream">
      <div className="mx-auto max-w-[1220px] px-8">
        <div className="grid gap-10 border-b border-cream/16 pb-15 md:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flip mb-4 flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="font-display text-[19px] font-bold">
                moby<b className="text-saffron-bright">dick</b>
              </span>
            </div>
            <p className="rtl-text-right max-w-[260px] text-[13.5px] leading-[1.6] opacity-60">{dict.footer.desc[lang]}</p>
          </div>

          <FootCol title={dict.footer.explore[lang]}>
            <FootLink href="/#menu">{dict.nav.menu[lang]}</FootLink>
            <FootLink href="/#catering">{dict.nav.catering[lang]}</FootLink>
            <FootLink href="/#locations">{dict.nav.locations[lang]}</FootLink>
            <FootLink href="#">{dict.footer.specialOffers[lang]}</FootLink>
            <FootLink href="#">{dict.nav.giftcards[lang]}</FootLink>
          </FootCol>

          <FootCol title={dict.footer.company[lang]}>
            <FootLink href="/#story">{dict.nav.story[lang]}</FootLink>
            <FootLink href="#">{dict.footer.visionValues[lang]}</FootLink>
            <FootLink href="#">{dict.footer.news[lang]}</FootLink>
            <FootLink href="#">{dict.footer.blog[lang]}</FootLink>
            <FootLink href="#">{dict.footer.privacy[lang]}</FootLink>
          </FootCol>

          <FootCol title={dict.footer.order[lang]}>
            <FootLink href="#">{dict.footer.pickupOnline[lang]}</FootLink>
            <FootLink href="#">{dict.footer.getApp[lang]}</FootLink>
            <FootLink href="#">{dict.footer.uberEats[lang]}</FootLink>
            <FootLink href="#">{dict.footer.cateringMenu[lang]}</FootLink>
          </FootCol>

          <FootCol title={dict.footer.hq[lang]}>
            <li className="mb-2.75 text-sm opacity-72">{dict.footer.addr1[lang]}</li>
            <li className="mb-2.75 text-sm opacity-72">{dict.footer.addr2[lang]}</li>
            <li className="mb-2.75 text-sm opacity-72" dir="ltr">
              (202) 544-1500
            </li>
            <li className="mb-2.75 text-sm opacity-72" dir="ltr">
              moby@mobyskabob.com
            </li>
          </FootCol>
        </div>

        <div className="flip mt-6.5 flex flex-wrap items-center justify-between gap-3.5 pt-6 text-[12.5px] opacity-50">
          <span>{dict.footer.copyright[lang]}</span>
          <div className="flip flex gap-4">
            <a href="#" aria-label="Instagram" className="transition hover:text-saffron-bright hover:opacity-100">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Facebook" className="transition hover:text-saffron-bright hover:opacity-100">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="TikTok" className="transition hover:text-saffron-bright hover:opacity-100">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4.5 font-mono text-[11px] font-medium tracking-[0.12em] text-teal-bright uppercase">
        {title}
      </h4>
      <ul className="list-none">{children}</ul>
    </div>
  );
}

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="mb-2.75 text-sm opacity-72">
      <Link href={href} className="transition hover:text-saffron-bright hover:opacity-100">
        {children}
      </Link>
    </li>
  );
}
