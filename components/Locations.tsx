"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { dict, locationList, type LocationEntry } from "@/lib/i18n";
import { SearchIcon } from "./icons";
import { Reveal } from "./Reveal";
import { LocationModal } from "./LocationModal";

// USPS ZIP3 prefix ranges for the DC/MD/VA metro: coarse (state-level), not
// per-branch, so a real ZIP falls back to "same region" rather than no match.
function regionForZip(zip: string): "dc" | "md" | "va" | null {
  const zip3 = parseInt(zip.slice(0, 3), 10);
  if (Number.isNaN(zip3)) return null;
  if (zip3 >= 200 && zip3 <= 205) return "dc";
  if (zip3 >= 206 && zip3 <= 219) return "md";
  if (zip3 >= 220 && zip3 <= 246) return "va";
  return null;
}

const stateRegion = { md: "md", va: "va", dc: "dc", umd: "md" } as const;

export function Locations() {
  const { lang } = useLang();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<LocationEntry | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return locationList;

    if (/^\d{3,5}$/.test(q)) {
      const region = regionForZip(q);
      if (!region) return [];
      return locationList.filter((loc) => stateRegion[loc.state] === region);
    }

    return locationList.filter((loc) => {
      const stateLabel = dict.state[loc.state][lang].toLowerCase();
      return loc.city.toLowerCase().includes(q) || stateLabel.includes(q);
    });
  }, [query, lang]);

  return (
    <section id="locations">
      <div className="mx-auto max-w-[1220px] px-8">
        <Reveal className="loc-shell-bg relative overflow-hidden rounded-[28px] bg-navy-deep p-9 text-cream md:p-16">
          <div className="relative mb-11 flex flex-wrap items-end justify-between gap-7.5">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-bright/30 bg-teal/14 px-3.5 py-2 font-mono text-[11.5px] tracking-[0.16em] text-teal-bright uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
                {dict.locations.kicker[lang]}
              </div>
              <h2 className="mt-3.5 font-display text-[34px] font-bold">{dict.locations.title[lang]}</h2>
            </div>
            <div className="flex min-w-[280px] items-center gap-2.5 rounded-full border border-cream/18 bg-cream/8 py-1.5 ps-5 pe-1.5 md:min-w-[340px]">
              <SearchIcon className="shrink-0 text-cream/50" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={dict.locations.searchPlaceholder[lang]}
                className="flex-1 bg-transparent text-[13.5px] text-cream outline-none placeholder:text-cream/40"
              />
              <button className="rounded-full bg-saffron px-4.5 py-2.25 text-[13.5px] font-semibold text-navy-deep">
                {dict.locations.searchBtn[lang]}
              </button>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="relative grid grid-cols-2 gap-3 md:grid-cols-5">
              {filtered.map((loc) => (
                <button
                  key={loc.city}
                  type="button"
                  onClick={() => setSelected(loc)}
                  title={loc.address}
                  className="rtl-text-right block w-full rounded-2xl border border-cream/12 bg-cream/5 px-5 py-4.5 text-start transition-colors hover:border-teal-bright/40 hover:bg-teal/14"
                >
                  <div className="text-[14.5px] font-semibold">{loc.city}</div>
                  <div className="mt-1 font-mono text-[10.5px] opacity-50">{dict.state[loc.state][lang]}</div>
                  {loc.badge && (
                    <span className="mt-2 inline-block font-mono text-[9.5px] text-saffron-bright">
                      {dict.badge[loc.badge][lang]}
                    </span>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <p className="relative text-sm opacity-60">{dict.locations.noResults[lang]}</p>
          )}

          <p className="relative mt-6 font-mono text-[11.5px] opacity-45">{dict.locations.footnote[lang]}</p>
        </Reveal>
      </div>

      {selected && <LocationModal location={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
