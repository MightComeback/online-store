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
      className="flex flex-col hover:scale-110 transition-all hover:bg-orange-100 hover:border-0 hover:shadow-md duration-300 cursor-pointer p-4 max-w-[12rem] w-full border rounded-xl bg-transparent"
    >
      <div className="flex flex-col gap-4">
        <img
          src={image!}
          alt={name}
          className="max-w-full max-h-[8rem] shadow-md"
        />
        <h3>{name}</h3>
      </div>
      <div className="flex justify-end gap-4 items-center">
        <p>{price}</p>
        <Link href="#" className="rounded-full hover:bg-black/10 p-2">
          <SlBasket className="cursor-pointer" size={25} />
        </Link>
      </div>
    </div>
  );
};

export default ItemContainer;
