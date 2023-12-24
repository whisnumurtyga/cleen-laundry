import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

const PlaceDetailsMap = () => {
  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    // Simulating the asynchronous fetching of place details
    const fetchPlaceDetails = async () => {
      try {
        // You can replace this with your own logic to fetch place details
        const response = await fetch(
          'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,formatted_address,geometry&key=YOUR api KEy'
        );

        const data = await response.json();
        setPlaceDetails(data.result);
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    };

    fetchPlaceDetails();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {placeDetails ? (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: placeDetails.geometry.location.lat,
            longitude: placeDetails.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: placeDetails.geometry.location.lat,
              longitude: placeDetails.geometry.location.lng,
            }}
          >
            <Callout>
              <View>
                <Text>{placeDetails.name}</Text>
                <Text>{placeDetails.formatted_address}</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default PlaceDetailsMap;
