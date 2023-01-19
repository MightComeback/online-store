import client from "../prisma/prisma";

export const Products = async () => {
  const products = await client.product.findMany();
  return products;
}