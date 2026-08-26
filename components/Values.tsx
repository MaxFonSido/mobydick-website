"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { dict } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const values = [
  {
    img: "https://www.mobyskabob.com/wp-content/uploads/2016/05/Home_Ingredients.jpg",
    alt: "Fresh ingredients",
    num: "01",
    t: dict.values.v1,
  },
  {
    img: "https://www.mobyskabob.com/wp-content/uploads/2016/05/Home_Vision__Values1.jpg",
    alt: "Moby Dick vision and values",
    num: "02",
    t: dict.values.v2,
  },
  {
    img: "https://www.mobyskabob.com/wp-content/uploads/2016/05/VVS_Main_Image.jpg",
    alt: "Persian kabob platter",
    num: "03",
    t: dict.values.v3,
  },
];

export function Values() {
  const { lang } = useLang();

  return (
    <section className="py-[110px]">
      <div className="mx-auto max-w-[1220px] px-8">
        <Reveal className="mb-15 max-w-[640px]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-2 font-mono text-[11.5px] tracking-[0.16em] text-teal uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
            {dict.values.kicker[lang]}
          </div>
          <h2 className="mt-3 font-display text-[clamp(30px,4vw,48px)] font-bold">{dict.values.title[lang]}</h2>
          <p className="rtl-text-right mt-4 max-w-[540px] text-[16.5px] opacity-68">{dict.values.desc[lang]}</p>
        </Reveal>

        <Reveal className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.num} className="overflow-hidden rounded-[20px] bg-paper">
              <div className="photo-zoom relative h-[170px]">
                <Image src={v.img} alt={v.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" unoptimized />
              </div>
              <div className="p-6.5">
                <span className="mb-4.5 block font-mono text-xs text-saffron">{v.num}</span>
                <h3 className="mb-2.5 text-[19px] font-bold">{v.t.title[lang]}</h3>
                <p className="rtl-text-right text-sm opacity-65">{v.t.desc[lang]}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
