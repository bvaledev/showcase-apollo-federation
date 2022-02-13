import {mergeTypeDefs} from '@graphql-tools/merge'

import {startApolloServer} from './apollo-server.js'
import {categorySchema} from './graphql/schema.js'
import {categoryDataSource} from './graphql/dataSource.js'
import {categoryResolver} from './graphql/resolvers.js'

const typeDefs = mergeTypeDefs([categorySchema])
const resolvers = categoryResolver

const dataSources = {
    category: categoryDataSource
}

const buildApolloServer = startApolloServer(typeDefs, resolvers, dataSources)
buildApolloServer.then(() => console.log('App started'))