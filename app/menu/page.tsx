"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/LanguageContext";
import { dict } from "@/lib/i18n";
import { fullMenu } from "@/lib/fullMenu";

export default function FullMenuPage() {
  const { lang } = useLang();

  return (
    <>
      <Header />
      <main>
        <section className="bg-navy-deep pt-[190px] pb-16 text-cream">
          <div className="mx-auto max-w-[1220px] px-8">
            <Link href="/" className="text-sm text-teal-bright hover:text-teal-bright/80">
              {dict.fullMenu.backLink[lang]}
            </Link>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-teal-bright/30 bg-teal/14 px-3.5 py-2 font-mono text-[11.5px] tracking-[0.16em] text-teal-bright uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
              {dict.fullMenu.kicker[lang]}
            </div>
            <h1 className="mt-3 font-display text-[clamp(32px,4.5vw,52px)] font-bold">
              {dict.fullMenu.title[lang]}
            </h1>
            <p className="rtl-text-right mt-4 max-w-[560px] text-[16.5px] text-cream/75">{dict.fullMenu.desc[lang]}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1220px] px-8">
            {fullMenu.map((cat) => (
              <div key={cat.category.en} className="mb-16 last:mb-0">
                <h2 className="font-display text-2xl font-bold">{cat.category[lang]}</h2>
                {cat.note && <p className="rtl-text-right mt-2 max-w-[720px] text-sm opacity-65">{cat.note[lang]}</p>}

                <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name.en}
                      className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,44,79,0.1)]"
                    >
                      <div className="relative h-[120px] bg-paper">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name.en}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-xs text-navy/30">
                            {dict.fullMenu.noPhoto[lang]}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-paper px-1.5 py-0.5 font-mono text-[9px] tracking-[0.05em] text-navy opacity-70"
                            >
                              {dict.tag[tag][lang]}
                            </span>
                          ))}
                        </div>
                        <h3 className="mt-2 text-[14.5px] font-bold">{item.name[lang]}</h3>
                        {item.desc && (
                          <p className="rtl-text-right mt-1 line-clamp-3 text-xs leading-[1.5] opacity-65">
                            {item.desc[lang]}
                          </p>
                        )}
                        {item.calories && (
                          <span className="mt-2 block font-mono text-[11px] text-teal">{item.calories}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-4 space-y-8 border-t border-navy/10 pt-10">
              <div>
                <h4 className="mb-2 text-sm font-bold text-saffron">{dict.fullMenu.glutenFreeTitle[lang]}</h4>
                <p className="rtl-text-right text-[13px] leading-[1.7] opacity-60">{dict.fullMenu.glutenFreeText[lang]}</p>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-bold text-saffron">{dict.fullMenu.noticeTitle[lang]}</h4>
                <p className="rtl-text-right text-[13px] leading-[1.7] opacity-60">{dict.fullMenu.noticeText[lang]}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
