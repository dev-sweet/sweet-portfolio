"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";

const frontend = [
  { name: "React", expertise: 85 },
  { name: "Next.js", expertise: 80 },
  { name: "Redux", expertise: 70 },
  { name: "JavaScript", expertise: 90 },
  { name: "TypeScript", expertise: 75 },
  { name: "Tailwind CSS", expertise: 85 },
  { name: "CSS", expertise: 90 },
  { name: "HTML", expertise: 95 },
  { name: "ShadCN UI", expertise: 70 },
];
import { useInView } from "framer-motion";

const Frontend = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [progressValues, setProgressValues] = useState(frontend.map(() => 0));
  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setProgressValues(frontend.map((skill) => skill.expertise));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <h2 className="text-gray-200 text-2xl text-center font-bold mb-5">
        Frontend:
      </h2>
      <div className="abosulte grid md:grid-cols-3 grid-cols-1 gap-5">
        {frontend.map((skill, i) => (
          <div key={i}>
            <h3 className="flex items-center justify-between text-gray-200 font-bold mb-2">
              <span>{skill.name}</span>
              <span className="mr-5 gray-300 font-semibold">
                {progressValues[i]}%
              </span>
            </h3>
            <Progress
              value={progressValues[i]}
              className="w-full h-7 rounded-full bg-neutral-900 border border-neutral-700"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
