"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { dict } from "@/lib/i18n";
import { AppleIcon, GooglePlayIcon } from "./icons";

export function CateringApp() {
  const { lang } = useLang();

  return (
    <section id="catering">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col bg-gradient-to-br from-saffron to-[#d98a1f] text-navy-deep">
          <div className="relative h-[220px]">
            <Image
              src="https://www.mobyskabob.com/wp-content/uploads/2019/03/MobyDick-Catering.png"
              alt="Moby Dick catering spread"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-1 flex-col justify-center px-8 py-12 md:px-14">
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-navy-deep/20 bg-navy-deep/10 px-3.5 py-2 font-mono text-[11.5px] tracking-[0.16em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-navy-deep" />
              {dict.catering.kicker[lang]}
            </span>
            <h2 className="mt-4 max-w-[360px] font-display text-[clamp(26px,2.6vw,36px)] font-bold">
              {dict.catering.title[lang]}
            </h2>
            <p className="rtl-text-right mt-4 mb-7 max-w-[380px] text-[15px] opacity-82">{dict.catering.desc[lang]}</p>
            <a
              href="mailto:catering@mobyskabob.com"
              className="w-fit rounded-full bg-navy px-5 py-2.75 text-[13.5px] font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-navy-deep"
            >
              {dict.catering.cta[lang]}
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-deep px-8 py-12.5 text-cream md:px-14">
          <div className="pointer-events-none absolute -top-17.5 -left-17.5 h-60 w-60 rounded-full border border-cream/15" />
          <span className="relative inline-flex w-fit items-center gap-2.5 rounded-full border border-teal-bright/30 bg-teal/14 px-3.5 py-2 font-mono text-[11.5px] tracking-[0.16em] text-teal-bright uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
            {dict.app.kicker[lang]}
          </span>
          <h2 className="relative mt-4 font-display text-[clamp(26px,2.6vw,36px)] font-bold">{dict.app.title[lang]}</h2>
          <p className="rtl-text-right relative mt-4 mb-7 max-w-[380px] text-[15px] opacity-82">{dict.app.desc[lang]}</p>
          <div className="relative flex gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-cream/25 px-4 py-2.5 text-[12.5px]">
              <AppleIcon /> {dict.app.appstore[lang]}
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-cream/25 px-4 py-2.5 text-[12.5px]">
              <GooglePlayIcon /> {dict.app.googleplay[lang]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
