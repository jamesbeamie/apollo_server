const { ApolloServer, gql } = require('apollo-server');

const dresses = [
    {
        size: 'large',
        color: 'grey'
    },
    {
        size: 'medium',
        color: 'cyan'
    }
];
"Define a type in here. It defines the fields a dress has"
const typeDefs = gql`
    type Dresses {
        """
            This defines how a dress looks like
        """
        size: String!
        color: String!
    }

    type Query {
        getDresses: [Dresses]!
    }
`;


// Resolvers define the technique for fetching the types in the Schema
const resolvers = {
    Query: {
        getDresses: () => dresses,
    },
};

const server = new ApolloServer({typeDefs, resolvers});


server.listen()
.then(({ url }) => {
    console.log(`server running at ${url}`);
})
.catch((err) =>{
    throw err;
});