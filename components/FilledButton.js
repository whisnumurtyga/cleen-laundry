import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FilledButton = ({ textColor, buttonColor, borderColor, title }) => {
    const handleButtonPress = () => {
        console.log('Button Pressed');
        // Lakukan aksi lain yang diinginkan saat tombol ditekan di sini
    };

    return (
        <TouchableOpacity onPress={handleButtonPress}
        style={[
            styles.button,
            { backgroundColor: buttonColor, borderColor: borderColor },
        ]}
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
