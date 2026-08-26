"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { dict } from "@/lib/i18n";
import { JoojehIcon, KubidehIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Hero() {
  const { lang } = useLang();

  return (
    <section id="top" className="hero-bg relative overflow-hidden pt-[190px] pb-[110px] text-cream">
      <svg
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="p1" width="70" height="70" patternUnits="userSpaceOnUse">
            <path
              d="M35 10c-12 0-20 10-20 22 0 10 7 16 15 16 6 0 10-4 10-9 0-4-3-7-6-7-2 0-4 2-4 4"
              fill="none"
              stroke="#faf6ee"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#p1)" />
      </svg>

      <div className="relative mx-auto grid max-w-[1220px] items-center gap-14 px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6.5 inline-flex items-center gap-2.5 rounded-full border border-teal-bright/30 bg-teal/14 px-3.5 py-2 font-mono text-[11.5px] tracking-[0.16em] text-teal-bright uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
            {dict.hero.kicker[lang]}
          </div>

          <h1 className="font-display text-[clamp(42px,5.6vw,76px)] leading-[1.02] font-bold text-cream">
            {dict.hero.headlineMain[lang]}
            <span className="text-saffron-bright">{dict.hero.headlineAccent[lang]}</span>
          </h1>

          <p className="rtl-text-right mt-6 max-w-[500px] text-[17.5px] text-cream/78">
            {dict.hero.sub[lang]}
          </p>

          <div className="mt-9.5 flex flex-wrap gap-3.5">
            <Link
              href="/#order"
              className="rounded-full bg-saffron px-5 py-2.75 text-[13.5px] font-semibold text-navy-deep transition hover:-translate-y-0.5 hover:bg-saffron-bright hover:shadow-[0_10px_24px_rgba(240,168,48,0.35)]"
            >
              {dict.nav.orderPickup[lang]}
            </Link>
            <Link
              href="/#locations"
              className="rounded-full border border-cream/30 px-5 py-2.75 text-[13.5px] font-semibold text-cream transition hover:border-teal-bright hover:text-teal-bright"
            >
              {dict.hero.findLocation[lang]}
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-10 border-t border-cream/16 pt-8">
            <div>
              <b className="block font-display text-[28px] font-bold text-saffron-bright">1989</b>
              <span className="text-xs tracking-[0.09em] text-cream/60 uppercase">{dict.hero.meta1[lang]}</span>
            </div>
            <div>
              <b className="block font-display text-[28px] font-bold text-saffron-bright">34</b>
              <span className="text-xs tracking-[0.09em] text-cream/60 uppercase">{dict.hero.meta2[lang]}</span>
            </div>
            <div>
              <b className="block font-display text-[28px] font-bold text-saffron-bright">100%</b>
              <span className="text-xs tracking-[0.09em] text-cream/60 uppercase">{dict.hero.meta3[lang]}</span>
            </div>
          </div>
        </div>

        <Reveal className="rounded-[22px] border border-cream/16 bg-cream/6 p-6.5 shadow-[0_30px_80px_rgba(8,27,51,0.45)] backdrop-blur-md">
          <div className="mb-4.5 flex items-center justify-between">
            <span className="font-mono text-[11.5px] tracking-[0.1em] text-cream/60">
              {dict.live.label[lang]}
            </span>
            <span className="flex items-center gap-1.75 font-mono text-[11.5px] text-teal-bright">
              <span className="pulse-dot h-1.75 w-1.75 rounded-full bg-[#4ee08a]" />
              {dict.live.location[lang]}
            </span>
          </div>

          <div className="photo-zoom relative mb-4 h-[150px] overflow-hidden rounded-[14px] bg-paper">
            <Image
              src="https://www.mobyskabob.com/wp-content/uploads/2016/06/falafelPlate.png"
              alt="Moby Dick kabob platter"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="flex items-center gap-3.5 border-b border-cream/10 py-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron/18">
              <KubidehIcon />
            </div>
            <div>
              <h4 className="text-[14.5px] font-semibold text-cream">{dict.live.dish1name[lang]}</h4>
              <p className="mt-0.5 text-xs text-cream/55">{dict.live.dish1desc[lang]}</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 py-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/18">
              <JoojehIcon />
            </div>
            <div>
              <h4 className="text-[14.5px] font-semibold text-cream">{dict.live.dish2name[lang]}</h4>
              <p className="mt-0.5 text-xs text-cream/55">{dict.live.dish2desc[lang]}</p>
            </div>
          </div>

          <p className="mt-4.5 text-center text-[11.5px] text-cream/50">{dict.live.foot[lang]}</p>
        </Reveal>
      </div>
    </section>
  );
}
