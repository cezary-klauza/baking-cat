import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  id: string;
  price: number;
  img: string;
  altImg: string;
};

const ProductCard = ({ name, id, price, img, altImg }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${id}`}
      className="w-full rounded-3xl overflow-hidden border-input border shadow-sm cursor-pointer group"
    >
      <div className="w-full h-44 sm:h-44 lg:h-64 overflow-hidden flex justify-center items-center relative">
        <Image
          src={img}
          alt={altImg}
          fill={true}
          className="group-hover:scale-105 transition-all duration-300 object-cover"
        />
      </div>
      <div className="flex flex-col py-1 lg:py-3 px-4 lg:px-6 border-t border-input text-center">
        <h3 className="font-semibold text-lg lg:text-xl line-clamp-1">
          {name}
        </h3>
        <p className="font-light text-base lg:text-lg -mt-2 text-gray-400">
          {price}$
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
