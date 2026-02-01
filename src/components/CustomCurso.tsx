"use client";
import { useEffect, useRef } from "react";

interface Props {
  defaultCursorImg: string;
  hoverCursorImg: string;
  size?: number;
}

export default function CustomCursor({
  defaultCursorImg,
  hoverCursorImg,
  size = 28,
}: Props) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  // Cursor follow (FAST)
  useEffect(() => {
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

    return () => {
      window.removeEventListener("mousemove", move);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  // Hover logic via CLASS
  useEffect(() => {
    const over = (e: Event) => {
      const el = e.target as HTMLElement;

      if (el.closest(".cursor-hover") && cursorRef.current) {
        cursorRef.current.style.backgroundImage = `url(${hoverCursorImg})`;
      }
    };

    const out = () => {
      if (cursorRef.current) {
        cursorRef.current.style.backgroundImage = `url(${defaultCursorImg})`;
      }
    };

    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [defaultCursorImg, hoverCursorImg]);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none bg-no-repeat bg-center bg-contain"
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
