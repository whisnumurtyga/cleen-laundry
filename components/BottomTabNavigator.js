// BottomTabNavigator.js
import React from "react";
import { Home, ChatScreen, OrderScreen } from "../screens";


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="OrderScreen" component={OrderScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
