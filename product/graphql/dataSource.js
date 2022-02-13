let products = [
  {
    id: 1,
    name: "Caneca Ricky and Morty",
    description: "Any description for product",
    price: 4500,
    stock: 10,
    catagories: [1, 2],
    image:
      "https://http2.mlstatic.com/D_NQ_NP_866854-MLB48593432303_122021-O.webp",
  },
  {
    id: 2,
    name: "Ventilador",
    description: "Any description for product",
    price: 31340,
    stock: 32,
    catagories: [2],
    image:
      "https://polishop.vtexassets.com/arquivos/ids/636290-1200-auto?v=637012396836100000&width=1200&height=auto&aspect=true",
  },
];

function listProduct() {
  return products;
}

function findProductById(ProductId) {
  return products.find(({ id }) => id === parseInt(ProductId));
}

function resolveCategory(product) {
  return product.catagories.map((categoryId) => {
    return {
      __typename: "Category",
      id: categoryId,
    };
  });
}

export const productDataSource = {
  listProduct,
  findProductById,
  resolveCategory,
};
