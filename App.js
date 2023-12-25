import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signin, Signup, Welcome, Home, Maps } from "./screens";
import { NativeBaseProvider, Box } from "native-base";
// import { ToastProvider } from '@react-native-toast-message';

// import GlobalFont from 'react-native-global-font';

const Stack = createNativeStackNavigator();

export default function App() {
  // GlobalFont.applyGlobal('Montserrat-Regular');

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
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
