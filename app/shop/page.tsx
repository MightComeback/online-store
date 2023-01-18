import { Products } from "../../assets/products";
import ItemContainer from "../../components/(reusable)/itemcontainer";
import client from "../../prisma/prisma";

const page = async () => {
  const productsArray = Products;

  const products = client.product.findMany().then((prod) => console.log(prod));

  return (
    <section className="w-full overflow-hidden">
      <div className="center p-12 flex justify-evenly lg:justify-center flex-wrap gap-6">
        {productsArray.map((product) => (
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
