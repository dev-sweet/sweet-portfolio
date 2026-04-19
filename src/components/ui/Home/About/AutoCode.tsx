"use client";

import { useEffect, useState } from "react";

const FULL_CODE = `const developer = {
  name: 'Sweet Ali',
  role: 'Full Stack Developer',
  focus: 'Scalable Web Applications',
  mission: 'Clean & Maintainable Code'
};`;

type Token = {
  value: string;
  className: string;
};

function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  const regex = /(const)|('[^']*')|(\b[a-zA-Z]+\b)(\s*:\s*)|([\s\S])/g;
  let match;
  while ((match = regex.exec(code)) !== null) {
    if (match[1]) {
      tokens.push({ value: match[1], className: "text-purple-400" });
    } else if (match[2]) {
      tokens.push({ value: match[2], className: "text-green-400" });
    } else if (match[3] && match[4]) {
      tokens.push({ value: match[3], className: "text-cyan-400" });
      tokens.push({ value: match[4], className: "text-gray-400" });
    } else {
      tokens.push({ value: match[0], className: "text-gray-400" });
    }
  }
  return tokens;
}

// ── Only change: accept a `start` prop ──
export default function AutoTypingCode({ start = false }: { start?: boolean }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    // Don't begin until parent says start
    if (!start) return;
    if (visibleCount >= FULL_CODE.length) return;

    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, 25);

    return () => clearTimeout(timer);
  }, [start, visibleCount]);

  const visibleText = FULL_CODE.slice(0, visibleCount);
  const tokens = tokenize(visibleText);

  return (
    <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
      {tokens.map((t, i) => (
        <span key={i} className={t.className}>
          {t.value}
        </span>
      ))}
      {/* Hide cursor once fully typed */}
      {visibleCount < FULL_CODE.length && (
        <span className="text-purple-400 animate-pulse">▌</span>
      )}
    </pre>
  );
}
