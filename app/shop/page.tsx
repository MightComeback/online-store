import { Products } from "../../assets/products";
import ItemContainer from "../../components/(reusable)/itemcontainer";

const page = () => {
  const productsArray = Products;

  return (
    <section className="w-full overflow-hidden">
      <div className="center p-12 flex justify-evenly lg:justify-center flex-wrap gap-6">
        {productsArray.map((product) => (
          <ItemContainer
            key={product.name}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
