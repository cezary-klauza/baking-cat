"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { aboutUsParagraphs } from "@/constants";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import FAQCard from "./FAQCard";

type ParagraphProps = {
  icon: string;
  iconAlt: string;
  text: string;
  iconSide: "left" | "right";
};

const Paragraph = ({ icon, iconAlt, text }: ParagraphProps) => {
  return (
    <div className="flex justify-between items-center w-5/6 xl:w-1/2 gap-12 relative">
      <div className=" hidden lg:flex justify-center items-center relative w-0 p-8">
        <Image
          src={icon}
          alt={iconAlt}
          fill
          className="invert drop-shadow-md object-fill"
        />
      </div>
      <p className="text-white max-lg:text-center text-xl max-lg:text-lg max-sm:text-base font-light">
        {text}
      </p>
    </div>
  );
};

const AboutUsCard = () => {
  const window = useWindowSize();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setHover(window.width < 1100);
  }, [window]);

  return (
    <div
      className="w-full bg-about-us bg-cover bg-bottom flex flex-col gap-8 justify-center items-center py-12
                    relative bottom-0 left-0 rounded-3xl overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3
        className={`font-bold text-7xl max-xl:text-6xl max-sm:text-4xl text-white drop-shadow-md z-10 relative top-${
          hover ? "0" : "14"
        } transition-all duration-300`}
      >
        More About us
      </h3>
      <div
        className={clsx(
          "w-full px-12 flex flex-col gap-8 max-lg:gap-16 justify-center items-center opacity-0 transition-opacity duration-400 z-10",
          { "opacity-100": hover }
        )}
      >
        <div className="flex lg:flex-row flex-col gap-6">
          {aboutUsParagraphs.map(({ text, icon, iconAlt }, i) => (
            <FAQCard
              description={text}
              textColor="text-white"
              img={icon}
              alt={iconAlt}
              key={iconAlt}
              invertIcon
              className="bg-black-1 bg-opacity-40 border-0"
            />
          ))}
        </div>

        <Link href="/aboutus" className="max-lg:w-full">
          <Button size="xl" className="bg-red-2 text-xl hover:bg-red-1 w-full">
            Read More
          </Button>
        </Link>
      </div>
      <div
        className={clsx(
          "bg-black-1 absolute top-0 left-0 h-full w-full z-0 opacity-0",
          { "opacity-40": hover }
        )}
      />
    </div>
  );
};

export default AboutUsCard;
