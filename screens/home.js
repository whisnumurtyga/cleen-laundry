import { View, Text, Image, Platform, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import Separator from "../components/Separator";
import GoogleApi from "../services/GoogleApi";

const Home = () => {
  const [localTime, setLocalTime] = useState(new Date());
  const [location, setLocation] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);
  const [placeList, setPlaceList] = useState([]);
  const [geometry, setGeometry] = useState([]);
  const [searchInput, setSearchInput] = useState([]);

  useEffect(() => {
    const updateLocalTime = () => {
      setLocalTime(new Date());
    };

    const intervalId = setInterval(updateLocalTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const getPermissions = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Please grant location permissions");
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        console.log("Location : ", currentLocation);
        fetchLocationInfo(
          currentLocation.coords.latitude,
          currentLocation.coords.longitude
        );
      } catch (error) {
        console.error("Error getting location permissions:", error);
      }
    };
    getPermissions();
  }, []);

  useEffect(() => {
    if (location && location.coords) {
      GetNearBySearchPlace(location.coords.latitude, location.coords.longitude);
    }
  }, [location]);

  const GetNearBySearchPlace = (latitude, longitude) => {
    GoogleApi.nearbyPlaces(latitude, longitude).then((resp) => {
      console.log("Google api", resp.data.results);

      setPlaceList(resp.data.results);
    });
  };

  const GetSearchPlace = (input) => {
    GoogleApi.searchPlace(input).then((resp) => {
      if (resp.data.candidates && resp.data.candidates.length > 0) {
        console.log(
          "Google geometry : ",
          resp.data.candidates[0].geometry.location
        );
        setGeometry(resp.data.candidates[0].geometry.location);
      } else {
        console.log("No results found");
      }
    });
  };

  const fetchLocationInfo = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      setLocationInfo(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch location information:", error);
    }
  };

  const formatDateString = (date) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const renderItemNerby = ({ item }) => (
    <View
      style={{
        margin: 8,
        borderRadius: 8,
        overflow: "hidden",
        flex: 1,
        position: "relative",
      }}
    >
      <Image source={item.source} style={styles.image} />
      <View
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text>{item.address}</Text>
        </View>
        <View>
          <Text>{item.star}</Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: COLORS.white,
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{ marginHorizontal: 20 }}>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/image/home/menu-button.png")}
          resizeMode="contain"
          style={{
            width: 25,
            marginRight: 60,
          }}
        />
        {locationInfo ? (
          <View style={{ alignItems: "center", marginRight: 40, width: 180 }}>
            <Text style={{ fontSize: 20 }}>
              {locationInfo.address.city}, {locationInfo.address.village}
            </Text>
            <Text style={{ fontSize: 16 }}>{formatDateString(localTime)}</Text>
          </View>
        ) : (
          <Text style={{ fontSize: 20, marginRight: 40, width: 180 }}>
            Loading...
          </Text>
        )}
        <Image
          source={require("../assets/image/home/profile-logo.png")}
          resizeMode="contain"
          style={{
            alignContent: "center",
            paddingTop: 5,
            marginTop: 10,
            width: 50,
          }}
        />
      </View>
      {/* text TextInput */}
      <Separator height={20} />
      <View
        style={{
          backgroundColor: "#DBEFEC",
          borderRadius: 10,
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Find Laundry Store . . ."
          value={searchInput}
          onChangeText={(text) => setSearchInput(text)}
          onSubmitEditing={() => GetSearchPlace(searchInput)}
        />
        <Image
          source={require("../assets/image/home/search.png")}
          resizeMode="contain"
          style={{
            alignContent: "center",
            width: 50,
          }}
        />
      </View>
      {/* current location */}
      <View
        style={{
          marginTop: 10,
          height: 30,
          backgroundColor: "#DBEFEC",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Image
            source={require("../assets/image/home/location.png")}
            resizeMode="contain"
            style={{
              marginTop: 2,
              marginRight: 5,
            }}
          />
          {locationInfo ? (
            <Text style={{ width: 320 }}>
              {locationInfo.address.office}, {locationInfo.address.road}{" "}
              {locationInfo.address.neighbourhood}, {locationInfo.address.city}
            </Text>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
      <Separator height={20} />
      {/* kategory */}
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Category</Text>
        <Separator height={10} />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 110,
              height: 130,
              backgroundColor: "#DBEFEC",
              marginRight: 10,
            }}
          ></View>
          <View
            style={{
              width: 110,
              height: 130,
              backgroundColor: "#DBEFEC",
              marginRight: 10,
            }}
          ></View>
          <View
            style={{
              width: 110,
              height: 130,
              backgroundColor: "#DBEFEC",
            }}
          ></View>
        </View>
      </View>
      <Separator height={20} />
      {/* Nearby Laoundry */}
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Nerby laundry
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataNerby}
          renderItem={renderItemNerby}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Home;
