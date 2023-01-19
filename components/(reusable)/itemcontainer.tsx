"use client";

import { SlBasket } from "react-icons/sl";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  image: string;
  name: string;
  price: string;
  id: string;
};

const ItemContainer = ({ image, name, price, id }: Props) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${id}`)}
      className="relative flex flex-col hover:scale-110 transition-all hover:bg-orange-100
       hover:border-0 hover:shadow-md duration-300 cursor-pointer p-4
        md:max-w-[20rem] w-full border rounded-xl bg-transparent"
    >
      <div className="flex flex-col gap-4">
        <img src={image!} alt={name} className="max-w-full shadow-md" />
        <h2 className="font-light text-lg">{name}</h2>
      </div>
      <div className="m-4">
        <div className="flex justify-end gap-4 items-center absolute bottom-0 right-0">
          <p>{price}</p>
          <Link href="#" className="rounded-full hover:bg-black/10 p-2">
            <SlBasket className="cursor-pointer" size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemContainer;
