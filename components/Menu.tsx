"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { dict } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const dishes = [
  {
    img: "https://www.mobyskabob.com/wp-content/uploads/2016/05/Entrees1.png",
    alt: "Moby Dick Super Combo kabob",
    bg: "#fde3c2",
    tags: ["halal", "gf"] as const,
    key: dict.dish.kubideh,
  },
  {
    img: "https://www.mobyskabob.com/wp-content/uploads/2016/05/Sandwiches1.png",
    alt: "Signature Joojeh kabob",
    bg: "#cdeff0",
    tags: ["halal", "gf"] as const,
    key: dict.dish.joojeh,
  },
  {
    img: "https://www.mobyskabob.com/wp-content/uploads/2016/05/Lunch_Specials.png",
    alt: "Khoresht Gheymeh",
    bg: "#f8dede",
    tags: ["halal"] as const,
    key: dict.dish.gyro,
  },
  {
    img: "https://www.mobyskabob.com/wp-content/uploads/2017/03/MediterraneanSalad.png",
    alt: "Mediterranean salad",
    bg: "#e4d9f7",
    tags: ["halal", "gf"] as const,
    key: dict.dish.lamb,
  },
  {
    img: "https://www.mobyskabob.com/wp-content/uploads/2016/05/Veggies2.png",
    alt: "Moby's Veggie kabob",
    bg: "#d7ecff",
    tags: ["halal", "gf"] as const,
    key: dict.dish.salmon,
  },
  {
    img: "https://www.mobyskabob.com/wp-content/uploads/2016/06/falafelPlate.png",
    alt: "Falafel plate",
    bg: "#dcefd4",
    tags: ["veg"] as const,
    key: dict.dish.falafel,
  },
];

export function Menu() {
  const { lang } = useLang();

  return (
    <section id="menu" className="py-[110px]">
      <div className="mx-auto max-w-[1220px] px-8">
        <Reveal className="mb-15 max-w-[640px]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-2 font-mono text-[11.5px] tracking-[0.16em] text-teal uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
            {dict.menu.kicker[lang]}
          </div>
          <h2 className="mt-3 font-display text-[clamp(30px,4vw,48px)] font-bold">{dict.menu.title[lang]}</h2>
          <p className="rtl-text-right mt-4 max-w-[540px] text-[16.5px] opacity-68">{dict.menu.desc[lang]}</p>
        </Reveal>

        <Reveal>
          <div className="rail -mx-8 flex snap-x snap-mandatory gap-5.5 overflow-x-auto px-8 pt-1 pb-6.5">
            {dishes.map((dish) => (
              <div
                key={dish.alt}
                className="w-[280px] shrink-0 snap-start overflow-hidden rounded-[18px] border border-navy/12 bg-white shadow-sm transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,44,79,0.12)]"
              >
                <div className="photo-zoom relative h-[150px]" style={{ background: dish.bg }}>
                  <Image src={dish.img} alt={dish.alt} fill sizes="280px" className="object-cover" unoptimized />
                </div>
                <div className="p-5.5">
                  <div className="mb-2.5 flex gap-1.5">
                    {dish.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-paper px-2 py-0.75 font-mono text-[9.5px] tracking-[0.06em] text-navy opacity-70"
                      >
                        {dict.tag[tag][lang]}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-[18.5px] font-bold">{dish.key.name[lang]}</h3>
                  <p className="text-[13px] leading-[1.55] opacity-62">{dish.key.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/menu"
            className="mt-2.5 inline-block rounded-full bg-navy px-5 py-2.75 text-[13.5px] font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-navy-deep"
          >
            {dict.menu.viewFull[lang]}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
