import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

function getClient<Value> (
    url: string) {
    const link = new HttpLink({uri: url});
    return new ApolloClient({
        link: link,
        cache: new InMemoryCache()
    });

  }

export default getClient;
  