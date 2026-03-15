"use client";

import { useEffect, useRef } from "react";

interface IdxWidgetProps {
  src: string;
  id: string;
  className?: string;
}

export default function IdxWidget({ src, id, className }: IdxWidgetProps) {
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

    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, [src, id]);

  return <div ref={containerRef} className={className} />;
}
