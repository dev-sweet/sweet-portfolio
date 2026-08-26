"use client";
import { useEffect, useRef } from "react";

interface Props {
  defaultCursorImg: string;
  hoverCursorImg: string;
  size?: number;
}

const INTERACTIVE_SELECTOR =
  ".cursor-hover, .cursor-pointer, a, button, input, textarea, select, [role='button'], [role='tab'], label";

export default function CustomCursor({
  defaultCursorImg,
  hoverCursorImg,
  size = 40,
}: Props) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    // Check if pointer is coarse (touch device)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const render = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)
          translate(-50%, -50%)
        `;
      }
      raf.current = requestAnimationFrame(render);
    };

    raf.current = requestAnimationFrame(render);
    window.addEventListener("mousemove", move, { passive: true });

    // Hover logic via selector and class
    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.closest?.(INTERACTIVE_SELECTOR) && cursorRef.current) {
        cursorRef.current.style.backgroundImage = `url(${hoverCursorImg})`;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (related?.closest?.(INTERACTIVE_SELECTOR)) {
        return;
      }
      if (cursorRef.current) {
        cursorRef.current.style.backgroundImage = `url(${defaultCursorImg})`;
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [defaultCursorImg, hoverCursorImg]);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed pointer-events-none bg-no-repeat bg-center bg-contain transition-[background-image] duration-75"
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${defaultCursorImg})`,
        zIndex: 2147483647,
        left: 0,
        top: 0,
      }}
    />
  );
}

