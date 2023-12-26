import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const showToast = (message) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

const FilledButton = ({ textColor, buttonColor, borderColor, title, onPress }) => {
  const handleButtonPress = () => {
    onPress(); // Memanggil fungsi yang diterima sebagai prop onPress
  };

    return (
        <TouchableOpacity 
          style={[
              styles.button,
              { backgroundColor: buttonColor, borderColor: borderColor },
          ]}
          onPress = {handleButtonPress}
        >
        <Text style={{ color: textColor }}>{title}</Text>
        </TouchableOpacity>
    );
};
  
FilledButton.defaultProps = {
  textColor: '#ffffff', // default font color
  buttonColor: '#2E6B60', // default button color
  borderColor: '#2E6B60', // default border color
};

const styles = StyleSheet.create({
  button: {
    width: 317,
    height: 40,
    flexShrink: 0,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default FilledButton;
