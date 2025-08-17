"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { DatabaseZap } from "lucide-react";
const backend = [
  { name: "Node.js", expertise: 80 },
  { name: "Express.js", expertise: 88 },
  { name: "MongoDB", expertise: 85 },
  { name: "MySQL", expertise: 81 },
  { name: "Prisma", expertise: 80 },
];
const Backend = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [progressValues, setProgressValues] = useState(backend.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setProgressValues(backend.map((skill) => skill.expertise));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <h2 className="text-gray-200 text-3xl my-10 text-center font-bold flex items-center justify-center gap-2">
        <DatabaseZap className="text-[#018673]" /> Backend:
      </h2>
      <div className="abosulte grid md:grid-cols-2 grid-cols-1 gap-6">
        {backend.map((skill, i) => (
          <div key={i}>
            <h3 className="flex items-center justify-between text-gray-300 font-bold mb-1">
              <span>{skill.name}</span>
              <span className="mr-5 text-gray-300">{skill.expertise}%</span>
            </h3>
            <Progress
              value={progressValues[i]}
              className="w-full h-8 rounded-full bg-neutral-900 border border-neutral-700"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backend;
