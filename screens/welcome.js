import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';
import { FilledButton } from '../components';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	withRepeat,
	withSequence
} from 'react-native-reanimated';

const Welcome = () => {
	const initialOffsetText = StyleSheet.flatten(styles.leenTitle).transform[0].translateX;
	const initialOffsetImage = StyleSheet.flatten(styles.logoImage).transform[0].translateX;
	
	const offsetText = useSharedValue(initialOffsetText);
	const offsetImage = useSharedValue(initialOffsetImage);
	
	const animatedStylesText = useAnimatedStyle(() => ({
	  transform: [{ translateX: offsetText.value }],
	}));
  
	const animatedStylesImage = useAnimatedStyle(() => ({
	  transform: [{ translateX: offsetImage.value }], // Menggunakan nilai negatif agar bergerak ke arah yang berlawanan
	}));
  
	React.useEffect(() => {
	  offsetText.value = withSequence(
		withTiming(initialOffsetText + 200, { duration: 1500 }), // Gerakan teks ke kiri sejauh 200 satuan
		withTiming(initialOffsetText, { duration: 1500 })        // Kembali ke posisi awal teks
	  );
  
	  offsetImage.value = withSequence(
		withTiming(initialOffsetImage - 200, { duration: 1500 }), // Gerakan gambar ke kanan sejauh 200 satuan
		withTiming(initialOffsetImage, { duration: 1500 })        // Kembali ke posisi awal gambar
	  );
	}, []);
  
  

	return (
		<View style={styles.bg}>
		<Animated.Text style={[styles.leenTitle, animatedStylesText]}>
			leen
		</Animated.Text>
		<Animated.Image
			source={require('../assets/splash/logo.png')}
			style={[styles.logoImage, animatedStylesImage]}
		/>
		<View style={styles.centeredContainer}>
			<Text style={styles.presentedBy}>presented by</Text>
			<Text style={styles.kelompok}>Kelompok 6</Text>
		</View>
		{/* <FilledButton
			title="Press me"
			textColor="#ffffff"
			buttonColor="#2E6B60"
			borderColor="#2E6B60"
		/> */}
		</View>
	);
};

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
    left: 90,
    top: 187,
    width: 82,
    height: 82,
    resizeMode: 'contain',
	transform: [{ translateX: 0 }],
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 260,
  },
  presentedBy: {
    fontSize: 12,
    textAlign: 'center',
    color: COLORS.white,
  },
  kelompok: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.white,
  },
});

export default Welcome;
