import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <Image src="/error.png" alt="sad cupcake" width="300" height="300" />
      <div className="text-center">
        <h2 className="font-bold text-5xl">Page not found!</h2>
      </div>
      <Link href="/">
        <Button size="xl" className="bg-red-2 hover:bg-red-1">
          Home Page
        </Button>
      </Link>
    </div>
  );
}
