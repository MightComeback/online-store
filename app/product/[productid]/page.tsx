import { Products } from "../../../assets/products";
import Image from "next/image";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";

interface Props {
  params: {
    productid: string;
  };
}

const ProductPage = async ({ params }: Props) => {
  const products = await Products();
  const product = products.find((prod) => prod.id === params.productid);

  return (
    <section>
      <div className="center flex flex-col lg:flex-row gap-6 p-4">
        <div className="mx-auto">
          <Image
            className="md:w-1/2 lg:w-auto"
            src={product?.image!}
            alt={product?.name!}
            width={1000}
            height={400}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1>{product?.name}</h1>
          <p>{product?.description}</p>
          <div className="flex gap-4 items-center">
            <span>{product?.price}</span>
            <Link href="#" className="rounded-full hover:bg-black/10 p-2">
              <SlBasket className="cursor-pointer" size={25} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
