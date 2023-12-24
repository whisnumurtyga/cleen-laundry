import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [locationInfo, setLocationInfo] = useState(null);

    const fetchLocationInfo = async () => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            setLocationInfo(data);
            console.log(data)
        } catch (error) {
            Alert.alert('Error', 'Failed to fetch location information');
        }
    };

    const handleButtonPress = () => {
        if (latitude && longitude) {
            fetchLocationInfo();
        } else {
            Alert.alert('Error', 'Please enter both latitude and longitude');
        }
    };

    const handleLogout = async () => {
        try {
            const userData = await AsyncStorage.getItem('users');
            if (userData != null) {
                let usersData = JSON.parse(userData);
                const signedInUserIndex = usersData.findIndex((user) => user.isSignIn == true);
                if (signedInUserIndex != false) {
                    // Ubah nilai isSignIn menjadi false untuk pengguna yang masuk
                    usersData[signedInUserIndex].isSignIn = false;
                    // Simpan kembali data pengguna ke AsyncStorage
                    await AsyncStorage.setItem('users', JSON.stringify(usersData));
                }
            }
            // Setelah logout, navigasikan kembali ke halaman login atau signup
            navigation.replace('Signup');
        } catch (error) {
            console.error('Error while logging out:', error);
            // Handle error saat logout
            navigation.replace('Signup');
        }
    }
    
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <TextInput
                style={{
                    height: 40,
                    width: 200,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 10
                }}
                placeholder="Latitude"
                onChangeText={text => setLatitude(text)}
                keyboardType="default" 
            />
            <TextInput
                style={{
                    height: 40,
                    width: 200,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 10
                }}
                placeholder="Longitude"
                onChangeText={text => setLongitude(text)}
                keyboardType="default" 
            />
            <TouchableOpacity onPress={handleLogout}>
                <Text
                    style={
                        {fontSize: 50}
                    }
                >
                    Logout
                </Text>
            </TouchableOpacity>
            <Text>Halo</Text>
            <Button title="Get Location Info" onPress={handleButtonPress}/> 
            {
                locationInfo && (
                    <View>
                        <Text>City: {locationInfo.address.city}</Text>
                        <Text>Village: {locationInfo.address.village}</Text>
                        <Text>Road: {locationInfo.address.road}</Text>
                    </View>
                )
            }
        </View>
    );
};
export default HomeScreen;
