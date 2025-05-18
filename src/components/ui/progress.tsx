"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full shadow-md shadow-violet-500/60",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full w-full flex-1 transition-all duration-1000 blur-sm animate-pulse inset-0"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
      {/* <span>80%</span> */}
    </ProgressPrimitive.Root>
  );
}

export { Progress };
