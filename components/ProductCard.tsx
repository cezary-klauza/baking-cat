import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-full rounded-3xl overflow-hidden border-[#f5f5f5] border-[1px] shadow-md cursor-pointer group">
      <div className="w-full h-32 sm:h-44 lg:h-64 overflow-hidden flex justify-center items-center relative">
        <Image
          src="/tort.jpg"
          alt="tort"
          fill={true}
          className="group-hover:scale-105 transition-all duration-300 object-cover"
        />
      </div>
      <div className="flex flex-col py-1 lg:py-3">
        <h3 className="font-semibold text-lg lg:text-2xl">Donut Cake</h3>
        <p className="font-light text-md lg:text-xl -mt-2 text-gray-400">15$</p>
      </div>
    </div>
  );
};

export default ProductCard;
