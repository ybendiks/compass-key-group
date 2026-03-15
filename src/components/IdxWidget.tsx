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
        const fields = [
          { id: `IDX-qsMinPrice-${quickSearchId}`, placeholder: "Any" },
          { id: `IDX-qsMaxPrice-${quickSearchId}`, placeholder: "Any" },
          { id: `IDX-qsMinBed-${quickSearchId}`, placeholder: "Any" },
          { id: `IDX-qsMinBath-${quickSearchId}`, placeholder: "Any" },
        ];
        for (const f of fields) {
          const el = document.getElementById(f.id) as HTMLInputElement | null;
          if (el) {
            el.value = "";
            el.placeholder = f.placeholder;
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
