"use client";

import CheckBox from "@/components/CheckBox";
import ProductCard from "@/components/ProductCard";
import Property from "@/components/Property";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";

type Types = "cakes" | "cookies" | "bread";

const Products = () => {
  const [types, setTypes] = useState<Types[]>([]);
  const maxPrice = 100;
  const [price, setPrice] = useState<number>(maxPrice);

  const checkboxHandler = (isChecked: boolean, value: Types) => {
    const newTypes = types;
    if (isChecked) {
      newTypes.push(value);
    } else {
      const index = types.indexOf(value);
      newTypes.concat(types.splice(index, 1));
    }
    setTypes(newTypes);
  };

  return (
    <main>
      <section className="w-full py-28  rounded-3xl lg:rounded-[150px] bg-products-hero bg-cover bg-right shadow-sm relative">
        <div className="max-w-[650px] mx-auto xl:mx-0 p-6 md:p-12 text-white flex flex-col gap-4 relative z-20">
          <div>
            <h1 className="font-semibold text-4xl lg:text-6xl">
              Find Your Favorite Cakes
            </h1>
            <p className="text-xl text-white opacity-80">
              Increase your taste sensations with our cakes! Best deserts in all
              Europe!
            </p>
          </div>
          <Button size="xl" className="bg-orange-3 hover:bg-red-3">
            Check Now!
          </Button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full rounded-3xl lg:rounded-[150px] opacity-50 z-0 bg-black-1 block xl:hidden" />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 my-12">
        <div className="w-full h-80 bg-gray-4 p-10 rounded-3xl border-input border hidden lg:block">
          <Property title="Types">
            <CheckBox name="cakes" title="Cakes" onChange={checkboxHandler} />
            <CheckBox name="bread" title="Bread" onChange={checkboxHandler} />
            <CheckBox
              name="cookies"
              title="Cookies"
              onChange={checkboxHandler}
            />
          </Property>
          <Property title="Price">
            <p className="text-black-1 uppercase tracking-widest text-sm">
              Max Price: {price}$
            </p>
            <Slider
              min={0}
              defaultValue={[maxPrice]}
              max={maxPrice}
              onValueChange={(value) => setPrice(value[0])}
            />
          </Property>
        </div>
        <div>
          <div className="flex gap-2 justify-between relative">
            <Input
              placeholder="Search"
              className="w-full pl-8 rounded-3xl h-16 bg-gray-4 focus:border-gray-3"
            />
            <Popover>
              <PopoverTrigger className="flex lg:hidden items-center px-5 bg-gray-4 hover:bg-[#f0f0f0] rounded-3xl border border-input">
                <Settings color="#2c2c2c" />
              </PopoverTrigger>
              <PopoverContent className="p-6">
                <Property title="Types">
                  <CheckBox
                    name="cakes"
                    title="Cakes"
                    onChange={checkboxHandler}
                  />
                  <CheckBox
                    name="bread"
                    title="Bread"
                    onChange={checkboxHandler}
                  />
                  <CheckBox
                    name="cookies"
                    title="Cookies"
                    onChange={checkboxHandler}
                  />
                </Property>
                <Property title="Price">
                  <p className="text-black-1 uppercase tracking-widest text-sm">
                    Max Price: {price}$
                  </p>
                  <Slider
                    min={0}
                    defaultValue={[maxPrice]}
                    max={maxPrice}
                    onValueChange={(value) => setPrice(value[0])}
                  />
                </Property>
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 my-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
