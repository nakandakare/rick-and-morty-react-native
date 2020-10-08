import React from "react";
import Introduction from "./screens/Introduction/Introduction";
import Home from "./screens/Home/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RootStackParamList from "./RootStackParamList";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import { offsetLimitPagination, concatPagination, relayStylePagination } from "@apollo/client/utilities";

export default function App() {

  const link = new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql'
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Introduction">
          <Stack.Screen
            name="Introduction"
            component={Introduction}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CharacterDetail"
            component={CharacterDetail}
            options={{ title: "Character Detail" }}
          />
          <Stack.Screen
            name="ItemDetail"
            component={ItemDetail}
            options={{ title: "Detail" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
