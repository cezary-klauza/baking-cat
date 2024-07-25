"use client";

import { useState } from "react";
import TypeCard from "./TypeCard";
import ProductCard from "./ProductCard";

type ProductType = "cakes" | "cookies" | "bread" | undefined;

const ProductsExamplesSection = () => {
  const [productType, setProductType] = useState<ProductType>();

  return (
    <section className="w-full md:p-16   text-center flex flex-col gap-6">
      <h2 className="font-bold xl:text-6xl md:text-4xl text-4xl max-sm:text-2xl tracking-tighter text-black-1">
        Everything What You Like
      </h2>
      <p className="text-xl max-lg:text-base max-sm:text-sm md:max-w-[850px] m-auto text-gray-3 font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis
        magna ultrices, dictum sapien a, dapibus libero. Mauris pellentesque
        mollis
      </p>

      <div className="w-full max-w-[800px] m-auto flex gap-2 md:gap-6 justify-center items-center">
        <TypeCard
          img="/cake-type.svg"
          imgAlt="cake"
          title="Cakes"
          isActive={productType === "cakes"}
          onClick={() => setProductType("cakes")}
        />
        <TypeCard
          img="/cookie-type.svg"
          imgAlt="cookie"
          title="Cookies"
          isActive={productType === "cookies"}
          onClick={() => setProductType("cookies")}
        />
        <TypeCard
          img="/bread-type.svg"
          imgAlt="bread"
          title="Bread"
          isActive={productType === "bread"}
          onClick={() => setProductType("bread")}
        />
      </div>

      <div className="w-full max-w-[800px] m-auto grid grid-cols-3 gap-6 my-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsExamplesSection;
