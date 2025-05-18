"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
const backend = [
  { name: "Node.js", expertise: 80 },
  { name: "Express.js", expertise: 88 },
  { name: "MongoDB", expertise: 80 },
  { name: "Firebase", expertise: 75 },
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
      <h2 className="text-gray-200 text-2xl my-5 text-center font-bold">
        Backend:
      </h2>
      <div className="abosulte grid md:grid-cols-2 grid-cols-1 gap-6">
        {backend.map((skill, i) => (
          <div key={i}>
            <h3 className="flex items-center justify-between text-gray-400 font-bold mb-1">
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
