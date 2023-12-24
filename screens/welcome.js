import React, {useState, useEffect} from 'react';
import { View, Text, Pressable, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/colors';
import { FilledButton } from '../components';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	withRepeat,
	withSequence
} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Welcome = () => {
	
	const navigation = useNavigation();
	const [isLoading, setIsLoading] = useState(true);

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

	const checkSignInStatus = async () => {
		try {
			const userData = await AsyncStorage.getItem('users');
			console.log(userData)
			if (userData !== null) {
				const usersData = JSON.parse(userData);
				const signedInUser = usersData.find(user => user.isSignIn == true);
				console.log(signedInUser)
				if (signedInUser) {
					navigation.replace('Home', { userData: signedInUser.userData });
				} else {
					navigation.replace('Signup');
				}
			} else {
				navigation.replace('Signup');
			}
		} catch (error) {
			console.error('Error checking sign-in status:', error);
			navigation.replace('Signup');
		}
	};
  
	React.useEffect(() => {
		checkSignInStatus();

	  offsetText.value = withSequence(
		withTiming(initialOffsetText + 200, { duration: 1500 }), // Gerakan teks ke kiri sejauh 200 satuan
		withTiming(initialOffsetText, { duration: 1500 })        // Kembali ke posisi awal teks
	  );
  
	  offsetImage.value = withSequence(
		withTiming(initialOffsetImage - 200, { duration: 1500 }), // Gerakan gambar ke kanan sejauh 200 satuan
		withTiming(initialOffsetImage, { duration: 1500 })        // Kembali ke posisi awal gambar
	  );

		// Setelah animasi selesai, hentikan loading
		const animationDuration = 1500; // Sesuaikan dengan durasi animasi sebelumnya

		const animationTimeout = setTimeout(() => {
			setIsLoading(false);
		}, animationDuration * 2); // *2 karena dua animasi berjalan secara berurutan

		const timer = setTimeout(() => {
			navigation.navigate('Signup'); // Navigasi ke layar Signup setelah 2 detik
		}, 2500);
		
		return () => {
			clearTimeout(animationTimeout);
			clearTimeout(timer);
		};
	}, [navigation]);

	
  

	return (
	<View style={styles.bg}>
		<>
			<Animated.Text style={[styles.leenTitle, animatedStylesText]}>
				leen
			</Animated.Text>
			<Animated.Image
				source={require('../assets/splash/logo.png')}
				style={[styles.logoImage, animatedStylesImage]}
			/>
			<View style={styles.centeredContainer}>
				<Text style={styles.subTitle}>Click for Clean</Text>
			</View>
			<View style={styles.centeredContainer}>
				{isLoading && (
				<View style={styles.loadingBelowLogo}>
					<ActivityIndicator size={100} color={COLORS.white}  style={styles.loading}/>
				</View>
				)}
			</View>
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
		</>
		  {/* Indikator loading */}
	</View>
	);
};

const styles = StyleSheet.create({
	subTitle: {
		color: COLORS.white,
		fontSize: 20
	},
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
	centeredContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		top: 100,
	},
	presentedBy: {
		fontSize: 12,
		textAlign: 'center',
		color: COLORS.white,
		bottom: 50,
	},
	kelompok: {
		fontSize: 16,
		textAlign: 'center',
		color: COLORS.white,
		bottom: 50,
	},
	loading: {
		top: 10,
	}
});

export default Welcome;
