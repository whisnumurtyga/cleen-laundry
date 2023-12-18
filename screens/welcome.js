import React from 'react';
import { View, Text, Pressable, Image } from 'react-native'
import COLORS from '../constants/colors';
import { FilledButton} from '../components';


const Welcome = () => {

  return (
    <View style={{ backgroundColor: '#2E6B60', flex: 1 }}>
      <Text>Hello, Montserrat Font!</Text>
      {/* <FilledButton
        title="Press me"
        textColor="#ffffff"
        buttonColor="#2E6B60"
        borderColor="#2E6B60" 
      /> */}
    </View>
  
  );
};

export default Welcome;

