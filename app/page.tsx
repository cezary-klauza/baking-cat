import AboutUsCard from "@/components/AboutUsCard";
import HeroSection from "@/components/HeroSection";
import ProductsExamplesSection from "@/components/ProductsExamplesSection";
import { Button } from "@/components/ui/button";
import { MapPin, X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="w-full bg-white rounded-3xl drop-shadow-sm md:drop-shadow-lg relative">
        <ProductsExamplesSection />
        <AboutUsCard />
      </div>

      <section className="w-full flex justify-center items-center relative py-12 overflow-hidden">
        <div className="relative w-1/2 max-lg:absolute max-lg:w-4/5  max-lg:bottom-0  max-lg:right-0 max-lg:opacity-40">
          <div className="absolute hidden lg:block bg-black-1 rounded-3xl w-64 text-white gap-4 p-4  min-[1400px]:top-40 min-[1400px]:left-28 top-20 left-6">
            <div>
              <h4 className="font-bold text-2xl">Location:</h4>
              <p className="font-light text-xl -mt-2 text-gray-3">Berlin</p>
            </div>
            <div>
              <h4 className="font-bold text-2xl">Distance:</h4>
              <p className="font-light text-xl -mt-2 text-gray-3">18,34 Km</p>
            </div>
            <X size={20} className="absolute top-3 right-3" />
          </div>
          <Image
            src="/map.png"
            alt="map"
            width={1000}
            height={1000}
            className="z-0"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col gap-2 z-10">
          <h2 className="font-semibold text-5xl md:text-7xl text-black-1">
            Closed <span className="text-green-1">Location</span> From{" "}
            <span className="text-blue-3">You</span>!
          </h2>

          <p className="text-gray-3 text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nunc felis, consectetur in felis non, posuere accumsan purus.
          </p>

          <Button
            size="xl"
            className="my-4 bg-green-1 hover:bg-green-2 text-lg"
          >
            <MapPin size={25} />
            &nbsp; Check Localization
          </Button>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center bg-black-1 text-white rounded-3xl lg:px-20 p-12 py-16 xl:py-36 lg:gap-8 gap-24">
        <div className="lg:w-1/2 flex flex-col gap-2">
          <h2 className="font-bold text-5xl max-sm:text-4xl">
            Be With Us <span className="text-gray-1">Everywhere</span> With Our{" "}
            <span className="text-red-1">Mobile App</span>!
          </h2>
          <p className="mb-4 text-gray-3 font-light text-lg max-sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            reprehenderit, ducimus vitae dolorum libero earum non!
          </p>
          <Button size="xl" className="bg-red-1 hover:bg-red-3 text-lg">
            <Image
              src="/android.svg"
              alt="android icon"
              width={25}
              height={25}
              className="invert"
            />
            &nbsp; Android Version
          </Button>
          <Button size="xl" className="bg-gray-1 hover:bg-gray-2 text-lg">
            <Image
              src="/ios.svg"
              alt="ios icon"
              width={25}
              height={25}
              className="invert"
            />
            &nbsp; Download Now
          </Button>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/mobile-app.svg"
            alt="mobile app"
            width={900}
            height={900}
          />
        </div>
      </section>
    </main>
  );
}
