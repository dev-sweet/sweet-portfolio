"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import GlareHover from "@/components/GlareHover";
import ProfileCard from "@/components/shared/ProfileCard";

export default function StickyProfileAside() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState<number>(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateCenter = () => {
      if (cardRef.current) {
        const cardHeight = cardRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const containerTopOffset = 48;
        const idealY = (windowHeight - cardHeight) / 2 - containerTopOffset;
        setStartY(Math.max(0, idealY));
      }
    };

    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  const rawY = useTransform(scrollY, [0, 220], [startY, 0]);

  // Buttery-smooth spring physics
  const y = useSpring(rawY, {
    stiffness: 240,
    damping: 28,
    restDelta: 0.5,
  });

  return (
    <aside className="hidden lg:block lg:w-[300px] xl:w-[310px] shrink-0 sticky top-20 xl:top-24 self-start z-30">
      <motion.div style={{ y }} className="w-full will-change-transform">
        <div ref={cardRef} className="w-full">
          <GlareHover borderRadius="24px" borderColor="transparent" className="w-full">
            <ProfileCard />
          </GlareHover>
        </div>
      </motion.div>
    </aside>
  );
}

