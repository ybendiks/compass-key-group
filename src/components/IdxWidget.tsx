"use client";

import { useEffect, useRef } from "react";

interface IdxWidgetProps {
  src: string;
  id: string;
  className?: string;
  /** Widget ID number for setting friendly placeholders on Quick Search fields */
  quickSearchId?: string;
}

export default function IdxWidget({ src, id, className, quickSearchId }: IdxWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.type = "text/javascript";
    script.charset = "UTF-8";
    container.appendChild(script);

    let timer: ReturnType<typeof setTimeout> | undefined;
    if (quickSearchId) {
      timer = setTimeout(() => {
        const minPrice = document.getElementById(`IDX-qsMinPrice-${quickSearchId}`) as HTMLInputElement | null;
        const maxPrice = document.getElementById(`IDX-qsMaxPrice-${quickSearchId}`) as HTMLInputElement | null;
        const minBed = document.getElementById(`IDX-qsMinBed-${quickSearchId}`) as HTMLInputElement | null;
        const minBath = document.getElementById(`IDX-qsMinBath-${quickSearchId}`) as HTMLInputElement | null;
        const citySelect = document.getElementById(`IDX-qsCityList-${quickSearchId}`) as HTMLSelectElement | null;

        if (minPrice) minPrice.value = "100000";
        if (maxPrice) maxPrice.value = "500000";
        if (minBed) minBed.value = "1";
        if (minBath) minBath.value = "1";

        if (citySelect) {
          for (let i = 0; i < citySelect.options.length; i++) {
            if (citySelect.options[i].text.toLowerCase().includes("elizabethtown")) {
              citySelect.selectedIndex = i;
              break;
            }
          }
        }
      }, 1500);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, [src, id, quickSearchId]);

  return <div ref={containerRef} className={className} />;
}
