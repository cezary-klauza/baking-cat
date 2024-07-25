import { useWindowSize } from "@/hooks/useWindowSize";
import clsx from "clsx";
import Image from "next/image";

type TypeCardProps = {
  img: string;
  imgAlt: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
};

const TypeCard = ({ img, imgAlt, title, isActive, onClick }: TypeCardProps) => {
  const size = useWindowSize();
  return (
    <div
      className={clsx(
        "w-full flex flex-col items-center justify-center bg-[#fcfcfc] drop-shadow-md rounded-3xl cursor-pointer hover:scale-105 transition-all duration-200 hover:drop-shadow-xl border-[#f5f5f5] border-[1px] p-4",
        { "scale-105": isActive }
      )}
      onClick={() => onClick()}
    >
      <Image
        src={img}
        alt={imgAlt}
        width={size.width < 1280 ? 40 : 60}
        height={size.width < 1280 ? 40 : 60}
      />
      <h3 className="text-2xl font-extrabold max-xl:text-lg">{title}</h3>
    </div>
  );
};

export default TypeCard;
