import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProcessScreen from './ScreenProcess'; // Import komponen ProcessScreen dari lokasi yang sesuai
import DoneScreen from './DoneScreen'; // Import komponen DoneScreen dari lokasi yang sesuai

const Tab = createMaterialTopTabNavigator();

function OrderScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#F5FFFA' },
      }}
    >
      <Tab.Screen
        name="Process"
        component={ProcessScreen}
        options={{ tabBarLabel: 'Process' }}
      />
      <Tab.Screen
        name="Done"
        component={DoneScreen}
        options={{ tabBarLabel: 'Done' }}
      />
    </Tab.Navigator>
  );
}

export default OrderScreen;
