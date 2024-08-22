import React from "react";
import { Skeleton } from "./ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-[2fr_3fr] xl:flex-row rounded-3xl overflow-hidden my-6 lg:my-12">
      <div>
        <Skeleton className="w-full h-[500px]" />
      </div>
      <div className="max-xl:p-6 px-6 flex flex-col gap-4 lg:gap-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-full h-[50px]" />
          <div className="flex gap-2">
            <Skeleton className="w-[150px] h-[40px]" />
            <Skeleton className="w-[150px] h-[40px]" />
          </div>
        </div>
        <Skeleton className="w-[200px] h-[50px]" />
        <Skeleton className="w-full h-[100px]" />
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
