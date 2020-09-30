import React from "react";
import Introduction from "./screens/Introduction/Introduction";
import Home from "./screens/Home/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RootStackParamList from './RootStackParamList';
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import ItemDetail from "./components/ItemDetail/ItemDetail";

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Introduction">
          <Stack.Screen name="Introduction" component={Introduction} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="CharacterDetail" component={CharacterDetail} options={{ title: 'Character Detail' }} />
          <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ title: 'Detail' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
