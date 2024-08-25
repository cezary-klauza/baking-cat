"use client";

import ProductSkeleton from "@/components/ProductSkeleton";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/fetch";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import { Dot, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<Product | undefined>();
  const [isNotFound, setIsNotFound] = useState(false);
  const [fullDescription, setFullDescription] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      const res = await getProduct(params.id);
      setData(res);
      if (res !== undefined) document.title = res.name;
      else setIsNotFound(true);
    }
    fetchProduct();
  }, []);

  useEffect(() => {
    if (isNotFound) notFound();
  }, [isNotFound]);

  if (data === undefined) {
    return <ProductSkeleton />;
  } else {
    return (
      <div className="w-full shadow-sm grid grid-cols-1 xl:grid-cols-[2fr_3fr] xl:flex-row rounded-3xl overflow-hidden my-6 lg:my-12">
        <div>
          <Image
            src={data.image}
            alt={data.name}
            width={500}
            height={500}
            className="w-full xl:h-full"
          />
        </div>
        <div className="max-xl:p-6 px-6 flex flex-col gap-4 lg:gap-4">
          <div>
            <h1 className="font-semibold text-black-1 capitalize text-4xl sm:text-5xl">
              {data.name}
            </h1>
            <div className="w-full flex gap-4">
              <div>
                <h3 className="uppercase font-semibold text-gray-3">Type</h3>
                <p className="text-black-1 capitalize">{data.category}</p>
              </div>
              {data.flavores.length > 0 ? (
                <div>
                  <h3 className="uppercase font-semibold text-gray-3">
                    Flavores
                  </h3>
                  <ul className="flex text-black-1">
                    {data.flavores.map((flavor) => (
                      <li key={flavor} className="group flex capitalize">
                        <Dot className="group-first:hidden" />
                        {flavor}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <p className="font-light text-2xl text-black-1">
            <strong className="font-semibold text-lg">Price:</strong>{" "}
            {data.price}$
          </p>
          <Button
            size="xl"
            className="bg-orange-2 hover:bg-orange-1 text-base flex gap-2"
          >
            <ShoppingCart color="white" size="24px" />
            Add To Cart
          </Button>
          <div className="text-black-1 w-full flex flex-col gap-2">
            <p className={fullDescription ? "" : "line-clamp-4"}>
              {data.description}
            </p>
            <p
              className={cn(
                "font-semibold text-lg cursor-pointer",
                fullDescription ? "hidden" : ""
              )}
              onClick={() => setFullDescription(true)}
            >
              See More...
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductPage;
