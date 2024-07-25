"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

const Property = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isAbled, setIsAbled] = useState(true);

  return (
    <div className="w-full overflow-hidden relative mb-4">
      <div className="w-full flex items-center relative z-10">
        <h3 className="font-semibold text-xl text-black-1">{title}</h3>
        <ChevronDown
          color="#2C2C2C"
          className={cn(
            "transition-all duration-200 ease-out",
            isAbled ? "" : "rotate-180"
          )}
          onClick={() => setIsAbled(!isAbled)}
        />
      </div>
      <div
        className={cn(
          "my-6 relative z-0 transition-all duration-200 ease-out",
          isAbled ? "" : "hidden"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Property;
