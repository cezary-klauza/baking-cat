import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center flex-col lg:flex-row h-full py-12">
      <div className="flex flex-col gap-8">
        <h1 className="font-semibold text-black-1 md:text-8xl text-7xl max-sm:text-6xl tracking-tighter">
          The Sweetest <span className="text-blue-1">Cakes</span> Of Your{" "}
          <span className="text-red-1">Life</span>!
        </h1>
        <div className="flex flex-row gap-3">
          <Button className="text-xl bg-blue-1 hover:bg-blue-2" size="xl">
            Taste It
          </Button>
          <Button
            className="text-xl font-bold bg-transparent text-red-1 border-[3px] border-red-1 hover:bg-red-1 hover:text-white"
            size="xl"
          >
            Order Now
          </Button>
        </div>
      </div>
      <div className="lg:flex items-center justify-center hidden">
        <Image
          src="/hero-cake.png"
          alt="hero cake"
          width="1050"
          height="1880"
          className="drop-shadow-xl"
        />
      </div>

      <Image
        src="/gradient-1.png"
        alt="background gradient"
        width="1534"
        height="1897"
        className="absolute top-0 right-0 z-[-1]"
      />
      <Image
        src="/gradient-2.png"
        alt="background gradient"
        width="1275"
        height="1975"
        className="absolute top-[-25%] left-0 z-[-1]"
      />
    </section>
  );
};

export default HeroSection;
