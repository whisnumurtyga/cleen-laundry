import React, {useState} from 'react';
import { TextInput, StyleSheet, View, Text, Image } from 'react-native';

const InputA = ({ iconSource, placeholder, isPassword = false, keyBoardType = 'default', onChangeText}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
return (
    <View style={styles.centeredContainer}>
        <View style={styles.box}>
            <View style={styles.group}>
                <View style={[styles.overlapGroup, isFocused ? styles.focused : null,]}>
                    <View style={[styles.rectangle, isFocused ? styles.focusedRectangle : null]} />
                    <Image
                    source={iconSource}
                    // source={require('../assets/icon/full-name.png')}
                    style={styles.image}
                    />
                    {/* <Text style={styles.textWrapper}>Full name</Text> */}
                    <TextInput
                        style={styles.textInput}
                        // placeholder="Full name"
                        placeholder={placeholder}
                        // ...props lainnya yang ingin kamu tambahkan
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        secureTextEntry={isPassword}
                        keyboardType={keyBoardType}
                        onChangeText={onChangeText} // Gunakan prop onChangeText yang diteruskan
                    />
                </View>
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    centeredContainer: {
        flex: 1,
		// justifyContent: 'center',
		alignItems: 'center',

    },
    input: {
        width: 316,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2E6B60',
        opacity: 0.2,
        backgroundColor: 'rgba(46, 107, 96, 0.20)',
        // Gaya lainnya
    },
    box: {
        height: 40,
        width: 316,
        // Other styles for your box if needed
    },
    group: {
        height: 40,
        position: 'relative',
        width: 318,
    },
    overlapGroup: {
        borderRadius: 5,
        height: 42,
        position: 'relative',
    },
    rectangle: {
        backgroundColor: '#2e6b6033',
        borderColor: '#2E6B60', // Assuming the color variable is this shade of green
        borderWidth: 1,
        borderRadius: 5,
        height: 42,
        opacity: 0.2,
        position: 'absolute',
        width: 318,
    },
    image: {
        height: 24,
        width: 22,
        position: 'absolute',
        top: 8,
        left: 7,
        resizeMode: 'cover',
    },
    textWrapper: {
        color: '#2E6B60', // Assuming the color variable is this shade of green
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        fontWeight: '500',
        height: 40,
        position: 'absolute',
        top: 13,
        left: 38,
        width: 136,
    },
    textInput: {
        // Styles for textInput
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        height: 40,
        left: 30,
        flex: 1,
        // Other styles as needed
    },
    focusedRectangle: {
        // borderColor: '#2E6B60', // Ganti dengan warna yang kamu inginkan saat input dalam fokus
        opacity: 0.5
    },
});

export default InputA;
