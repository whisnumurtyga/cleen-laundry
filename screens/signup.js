import {
    View,
    Text,
    Image,
    Pressable,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import React, {useState, useEffect} from 'react';
import COLORS from '../constants/colors';
import {LogoWide, InputA, FilledButton, ButtonUnderline} from '../components';
import {Tabs, Tab} from 'native-base';

const {height: screenHeight} = Dimensions.get('window');
const {width: screenWidth} = Dimensions.get('window');
const heightPercentage = 0.8; // 80% dari tinggi layar

const Signup = ({navigation}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [activeTab, setActiveTab] = useState(0); // Untuk melacak tab yang aktif
    const [isSignUpActive, setIsSignUpActive] = useState(true); // Defaultnya Sign Up aktif
    const [isSignInActive, setIsSignInActive] = useState(true);


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
                            />
                            <InputA
                                iconSource={require('../assets/icon/email.png')}
                                placeholder='Email'
                            />
                            <InputA
                                iconSource={require('../assets/icon/phone-number.png')}
                                placeholder='Phone Number'
                            />
                            <InputA
                                iconSource={require('../assets/icon/password.png')}
                                placeholder='Password'
                            />
                        </>
                    ) : (
                        <>
                            <InputA
                                iconSource={require('../assets/icon/email.png')}
                                placeholder='Email'
                            />
                            <InputA
                                iconSource={require('../assets/icon/password.png')}
                                placeholder='Password'
                            />
                        </>
                    )}
                </View>
            <View style={{ top: 20 }}>
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