"use client";

import CheckBox from "@/components/CheckBox";
import ProductCard from "@/components/ProductCard";
import Property from "@/components/Property";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Settings } from "lucide-react";
import { Category, Flavore, Product } from "@/types";
import Loader from "@/components/Loader";
import { getAmountOfProduct, getProducts } from "@/fetch";
import { FetchProductsError } from "@/exceptions";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [types, setTypes] = useState<Category[]>([]);
  const [flavores, setFlavores] = useState<Flavore[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [refreshCounter, setRefreshCounter] = useState(0);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  if (error) {
    setError(false);
    throw new FetchProductsError();
  }

  async function catchProducts() {
    setLoading(true);
    try {
      const amount: number = await getAmountOfProduct(
        types.length === 0 ? undefined : types,
        flavores.length === 0 ? undefined : flavores,
        search === "" ? undefined : search
      );

      const data: Product[] = await getProducts(
        page,
        12,
        types.length === 0 ? undefined : types,
        flavores.length === 0 ? undefined : flavores,
        search === "" ? undefined : search
      );

      setLastPage(Math.ceil((await amount) / 12));
      setProducts(await data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    setPage(1);
    catchProducts();
  }, [refreshCounter]);

  useEffect(() => {
    catchProducts();
  }, [page]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      catchProducts();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const checkboxHandler = (isChecked: boolean, value: Category | Flavore) => {
    if (value === "cookies" || value === "bread" || value === "cakes") {
      const newTypes = types;
      if (isChecked) {
        newTypes.push(value);
      } else {
        const index = types.indexOf(value);
        newTypes.concat(types.splice(index, 1));
      }
      setTypes(newTypes);
    } else {
      const newFlavores = flavores;
      if (isChecked) {
        newFlavores.push(value);
      } else {
        const index = flavores.indexOf(value);
        newFlavores.concat(flavores.splice(index, 1));
      }
      setFlavores(newFlavores);
    }
    setRefreshCounter(refreshCounter + 1);
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
        <div className="w-full h-fit bg-gray-4 p-10 rounded-3xl border-input border hidden lg:block">
          <Property title="Types">
            <CheckBox name="cakes" title="Cakes" onChange={checkboxHandler} />
            <CheckBox name="bread" title="Bread" onChange={checkboxHandler} />
            <CheckBox
              name="cookies"
              title="Cookies"
              onChange={checkboxHandler}
            />
          </Property>
          <Property title="Flavores">
            <CheckBox
              name="chocolate"
              title="Chocolate"
              onChange={checkboxHandler}
            />
            <CheckBox name="creamy" title="Creamy" onChange={checkboxHandler} />
            <CheckBox name="fruits" title="Fruits" onChange={checkboxHandler} />
            <CheckBox
              name="vanilia"
              title="Vanilia"
              onChange={checkboxHandler}
            />
          </Property>
        </div>
        <div>
          <div className="flex gap-2 justify-between relative">
            <Input
              placeholder="Search"
              onChange={(e) => setSearch(e.currentTarget.value)}
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
                <Property title="Flavores">
                  <CheckBox
                    name="chocolate"
                    title="Chocolate"
                    onChange={checkboxHandler}
                  />
                  <CheckBox
                    name="creamy"
                    title="Creamy"
                    onChange={checkboxHandler}
                  />
                  <CheckBox
                    name="fruits"
                    title="Fruits"
                    onChange={checkboxHandler}
                  />
                  <CheckBox
                    name="vanilia"
                    title="Vanilia"
                    onChange={checkboxHandler}
                  />
                </Property>
              </PopoverContent>
            </Popover>
          </div>

          {loading ? (
            <Loader />
          ) : products.length > 0 ? (
            <div>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 my-6">
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
              <Pagination>
                <PaginationContent>
                  {page > 1 ? (
                    <PaginationItem>
                      <PaginationPrevious onClick={() => setPage(page - 1)} />
                    </PaginationItem>
                  ) : (
                    ""
                  )}

                  <PaginationItem>
                    <PaginationLink className="hover:bg-white">
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                  {page < lastPage ? (
                    <PaginationItem>
                      <PaginationNext onClick={() => setPage(page + 1)} />
                    </PaginationItem>
                  ) : (
                    ""
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          ) : (
            <p className="text-lg text-black-1 font-light text-center mt-4">
              No products.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;
