/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { ApolloClient , HttpLink , InMemoryCache } from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

//StackNavigator
import AppNavigator from './navigation/AppNavigator'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = '7a72b863fdc9a43b9642117bbe4ed228be41edbe';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default function App() {
  return (
    <ApolloProvider client = { client }>
      <AppNavigator/>
    </ApolloProvider>
  );
}

