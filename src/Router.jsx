import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Todo from "./screens/Todo";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="todo" component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
