import {gql} from 'apollo-server'

export const categorySchema = gql`
    type Query {
        listCategories: [Category!]!
    }
    type Category @key(fields: "id"){
        id: ID!
        name: String!
    }
`