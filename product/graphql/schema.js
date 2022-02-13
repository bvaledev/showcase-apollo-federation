import { gql } from "apollo-server";

export const productSchema = gql`
  type Query {
    listProducts: [Product]
    detailProduct(productId: ID!): Product
  }

  type Product @key(fields: "id") {
    id: ID!
    name: String!
    description: String
    price: Int!
    stock: Int!
    image: String!
    categories: [Category]
  }

  extend type Category @key(fields: "id") {
    id: ID! @external
  }
`;
