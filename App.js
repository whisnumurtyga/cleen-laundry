// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from './Screens/CartScreen';
import { StatusBar, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import ProfileScreen from './Screens/ProfileScreen';
import ChatScreen from './Screens/ChatScreen'
import DriverScreen from './Screens/DriverScreen'

const Stack = createStackNavigator();

const App = () => {
  const headerStyle = {
    headerTitleStyle: { color: 'black' },
    headerTintColor: 'black',
    headerTitleAlign: 'center', // Center the title
  };

  const renderBackButton = ({ navigation }) => (
    <TouchableOpacity
      style={{ paddingLeft: 10 }}
      onPress={() => navigation.goBack()}
    >
      {/* Replace "Back" text with your image */}
      <Image source={require('./images/back.png')} style={styles.backImage} />
    </TouchableOpacity>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={({ navigation }) => ({
            title: 'Cart',
            ...headerStyle,
            headerLeft: () => renderBackButton({ navigation }),
          })}
        />
        {/* Add other screens here */}
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'Profile Setting',
            ...headerStyle,
          }}
        />

        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            headerTitle: () => (
              <View style={styles.header}>
                <Image
                  source={require('./images/Laundry.png')}
                  style={styles.profileImage}
                />
                <Text style={styles.userName}>Time Laundry</Text>
              </View>
            ),
            ...headerStyle,
          }}
        />

        <Stack.Screen
          name="DriverScreen"
          component={DriverScreen}
          options={{
            title: 'Courier',
            ...headerStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backImage: {
    width: 20, // Adjust the width as needed
    height: 20, // Adjust the height as needed
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default App;
