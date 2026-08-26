"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { dict } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const timeline = [
  { yr: "1989", t: dict.story.t1 },
  { yr: "1990", t: dict.story.t2 },
  { yr: "1992", t: dict.story.t3 },
  { yr: "2026", t: dict.story.t4 },
];

export function Story() {
  const { lang, dir } = useLang();

  return (
    <section id="story" className="bg-navy-deep py-[110px] text-cream">
      <div className="mx-auto grid max-w-[1220px] items-center gap-17.5 px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="photo-zoom relative aspect-[0.9] overflow-hidden rounded-[26px] bg-gradient-to-br from-teal via-navy to-navy-deep">
          <Image
            src="https://www.mobyskabob.com/wp-content/uploads/2016/05/Home_Story.jpg"
            alt="The original Moby Dick storefront"
            fill
            sizes="(max-width: 1024px) 90vw, 480px"
            className="object-cover saturate-90 contrast-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-[linear-gradient(200deg,rgba(15,44,79,0.15),rgba(8,27,51,0.85)_75%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-display text-[96px] leading-none font-bold text-saffron-bright">36</span>
            <span className="mt-2.5 font-mono text-[11px] tracking-[0.18em] opacity-75 uppercase">
              {dict.story.years[lang]}
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-bright/30 bg-teal/14 px-3.5 py-2 font-mono text-[11.5px] tracking-[0.16em] text-teal-bright uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
            {dict.story.kicker[lang]}
          </div>
          <h2 className="mt-3 mb-6 font-display text-[clamp(30px,4vw,48px)] font-bold">{dict.story.title[lang]}</h2>
          <p className="rtl-text-right mb-5 font-display text-[21px] leading-[1.4] font-medium">
            {dict.story.lede[lang]}
          </p>

          <div className="mt-2.5">
            {timeline.map((row, i) => (
              <div
                key={row.yr}
                className={`grid gap-5 py-5 ${i === 0 ? "" : "border-t border-cream/12"}`}
                style={{ gridTemplateColumns: dir === "rtl" ? "1fr 70px" : "70px 1fr" }}
              >
                <div
                  className={`font-mono text-[13px] font-medium text-teal ${
                    dir === "rtl" ? "text-left" : ""
                  }`}
                >
                  {row.yr}
                </div>
                <div>
                  <h4 className="mb-1 text-base font-bold">{row.t.title[lang]}</h4>
                  <p className="rtl-text-right text-sm opacity-65">{row.t.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
