"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";
import { dict, type LocationEntry } from "@/lib/i18n";

export function LocationModal({ location, onClose }: { location: LocationEntry; onClose: () => void }) {
  const { lang } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(location.address)}&z=15&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center bg-navy-deep/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[560px] overflow-hidden rounded-[24px] border border-cream/12 bg-navy-deep text-cream shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
      >
        <div className="flip flex items-start justify-between gap-4 p-6.5 pb-4">
          <div>
            <h3 className="font-display text-xl font-bold">{location.city}</h3>
            <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-cream/50 uppercase">
              {dict.state[location.state][lang]}
            </p>
            {location.badge && (
              <span className="mt-2 inline-block font-mono text-[9.5px] text-saffron-bright">
                {dict.badge[location.badge][lang]}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label={dict.locations.close[lang]}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cream/18 text-cream/70 transition hover:border-cream/40 hover:text-cream"
          >
            ✕
          </button>
        </div>

        <div className="h-[240px] w-full bg-paper">
          <iframe
            src={embedSrc}
            title={`Map of ${location.city}`}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="p-6.5 pt-5">
          <p className="rtl-text-right text-[14.5px] text-cream/85" dir="ltr">
            {location.address}
          </p>
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-2.75 text-[13.5px] font-semibold text-navy-deep transition hover:-translate-y-0.5 hover:bg-saffron-bright hover:shadow-[0_10px_24px_rgba(240,168,48,0.35)]"
          >
            {dict.locations.getDirections[lang]}
          </a>
        </div>
      </div>
    </div>
  );
}
