"use client";

import { useEffect, useState, useMemo } from "react";
import { SiTypescript } from "react-icons/si";
import { Copy, Check, GitBranch, Terminal } from "lucide-react";

const FULL_CODE = `const sweetAli = {
  role: "Full-Stack Developer",
  builds: [
    "ERP Systems",
    "E-commerce Platforms",
    "AI-Powered Applications"
  ],
  stack: ["Next.js", "TypeScript", "Node.js"],
  focus: "Reliable & maintainable software"
};`;

type Token = {
  text: string;
  className: string;
};

// VS Code / One Dark Pro inspired syntax tokenization
function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  const tokenRegex =
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b(?:const|let|var|function|return|import|export|from|type|interface|async|await)\b)|(\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*:))|(\b(?:true|false|null|undefined)\b)|(\b\d+\b)|([{}()[\]])|([=,;:+\-*/<>!&|]+)|([a-zA-Z_$][a-zA-Z0-9_$]*)|(\s+)|(.)/g;

  let match;
  while ((match = tokenRegex.exec(line)) !== null) {
    const [
      full,
      str,
      keyword,
      objKey,
      boolVal,
      num,
      bracket,
      operator,
      identifier,
      whitespace,
      other,
    ] = match;

    if (str) {
      tokens.push({ text: str, className: "text-[#98C379]" }); // Mint Green for strings
    } else if (keyword) {
      tokens.push({ text: keyword, className: "text-[#C678DD] font-semibold" }); // Magenta/Purple for keywords
    } else if (objKey) {
      tokens.push({ text: objKey, className: "text-[#E06C75]" }); // Coral/Red for property keys
    } else if (boolVal || num) {
      tokens.push({ text: boolVal || num, className: "text-[#D19A66]" }); // Orange for numbers/booleans
    } else if (bracket) {
      // Golden / Cyan for brackets
      const isCurly = bracket === "{" || bracket === "}";
      const isSquare = bracket === "[" || bracket === "]";
      tokens.push({
        text: bracket,
        className: isCurly
          ? "text-[#E5C07B] font-bold"
          : isSquare
          ? "text-[#61AFEF] font-bold"
          : "text-[#ABB2BF]",
      });
    } else if (operator) {
      tokens.push({ text: operator, className: "text-[#56B6C2]" }); // Cyan for operators & punctuation
    } else if (identifier) {
      if (identifier === "sweetAli") {
        tokens.push({ text: identifier, className: "text-[#61AFEF] font-medium" }); // Sky blue for primary identifier
      } else {
        tokens.push({ text: identifier, className: "text-[#E5C07B]" }); // Gold/Yellow for other identifiers
      }
    } else if (whitespace) {
      tokens.push({ text: whitespace, className: "" });
    } else {
      tokens.push({ text: other || full, className: "text-[#ABB2BF]" });
    }
  }

  return tokens;
}

export default function AutoTypingCode({ start = false }: { start?: boolean }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!start) return;
    if (visibleCount >= FULL_CODE.length) return;

    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, 22);

    return () => clearTimeout(timer);
  }, [start, visibleCount]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(FULL_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const visibleText = FULL_CODE.slice(0, visibleCount);
  const totalLines = useMemo(() => FULL_CODE.split("\n"), []);
  const currentLines = useMemo(() => visibleText.split("\n"), [visibleText]);
  const activeLineIndex = currentLines.length - 1;

  return (
    <div className="w-full rounded-2xl bg-[#0B0F17] border border-[#1E293B] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm select-text transition-all duration-300 hover:border-[#334155]">
      {/* ── Editor Window Header ── */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#070A10] border-b border-[#1E293B]/80">
        {/* Left: Window Controls & Active Tab */}
        <div className="flex items-center gap-3">
          {/* macOS Traffic Lights */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 inline-block shadow-[0_0_6px_rgba(255,95,86,0.35)]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 inline-block shadow-[0_0_6px_rgba(255,189,46,0.35)]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 inline-block shadow-[0_0_6px_rgba(39,201,63,0.35)]" />
          </div>

          {/* Active File Tab */}
          <div className="hidden sm:flex items-center gap-2 ml-3 px-3 py-1 bg-[#0B0F17] border-t-2 border-[#38BDF8] border-x border-[#1E293B] rounded-t-md text-xs font-medium text-slate-200">
            <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" />
            <span>sweetAli.ts</span>
            <span className="text-slate-500 hover:text-slate-300 ml-1 text-xs cursor-default">✕</span>
          </div>

          {/* Inactive Tab */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-400 cursor-default">
            <span>bio.json</span>
          </div>
        </div>

        {/* Center: File breadcrumb for mobile */}
        <div className="sm:hidden flex items-center gap-1.5 text-[11px] text-slate-400">
          <SiTypescript className="w-3 h-3 text-[#3178C6]" />
          <span>sweetAli.ts</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-slate-400 hover:text-slate-100 hover:bg-[#1E293B]/70 active:scale-95 transition-all duration-200 cursor-pointer"
            title="Copy Code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] text-emerald-400 font-sans">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[11px] font-sans">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Editor Code Area ── */}
      <div className="p-4 sm:p-5 overflow-x-auto bg-[#080B11]/90">
        <div className="min-w-[320px]">
          {totalLines.map((fullLine, idx) => {
            const hasTyped = idx < currentLines.length;
            const lineContent = hasTyped ? currentLines[idx] : "";
            const isCurrentTypingLine = idx === activeLineIndex && visibleCount < FULL_CODE.length;
            const lineTokens = tokenizeLine(lineContent);

            return (
              <div
                key={idx}
                className={`flex items-start leading-6 font-mono transition-colors duration-150 rounded ${
                  isCurrentTypingLine ? "bg-[#1E293B]/30" : "hover:bg-[#111726]/40"
                }`}
              >
                {/* Line Number */}
                <span className="w-7 sm:w-8 select-none text-right pr-3 text-[#475569] text-xs font-mono shrink-0">
                  {idx + 1}
                </span>

                {/* Line Code */}
                <div className="pl-3 flex-1 whitespace-pre break-normal">
                  {hasTyped ? (
                    <>
                      {lineTokens.map((token, tIdx) => (
                        <span key={tIdx} className={token.className}>
                          {token.text}
                        </span>
                      ))}
                      {/* Active typing cursor */}
                      {isCurrentTypingLine && (
                        <span className="inline-block w-2 h-4 ml-0.5 align-middle bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse rounded-xs" />
                      )}
                    </>
                  ) : (
                    <span className="opacity-0 select-none">.</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Editor Status Bar (VS Code Footer) ── */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-[#070A10] border-t border-[#1E293B]/80 text-[11px] text-slate-500 select-none">
        {/* Left: Git Branch & Terminal status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 hover:text-slate-300 cursor-default">
            <GitBranch className="w-3 h-3 text-[#38BDF8]" />
            <span>main*</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 hover:text-slate-300 cursor-default">
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span>ready</span>
          </div>
        </div>

        {/* Right: Language, Encoding, Spacing */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">Spaces: 2</span>
          <span className="hidden sm:inline">UTF-8</span>
          <span className="text-[#38BDF8] font-medium">TypeScript</span>
        </div>
      </div>
    </div>
  );
}
