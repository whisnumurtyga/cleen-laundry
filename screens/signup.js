import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { LogoWide } from '../components';



const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.bg}>
			<LogoWide></LogoWide>
            {/* <Text style={[styles.leenTitle]}>
				leen
			</Text>
			<Image
				source={require('../assets/splash/logo.png')}
				style={[styles.logoImage]}
			/>
			<View style={styles.centeredContainer}>
				<Text style={styles.subTitle}>Click for Clean</Text>
			</View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: COLORS.primary,
        flex: 1,
    },
    leenTitle: {
		top: 80,
		left: 180,
		color: COLORS.white,
		fontSize: 80,
		transform: [{ translateX: 0 }],
	},
	logoImage: {
		left: 96,
		top: -23,
		width: 82,
		height: 82,
		resizeMode: 'contain',
		transform: [{ translateX: 0 }],
	},
    subTitle: {
		color: COLORS.white,
		fontSize: 20
	},
    centeredContainer: {
        flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
        top: -350
    }
})

export default Signup