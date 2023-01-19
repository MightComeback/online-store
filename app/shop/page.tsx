import { Products } from "../../assets/products";
import ItemContainer from "../../components/(reusable)/itemcontainer";
import client from "../../prisma/prisma";

const page = async () => {
  const products = await Products();

  return (
    <section className="w-full">
      <div className="center p-12 flex justify-evenly lg:justify-center flex-wrap gap-3 lg:gap-6">
        {products.map((product) => (
          <ItemContainer
            key={product.name}
            image={product.image}
            name={product.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
