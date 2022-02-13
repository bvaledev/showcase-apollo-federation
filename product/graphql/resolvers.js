export const productResolver = {
  Query: {
    listProducts: (_, __, { dataSources }) => {
      return dataSources.product.listProduct();
    },
    detailProduct: (_, { productId }, { dataSources }) => {
      return dataSources.product.findProductById(productId);
    },
  },
  Product: {
    categories: (parent, _, { dataSources }) => {
      return dataSources.product.resolveCategory(parent);
    },
  },
};
