export const categoryResolver = {
  Query: {
    listCategories: (parent, args, { dataSources }, info) =>
      dataSources.category.listCategories(),
  },
  Category: {
    __resolveReference: ({ id }, { dataSources }) =>
      dataSources.category.findCategoryById(id),
  },
};
