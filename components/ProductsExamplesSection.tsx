"use client";

import { useEffect, useState } from "react";
import TypeCard from "./TypeCard";
import ProductCard from "./ProductCard";
import { Category, Product } from "@/types";
import { getProducts } from "@/fetch";
import Loader from "./Loader";
import { FetchProductsError } from "@/exceptions";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

const ProductsExamplesSection = () => {
  const [productType, setProductType] = useState<Category | undefined>();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);

  if (error) {
    setError(false);
    throw new FetchProductsError();
  }
  useEffect(() => {
    async function catchProducts() {
      try {
        const data: Product[] = await getProducts(
          undefined,
          undefined,
          productType !== undefined ? [productType] : undefined
        );
        setProducts(await data);
      } catch (error) {
        setError(true);
        console.log("work");
      }
    }
    catchProducts();
  }, [productType]);

  const handleType = (type: Category) => {
    setProductType(productType === type ? undefined : type);
  };

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
          onClick={() => handleType("cakes")}
        />
        <TypeCard
          img="/cookie-type.svg"
          imgAlt="cookie"
          title="Cookies"
          isActive={productType === "cookies"}
          onClick={() => handleType("cookies")}
        />
        <TypeCard
          img="/bread-type.svg"
          imgAlt="bread"
          title="Bread"
          isActive={productType === "bread"}
          onClick={() => handleType("bread")}
        />
      </div>
      {products.length === 0 ? (
        <Loader />
      ) : (
        <div className="w-full max-w-[800px] m-auto grid grid-cols-3  gap-6 my-8">
          {products.map(({ _id, name, price, image }) => (
            <ProductCard
              name={name}
              id={_id}
              price={price}
              img={image}
              altImg={name}
              key={_id}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsExamplesSection;
