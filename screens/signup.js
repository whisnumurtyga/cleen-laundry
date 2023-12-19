import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';


const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.bg}>
            <Text style={[styles.leenTitle]}>
				leen
			</Text>
			<Image
				source={require('../assets/splash/logo.png')}
				style={[styles.logoImage]}
			/>
			<View style={styles.centeredContainer}>
				<Text style={styles.whiteText}>Click for Clean</Text>
			</View>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: COLORS.primary,
        flex: 1,
    },
    leenTitle: {
		top: 290,
		left: 180,
		color: COLORS.white,
		fontSize: 80,
		transform: [{ translateX: 0 }],
	},
	logoImage: {
		left: 96,
		top: 187,
		width: 82,
		height: 82,
		resizeMode: 'contain',
		transform: [{ translateX: 0 }],
	},
})

export default Signup