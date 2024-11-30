import {ApolloClient,InMemoryCache,HttpLink,from} from '@apollo/client';
import {onError} from "@apollo/client/link/error";

const errorLink=onError(({graphqlErrors}:any)=>{
    if(graphqlErrors){
        graphqlErrors.map(({message,location,path}:any)=>{
            console.log("GraphQL error",message,location,path)
        })
    }
})
const link=from([errorLink,new HttpLink({uri:process.env.GRAPHQL_PROTOCOL_URL})]);
const client=new ApolloClient({
    cache:new InMemoryCache(),
    link:link
})

export default client;