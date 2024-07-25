import { cn } from "@/lib/utils";
import clsx from "clsx";

type FAQCardProps = {
  img: string;
  invertIcon?: boolean;
  alt: string;
  title?: string;
  description: string;
  textColor?: string;
  className?: string;
};

const FAQCard = ({
  img,
  invertIcon,
  alt,
  title,
  description,
  textColor,
  className,
}: FAQCardProps) => {
  return (
    <div className={"w-full"}>
      <div
        className={cn(
          "lg:max-w-[400px] h-[400px] mx-auto flex flex-col gap-4 items-center justify-center text-center p-8 rounded-3xl border-2 border-gray-3 shadow-md",
          className
        )}
      >
        <div className="h-24 relative w-full">
          <img
            src={img}
            alt={alt}
            className={cn(
              "h-full mx-auto relative",
              invertIcon ? "invert" : ""
            )}
          />
        </div>
        <div>
          <h3 className="font-semibold text-black-1 text-2xl mb-2">{title}</h3>
          <p className={cn("font-light text-base text-gray-3", textColor)}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
