import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: 'https://mainnet.infura.io/v3/b6d29dd298f94fc485627ad54eac8d78',
});

const wsClient = new SubscriptionClient(
  'wss://mainnet.infura.io/ws/v3/b6d29dd298f94fc485627ad54eac8d78',
  {
    reconnect: true,
  },
  createClient
);

const wsLink = new WebSocketLink(wsClient);

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
