import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogScreen from "../screens/BlogScreen";
import Home from "../screens/Home";

export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Home",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#f0f3f5" },
        }}
      />
      <Stack.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          headerTitle: "BlogScreen",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#f0f3f5" },
        }}
      />
    </Stack.Navigator>
  );
}
