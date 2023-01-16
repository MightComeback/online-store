type Props = {
  params: { productid: string };
};

const ProductPage = ({ params: { productid } }: Props) => {
  return (
    <div>
      <p>{productid}</p>
    </div>
  );
};

export default ProductPage;
