import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import COLORS from '../constants/colors';

const LogoWide = () => {
    return (
        <View>
			<View>
				<Text style={[styles.leenTitle]}>
					leen
				</Text>
				<Image
					source={require('../assets/splash/logo.png')}
					style={[styles.logoImage]}
				/>
			</View>
			<View style={styles.centeredContainer}>
				<Text style={styles.subTitle}>Click for Clean</Text>
			</View>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default LogoWide;
