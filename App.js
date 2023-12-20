import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreens } from "./screens/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreens"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeScreens" component={HomeScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
