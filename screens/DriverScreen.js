import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import ChatScreen from "./ChatScreen";

const DriverScreen = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          console.warn("Location permission denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        console.error("Error getting current location:", error);
      }
    };

    requestLocationPermission();
  }, []);

  const initialRegion = {
    latitude: currentLocation ? currentLocation.latitude : 37.78825,
    longitude: currentLocation ? currentLocation.longitude : -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        provider="google"
        customMapStyle={[
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ]}
        showsUserLocation
        followsUserLocation
      >
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Driver Location"
            description="Rin Shima is here"
          />
        )}
      </MapView>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ paddingBottom: 200, width: 300, height: 300 }}
          source={require("../assets/images/deskripsi.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Image source={require("../assets/images/rin.png")} />
        <Text style={styles.statusText}>Rin Shima</Text>
        <Text>W 3111 NES</Text>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.navigate(ChatScreen)}
        >
          <Image source={require("../assets/images/hp.png")}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: 400,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    padding: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DriverScreen;
