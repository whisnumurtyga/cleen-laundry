import {
  View,
  Text,
  Image,
  Platform,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import Separator from "../components/Separator";
import GoogleApi from "../services/GoogleApi";
import helper from "../helper/filter";
import { Entypo } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomTabNavigator from "../components/BottomTabNavigator";
import { ScrollView } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const navigation = useNavigation();
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
      console.log("GetNearBySearchPlace: ", resp.data.results);

      setPlaceList(resp.data.results);
    });
  };

  const GetSearchPlace = (input) => {
    GoogleApi.searchPlace(input).then((resp) => {
      if (resp.data.candidates && resp.data.candidates.length > 0) {
        console.log(
          "GetSearchPlace : ",
          resp.data.candidates[0].geometry.location
        );
        setGeometry(resp.data.candidates[0].geometry.location);
      } else {
        console.log("GetSearchPlace : No results found");
        setPlaceList([]);
      }
    });
  };

  const handleSearchSubmit = async () => {
    try {
      await GetSearchPlace(searchInput);
      if (geometry.lat && geometry.lng) {
        console.log("handleSearchSubmit : ", geometry);
        await GetNearBySearchPlace(geometry.lat, geometry.lng);
      }
    } catch (error) {
      console.error("handleSearchSubmit: Error processing search:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const userData = await AsyncStorage.getItem("users");
      if (userData != null) {
        let usersData = JSON.parse(userData);
        const signedInUserIndex = usersData.findIndex(
          (user) => user.isSignIn == true
        );
        if (signedInUserIndex != false) {
          // Ubah nilai isSignIn menjadi false untuk pengguna yang masuk
          usersData[signedInUserIndex].isSignIn = false;
          // Simpan kembali data pengguna ke AsyncStorage
          await AsyncStorage.setItem("users", JSON.stringify(usersData));
        }
      }
      // Setelah logout, navigasikan kembali ke halaman login atau signup
      navigation.replace("Signup");
    } catch (error) {
      console.error("Error while logging out:", error);
      // Handle error saat logout
      navigation.replace("Signup");
    }
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
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailPlace", { laundry: item })}
    >
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
    </TouchableOpacity>
  );

  const renderItemPopular = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailPlace", { laundry: item })}
    >
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
    </TouchableOpacity>
  );
  return (
    <View style={{ flex: 1 }}>
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
          <TouchableOpacity
            onPress={handleLogout}
            style={{ marginLeft: 10, marginRight: 45 }}
          >
            <AntDesign name="logout" size={24} color="black" />
          </TouchableOpacity>

          {locationInfo ? (
            <View style={{ alignItems: "center", marginRight: 40, width: 180 }}>
              <Text style={{ fontSize: 20 }}>
                {locationInfo.address.city}, {locationInfo.address.village}
              </Text>
              <Text style={{ fontSize: 16 }}>
                {formatDateString(localTime)}
              </Text>
            </View>
          ) : (
            <Text style={{ fontSize: 20, marginRight: 40, width: 180 }}>
              Loading...
            </Text>
          )}
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
          </TouchableOpacity>
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
            onSubmitEditing={handleSearchSubmit}
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
                {locationInfo.address.neighbourhood},{" "}
                {locationInfo.address.city}
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
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Dry Clean
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
      </View>
      <ScrollView>
        <View style={{ marginHorizontal: 20 }}>
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
          <Separator height={20} />
        </View>
      </ScrollView>

      <View style={{ backgroundColor: "#DBEFEC" }}>
        <View
          style={{
            marginHorizontal: 30,
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Entypo name="home" size={24} color="#2E6B60" />
              <Text style={{ color: "#2E6B60", fontWeight: "bold" }}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Order")}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Entypo name="news" size={24} color="#2E6B60" />
              <Text style={{ color: "#2E6B60", fontWeight: "bold" }}>
                Order
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="chatbox-ellipses" size={24} color="#2E6B60" />
              <Text style={{ color: "#2E6B60", fontWeight: "bold" }}>Chat</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
