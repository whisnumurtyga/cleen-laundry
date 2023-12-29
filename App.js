import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signin, Signup, Welcome, Home } from "./screens";
import { NativeBaseProvider, Box } from "native-base";

import Detailplace from "./screens/detailplace";
import CartScreen from "./screens/CartScreen";
import Schedule from "./screens/Schedule";
import OrderSuccessScreen from "./screens/OrderSuccess";
import OrderScreen from "./screens/Order";
import DriverScreen from "./screens/DriverScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DetailPlace"
            component={Detailplace}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Schedule"
            component={Schedule}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OrderSuccess"
            component={OrderSuccessScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Order"
            component={OrderScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DriverScreen"
            component={DriverScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
