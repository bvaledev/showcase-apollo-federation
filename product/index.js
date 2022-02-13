import {mergeTypeDefs} from '@graphql-tools/merge'

import {startApolloServer} from './apollo-server.js'

import {productSchema} from './graphql/schema.js'
import {productDataSource} from './graphql/dataSource.js'
import {productResolver} from './graphql/resolvers.js'

const typeDefs = mergeTypeDefs([productSchema])
const resolvers = productResolver

const dataSources = {
    product: productDataSource
}

const buildApolloServer = startApolloServer(typeDefs, resolvers, dataSources)
buildApolloServer.then(() => console.log('App started'))