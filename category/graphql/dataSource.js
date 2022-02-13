let categories = [
  {
    id: 1,
    name: "Diversão",
  },
  {
    id: 2,
    name: "Casa",
  },
];

function listCategories() {
  return categories;
}

function findCategoryById(categoryId) {
  return categories.find((category) => category.id === parseInt(categoryId));
}

export const categoryDataSource = {
  listCategories,
  findCategoryById,
};
