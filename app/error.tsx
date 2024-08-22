"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <Image src="/error.png" alt="sad cupcake" width="300" height="300" />
      <div className="text-center">
        <h2 className="font-bold text-5xl">Something went wrong!</h2>
        <p className="font-light text-xl">{error.message}</p>
      </div>
      <Button size="xl" className="bg-red-2 hover:bg-red-1" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
