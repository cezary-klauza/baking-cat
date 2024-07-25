import BakerCard from "@/components/BakerCard";
import FAQCard from "@/components/FAQCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <main>
      <section className="xl:flex mt-8 justify-between gap-6 bg-black-1 rounded-3xl xl:rounded-[150px] overflow-hidden relative">
        <div className="text-white py-20 xl:py-40 px-6 xl:pl-24 xl:pr-12 text-center xl:text-left w-full xl:w-1/2 flex flex-col items-center xl:items-start gap-3 xl:gap-6 relative z-20">
          <h1 className="font-semibold xl:text-6xl text-3xl">
            Do You Want More About Us?
          </h1>
          <p className="xl:text-gray-3 text-white max-xl:opacity-70 text-lg">
            We are the best chain of bakeries in Europe! You can buy our cakes
            or let us bake your favorite deserts!
          </p>
          <Button size="xl" className="bg-orange-2 text-lg hover:bg-orange-1">
            Read More
          </Button>
        </div>
        <div className="xl:w-1/2 w-full absolue xl:relative opacity-40 xl:opacity-100 rounded-[150px] overflow-hidden z-0">
          <Image
            src="/about-us.jpg"
            alt="man styling cake"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-20 gap-6 lg:gap-12">
        <h2 className="font-semibold text-3xl lg:text-5xl">Our Best Bakers</h2>
        <BakerCard
          img="/baker-1.png"
          name="Giorgio Armani"
          profession="Bread Master"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis tempora error porro repellendus corrupti excepturi illum placeat, aspernatur deserunt. Inventore nihil repellat nostrum ea sunt mollitia consequuntur, quia hic? Placeat omnis, nisi qui deleniti id reprehenderit, enim non saepe maxime eum iure, perspiciatis reiciendis odit temporibus quidem a voluptatem sapiente quaerat inventore laboriosam repudiandae incidunt praesentium numquam. Cum, vel!"
        />
        <BakerCard
          img="/baker-2.png"
          name="Julia Bread"
          profession="Cookie Master"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis tempora error porro repellendus corrupti excepturi illum placeat, aspernatur deserunt. Inventore nihil repellat nostrum ea sunt mollitia consequuntur, quia hic? Placeat omnis, nisi qui deleniti id reprehenderit, enim non saepe maxime eum iure, perspiciatis reiciendis odit temporibus quidem a voluptatem sapiente quaerat inventore laboriosam repudiandae incidunt praesentium numquam. Cum, vel!"
        />
        <BakerCard
          img="/baker-3.png"
          name="Paulina Gżegżółka"
          profession="Cake Master"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis tempora error porro repellendus corrupti excepturi illum placeat, aspernatur deserunt. Inventore nihil repellat nostrum ea sunt mollitia consequuntur, quia hic? Placeat omnis, nisi qui deleniti id reprehenderit, enim non saepe maxime eum iure, perspiciatis reiciendis odit temporibus quidem a voluptatem sapiente quaerat inventore laboriosam repudiandae incidunt praesentium numquam. Cum, vel!"
        />
      </section>
      <section className="w-full my-24">
        <h2 className="mx-auto w-fit font-semibold text-5xl mb-12">FAQ</h2>
        <div className="w-full xl:w-3/5 mx-auto gap-12 grid grid-cols-1 lg:grid-cols-2">
          <FAQCard
            img="/question-mark.svg"
            alt="question mark"
            title="Can We Make Something For You?"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur modi laudantium natus esse praesentium adipisci magnam vel eius labore dignissimos."
          />
          <FAQCard
            img="/cake-about.svg"
            alt="question mark"
            title="Which Baked Goods You Do?"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur modi laudantium natus esse praesentium adipisci magnam vel eius labore dignissimos."
          />
          <FAQCard
            img="/location.svg"
            alt="question mark"
            title="Where you are located?"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur modi laudantium natus esse praesentium adipisci magnam vel eius labore dignissimos."
          />
          <FAQCard
            img="/delivery.svg"
            alt="question mark"
            title="Can I Order Cake With Delivery?"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur modi laudantium natus esse praesentium adipisci magnam vel eius labore dignissimos."
          />
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
