import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const data = [
  {
    id: "1",
    title: "Dry Clean",
    source: require("../assets/image/home/cloth.png"),
  },
  {
    id: "2",
    title: "Iron",
    source: require("../assets/image/home/setrika.png"),
  },
  { id: "3", title: "Wash", source: require("../assets/image/home/wash.png") },
];

const dataNerby = [
  {
    id: "1",
    title: "Okey Laundry",
    star: "4.5",
    address: "Jl. Cempedak No. 29, Jakarta",
    source: require("../assets/image/home/nerby1.png"),
  },
  {
    id: "2",
    title: "Laundry Kita",
    star: "4.1",
    address: "Jl. Cempedak No. 29, Jakarta",
    source: require("../assets/image/home/nerby2.png"),
  },
  {
    id: "3",
    title: "Mau Laundry",
    star: "3.5",
    address: "Jl. Cempedak No. 29, Jakarta",
    source: require("../assets/image/home/nerby3.png"),
  },
];
const HomeScreens = () => {
  const renderItemCategory = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.source} style={styles.image} />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginVertical: 5,
        }}
      >
        {item.title}
      </Text>
    </View>
  );

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
    <View>
      {/* header */}
      <View
        style={{
          flex: 1,
          position: "relative",
          marginTop: 50,
          marginHorizontal: 30,
        }}
      >
        {/* button-menu */}
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
          }}
        >
          <Image
            source={require("../assets/image/home/menu-button.png")}
            resizeMode="contain"
            style={{
              marginRight: 30,
            }}
          />

          {/* location-date */}
          <View
            style={{
              marginTop: -8,
              marginHorizontal: 50,
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Surabaya</Text>
            <Text>Wed, 6 Dec, 2023</Text>
          </View>

          {/* profile-logo */}
          <Image
            source={require("../assets/image/home/profile-logo.png")}
            resizeMode="contain"
            style={{
              marginLeft: 30,
              marginTop: -9,
            }}
          />
        </View>
      </View>
      {/* seacrh-loundry */}
      <View
        style={{
          marginTop: 60,
          marginHorizontal: 30,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.background_menu,
            borderRadius: 5,
            padding: 12,
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="Find loundry store."
            placeholderTextColor={COLORS.primary}
          />
          <Image
            source={require("../assets/image/home/search.png")}
            resizeMode="contain"
            style={{
              marginLeft: 150,
              marginTop: 2,
            }}
          />
        </View>
      </View>
      {/* current-location */}
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 30,
          height: 30,
          backgroundColor: COLORS.background_menu,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
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
          <Text>Jl. Jetis Kulon Gg. X No.31, RT.010/RW.04</Text>
        </View>
      </View>
      {/* category-section */}
      <View
        style={{
          marginTop: 15,
          marginHorizontal: 30,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Category
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderItemCategory}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* nearby-loundry */}
      <View
        style={{
          marginTop: 15,
          marginHorizontal: 30,
        }}
      >
        <Text
          style={{
            fontSize: 25,
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: COLORS.background_menu,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});

export default HomeScreens;
