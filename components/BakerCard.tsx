import Image from "next/image";

type BakerCardProps = {
  img: string;
  name: string;
  profession: string;
  description: string;
};

const BakerCard = ({ img, name, profession, description }: BakerCardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] bg-black-1 text-white rounded-[50px] relative overflow-hidden">
      <div className="w-full sm:w-[300px] xl:w-[566px] h-full sm:h-[400px] xl:h-[698px] absolute top-0 right-0 sm:left-0 opacity-10 sm:opacity-100 sm:relative">
        <Image src={img} alt="baker" fill className="object-cover object-top" />
      </div>
      <div className="flex flex-col gap-6 relative text-left p-6">
        <div className="font-semibold uppercase tracking-widest">
          <h3 className="text-3xl">{name}</h3>
          <h4 className="text-gray-3">{profession}</h4>
        </div>
        <p className="lg:text-xl text-base lg:text-gray-3 line-clamp-6 md:line-clamp-[8] xl:line-clamp-[10] text-white opacity-80 lg:opacity-100 font-light max-w-[700px]">
          {description}
        </p>
        <Image
          src="/wheat.png"
          alt="wheat"
          width={300}
          height={300}
          className="absolute bottom-0 right-0 xl:block hidden"
        />
      </div>
    </div>
  );
};

export default BakerCard;
