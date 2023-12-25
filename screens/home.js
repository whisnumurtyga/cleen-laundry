import { View, Text, Image, Platform, TextInput, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import Separator from "../components/Separator";
import GoogleApi from "../services/GoogleApi";
import helper from "../helper/filter";

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

  const placeInformation = placeList.map(helper.getPlaceInformation);
  const filteredPlaces = placeInformation.filter(
    (tempat) => tempat.rating >= 4
  );

  const renderItemNerby = ({ item }) => (
    <View style={{ position: "relative" }}>
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photo_reference=${item.photo_reference}&key=AIzaSyCp3akDr9MGokBqo3XepisDoBz6xKE62Hk`,
        }}
        resizeMode="cover"
        style={{
          marginRight: 15,
          width: 130,
          height: 110,
          borderRadius: 5,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 10,
          left: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#DBEFEC",
            borderRadius: 5,
            opacity: 0.7,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "black",
              width: 100,
              marginHorizontal: 5,
            }}
          >
            {item.nama}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/image/home/star.png")}
            resizeMode="contain"
            style={{
              width: 10,
              height: 10,
            }}
          />
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "white" }}>
            {item.rating}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderItemPopular = ({ item }) => (
    <View style={{ position: "relative" }}>
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photo_reference=${item.photo_reference}&key=AIzaSyCp3akDr9MGokBqo3XepisDoBz6xKE62Hk`,
        }}
        resizeMode="cover"
        style={{
          marginRight: 15,
          width: 130,
          height: 110,
          borderRadius: 5,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 10,
          left: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#DBEFEC",
            borderRadius: 5,
            opacity: 0.7,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "black",
              width: 100,
              marginHorizontal: 5,
            }}
          >
            {item.nama}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/image/home/star.png")}
            resizeMode="contain"
            style={{
              width: 10,
              height: 10,
            }}
          />
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "white" }}>
            {item.rating}
          </Text>
        </View>
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
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/image/home/cloth.png")}
              resizeMode="contain"
              style={{
                marginTop: 15,
                marginLeft: 10,
                width: 150,
              }}
            />
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Dry Clean</Text>
          </View>
          <View
            style={{
              width: 110,
              height: 130,
              backgroundColor: "#DBEFEC",
              marginRight: 10,
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/image/home/setrika.png")}
              resizeMode="contain"
              style={{
                marginTop: 15,
                width: 150,
              }}
            />
            <Text style={{ marginTop: 3, fontSize: 15, fontWeight: "bold" }}>
              Iron
            </Text>
          </View>
          <View
            style={{
              width: 110,
              height: 130,
              backgroundColor: "#DBEFEC",
              marginRight: 10,
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/image/home/wash.png")}
              resizeMode="contain"
              style={{
                marginTop: 20,
                width: 150,
              }}
            />
            <Text style={{ marginTop: 3, fontSize: 15, fontWeight: "bold" }}>
              Wash
            </Text>
          </View>
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
        <Separator height={10} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={placeInformation}
          renderItem={renderItemNerby}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Separator height={20} />
      {/* Popular Laoundry */}
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Popular Laundry
        </Text>
        <Separator height={10} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filteredPlaces}
          renderItem={renderItemPopular}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Home;
