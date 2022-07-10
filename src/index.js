import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { AppSharedContextProvider } from './AppSharedContext';
import {ApolloClient, ApolloProvider,HttpLink, InMemoryCache, split} from '@apollo/client'
import {getMainDefinition} from '@apollo/client/utilities'
import {WebSocketLink} from '@apollo/client/link/ws'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000'
})
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true
  }
})

const splitLink = split(
  ({query}) => {
    const definition = getMainDefinition(query)
    return(
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <AppSharedContextProvider>
      <Router>
        <App />
      </Router>
    </AppSharedContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
