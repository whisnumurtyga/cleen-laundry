import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const HomeScreen = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationInfo, setLocationInfo] = useState(null);

  const fetchLocationInfo = async () => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Latitude"
        onChangeText={text => setLatitude(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Longitude"
        onChangeText={text => setLongitude(text)}
        keyboardType="numeric"
      />
      <Button title="Get Location Info" onPress={handleButtonPress} />
      {locationInfo && (
        <View style={{ marginTop: 20 }}>
            {/* <Text>{locationInfo}</Text> */}
          <Text>Location Information:</Text>
          <Text>Country: {locationInfo.address.country}</Text>
          <Text>City: {locationInfo.address.city}</Text>
          {/* Tambahkan informasi lain yang ingin ditampilkan dari locationInfo */}
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
