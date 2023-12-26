import {
    View,
    Text,
    Image,
    Pressable,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ToastAndroid, 
} from 'react-native';
import React, {useState, useEffect} from 'react';
import COLORS from '../constants/colors';
import {LogoWide, InputA, FilledButton, ButtonUnderline} from '../components';

const {height: screenHeight} = Dimensions.get('window');
const {width: screenWidth} = Dimensions.get('window');
const heightPercentage = 0.8; // 80% dari tinggi layar

import AsyncStorage from '@react-native-async-storage/async-storage';
import { signUp, signIn } from './auth';



const Signup = ({navigation}) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [isSignUpActive, setIsSignUpActive] = useState(true); // Defaultnya Sign Up aktif

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleFullNameChange = (text) => {
        setFullName(text);
    };
    const handleEmail = (text) => {
        setEmail(text);
    };
    const handlePhoneNumber= (text) => {
        setPhoneNumber(text);
    };
    const handlePassword = (text) => {
        setPassword(text);
    };



    
    const handleSignUp = async () => {
        // Validasi data sebelum melakukan sign up (bisa ditambahkan)
        // Misalnya, pastikan semua field terisi dengan benar sebelum melakukan sign up
        if (!fullName || !email || !phoneNumber || !password) {
            // Jika ada field yang kosong, tampilkan pesan atau lakukan sesuatu
            console.log('Harap isi semua field');
            console.log('fullName:', fullName);
            console.log('email:', email);
            console.log('phoneNumber:', phoneNumber);
            console.log('password:', password);
            return; // Berhenti menjalankan fungsi jika ada field yang kosong
        }
        
        const userData = {
            fullName,
            email,
            phoneNumber,
            password,
            isSignIn: false,
        };

        // Panggil fungsi signUp dari auth.js
        const signUpResponse = await signUp(userData);

        if (signUpResponse.success) {
        // Sign up berhasil, lakukan sesuatu
            console.log('Sign up successful');
            console.log('User Data:', userData);
        // Redirect atau lakukan sesuatu setelah sign up berhasil
        } else {
        // Sign up gagal, tampilkan pesan kesalahan atau lakukan sesuatu
            console.log('Sign up failed');
        }
        console.log('Sign up');
    };

    const handleSignIn = async () => {
        console.log('Sign in')
        // Validasi data sebelum melakukan sign up (bisa ditambahkan)
        // Misalnya, pastikan semua field terisi dengan benar sebelum melakukan sign up
        if (!email || !password) {
            // Jika ada field yang kosong, tampilkan pesan atau lakukan sesuatu
            console.log('Harap isi semua field');
            console.log('email:', email);
            console.log('password:', password);
            return; // Berhenti menjalankan fungsi jika ada field yang kosong
        }
        
        const userData = {
            email,
            password,
            isSignIn: true,
        };

        // Panggil fungsi signUp dari auth.js
        const signInResponse = await signIn(userData);

        if (signInResponse.success) {
            try {
                await AsyncStorage.setItem('userData', JSON.stringify(userData));
                console.log('Sign in successful');
                console.log('User Data:', userData);
                navigation.navigate('Home', { userData });
            } catch (error) {
                console.error('Error saving user data:', error);
            }
        // Redirect atau lakukan sesuatu setelah sign up berhasil
        } else {
        // Sign up gagal, tampilkan pesan kesalahan atau lakukan sesuatu
            console.log(signInResponse.message);
        }
        console.log('Sign in');
    }

    // const debugAllUser = async () => {
    //     try {
    //         const keys = await AsyncStorage.getAllKeys();
    //         const users = await AsyncStorage.multiGet(keys);
        
    //         console.log('All Users:', users);
    //         // Tampilkan informasi pengguna dalam format yang sesuai dengan strukturnya
    //         users.forEach((user, index) => {
    //           console.log(`User ${index + 1}:`, user);
    //         });
    //     } catch (error) {
    //         console.error('Error retrieving data:', error);
    //     }
    // }

	return (
        <View style={[styles.bg]}>
            <LogoWide></LogoWide>
            <View style={styles.centeredContainer}>
                <Text style={styles.subTitle}>Click for Clean</Text>
            </View>
            <View style={[styles.rectangle]}>
                <View style={[styles.inputContainer, isSignUpActive ? null : styles.signInInputContainer]}>
                    {isSignUpActive ? (
                        <>
                            <InputA
                                iconSource={require('../assets/icon/full-name.png')}
                                placeholder='Full Name'
                                value={fullName}
                                onChangeText={handleFullNameChange}
                            />
                            <InputA
                                iconSource={require('../assets/icon/email.png')}
                                placeholder='Email'
                                value={email}
                                onChangeText= {handleEmail}
                            />
                            <InputA
                                iconSource={require('../assets/icon/phone-number.png')}
                                placeholder='Phone Number'
                                keyBoardType={'numeric'}
                                value={phoneNumber}
                                onChangeText={handlePhoneNumber}
                            />
                            <InputA
                                iconSource={require('../assets/icon/password.png')}
                                placeholder='Password'
                                isPassword={true}
                                value={password}
                                onChangeText={handlePassword}
                            />
                        </>
                    ) : (
                        <>
                            <InputA
                                iconSource={require('../assets/icon/email.png')}
                                placeholder='Email'
                                onChangeText= {handleEmail}
                            />
                            <InputA
                                iconSource={require('../assets/icon/password.png')}
                                placeholder='Password'
                                isPassword={true}
                                onChangeText={handlePassword}
                            />
                        </>
                    )}
                </View>
            <View style={{ top: 30 }}>
                <View style={[styles.buttonContainer, isSignUpActive ? { top: -100 } : null]}>
                    <TouchableOpacity onPress={() => setIsSignUpActive(!isSignUpActive)}>
                        <ButtonUnderline style={[styles.buttonU]} opa={ isSignUpActive ? 1 : 0.5} text={"Sign Up"}></ButtonUnderline>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsSignUpActive(!isSignUpActive)}>
                        <ButtonUnderline style={[styles.buttonU]} opa={ isSignUpActive ? 0.5 : 1} text={"Sign In"}></ButtonUnderline>
                    </TouchableOpacity>
                </View>
            </View>
			<View style={styles.bottomCenteredContainer}>
				<FilledButton
					textColor={COLORS.white}
					buttonColor={"#2E6B60"}
					borderColor={"#2E6B60"}
					title={isSignUpActive ? ("Sign Up") : ("Sign In")}
                    onPress={isSignUpActive ? handleSignUp : handleSignIn}
                    // onPress = {() => console.log('ok')}
                    // handleButtonPress={isSignUpActive ? {handleSignUp} : null}
				/>
			</View>
			</View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonU: {
        top: 0
    },
    inputContainer: {
        flexDirection: 'column', // Menyusun elemen secara vertikal
        alignItems: 'center', // Mengatur posisi secara vertikal di tengah
        justifyContent: 'center', // Mengatur jarak antar input
        height: 200, // Atur tinggi sesuai dengan kebutuhan
        top: 100
    },
	signInInputContainer: {
        height: 100, // Atur tinggi sesuai dengan kebutuhan pada mode Sign In
    },
    bg: {
        backgroundColor: COLORS.primary,
        flex: 1
    },
    leenTitle: {
        top: 80,
        left: 180,
        color: COLORS.white,
        fontSize: 80,
        transform: [
            {
                translateX: 0
            }
        ]
    },
    logoImage: {
        left: 96,
        top: -23,
        width: 82,
        height: 82,
        resizeMode: 'contain',
        transform: [
            {
                translateX: 0
            }
        ]
    },
    subTitle: {
        color: COLORS.white,
        fontSize: 20
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
	bottomCenteredContainer: {
		position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
	}
})

export default Signup