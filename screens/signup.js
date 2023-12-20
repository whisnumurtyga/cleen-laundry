import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { LogoWide, InputA } from '../components';


const { height: screenHeight } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');
const heightPercentage = 0.8; // 80% dari tinggi layar

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={[styles.bg]}>
			<LogoWide></LogoWide>
			<View style={styles.centeredContainer}>
				<Text style={styles.subTitle}>Click for Clean</Text>
			</View>
			<View style={[styles.rectangle]}>
				<View style={styles.inputGroup}>
					<InputA 
						iconSource={require('../assets/icon/full-name.png')}
						placeholder='Full Name'
					/>
				</View>
			</View>
			<View>
			</View>
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
	inputGroup: {
		top: 100
	},	
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

    },
	rectangle: {
		width: screenWidth,
		height: screenHeight * heightPercentage,
		top: 20,
		borderTopLeftRadius: 23,
		borderTopRightRadius: 23,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: '#FFF',
		marginBottom: 0, // Adjust to properly stack above the main content
	}
})

export default Signup