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
import Image from "next/image";

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
    <div ref={ref} className="pt-5 pb-10">
      <h2 className="text-gray-300 text-3xl text-center font-bold mb-5 flex items-center justify-center gap-2">
        <Image
          src="/frontend.png"
          height={40}
          width={40}
          alt="Frontend image"
        />{" "}
        Frontend:
      </h2>
      <div className="abosulte grid md:grid-cols-3 grid-cols-1 gap-5">
        {frontend.map((skill, i) => (
          <div key={i}>
            <h3 className="flex items-center justify-between text-gray-300 font-bold mb-2">
              <span>{skill.name}</span>
              <span className="mr-5 text-gray-300 font-semibold text-shadow-lg">
                {progressValues[i]}%
              </span>
            </h3>
            <Progress
              value={progressValues[i]}
              className="w-full h-7 rounded-full bg-neutral-900"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
