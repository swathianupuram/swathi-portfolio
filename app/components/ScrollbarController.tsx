"use client";
import { useEffect, useRef } from "react";

export default function ScrollbarController() {
  const thumbRef = useRef<HTMLDivElement>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const thumb = thumbRef.current;
    if (!thumb) return;

    const updateThumb = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? scrollTop / docHeight : 0;
      const thumbHeight = Math.max(40, (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight);
      const maxTop = window.innerHeight - thumbHeight;
      thumb.style.height = `${thumbHeight}px`;
      thumb.style.top = `${percent * maxTop}px`;
    };

    const show = () => {
      updateThumb();
      thumb.style.opacity = "1";
      clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => {
        thumb.style.opacity = "0";
      }, 1000);
    };

    updateThumb();
    window.addEventListener("scroll", show, { passive: true });
    window.addEventListener("mousemove", show, { passive: true });

    return () => {
      window.removeEventListener("scroll", show);
      window.removeEventListener("mousemove", show);
      clearTimeout(hideTimeout.current);
    };
  }, []);

  return (
    <div style={{ position: "fixed", right: "4px", top: 0, bottom: 0, width: "6px", zIndex: 9999, pointerEvents: "none" }}>
      <div
        ref={thumbRef}
        style={{
          position: "absolute",
          right: 0,
          width: "6px",
          borderRadius: "3px",
          background: "#3a3a3a",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}
