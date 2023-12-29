import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import GoogleApi from "../services/GoogleApi";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Separator from "../components/Separator";
import Button from "../components/Button";

const Detailplace = ({ route }) => {
  const navigation = useNavigation();
  const { laundry } = route.params;
  const [dataDetail, setDataDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GoogleApi.getPlaceById(laundry.place_id);
        setDataDetail(response.data.result);
      } catch (error) {
        console.error("Error fetching place details:", error);
      }
    };

    fetchData();
  }, [laundry.place_id]);

  const filterRating = (data) => {
    if (data === 1) {
      return "Kurang Baik";
    } else if (data === 3) {
      return "Cocok";
    } else if (data > 3 && data < 5) {
      return "Bagus";
    } else if (data === 5) {
      return "Bagus Banget";
    } else {
      return "Error";
    }
  };

  const renderDataReviews = ({ item }) => (
    <View
      style={{
        backgroundColor: "#DBEFEC",
        borderRadius: 10,
        height: 80,
        width: 200,
        alignItems: "center",
        flexDirection: "row",
        marginRight: 10,
        position: "relative",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          paddingRight: 10,
          borderRadius: 5,
          opacity: 0.7,
          position: "absolute",
          top: 3,
          right: 4,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/image/home/star.png")}
          resizeMode="contain"
          style={{
            marginLeft: 10,
            width: 10,
            height: 10,
          }}
        />
        <Text style={{ marginLeft: 10 }}>{item.rating}</Text>
      </View>
      {/* foto autor */}
      <View style={{ marginHorizontal: 10 }}>
        <Image
          source={{
            uri: `${item.profile_photo_url}`,
          }}
          resizeMode="cover"
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
          }}
        />
      </View>
      {/* name and review */}
      <View>
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>
          {item.author_name}
        </Text>
        <Text style={{ fontSize: 13 }}>{filterRating(item.rating)}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 20 }}>
        {/* header */}
        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={40} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, marginLeft: 65 }}>Detail Laundry</Text>
        </View>
        <Separator height={20} />

        {/* nama laundry */}
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {dataDetail?.name}
          </Text>
        </View>
        <Separator height={20} />

        {/* photo laundry */}
        <View>
          <Image
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photo_reference=${dataDetail?.photos?.[0]?.photo_reference}&key=AIzaSyCp3akDr9MGokBqo3XepisDoBz6xKE62Hk`,
            }}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 180,
              borderRadius: 10,
            }}
          />
        </View>
        <Separator height={10} />
        {/* small photo */}
        <View style={{ flexDirection: "row" }}>
          {dataDetail?.photos?.slice(1, 4).map((photo, index) => (
            <Image
              key={index}
              source={{
                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photo_reference=${photo?.photo_reference}&key=AIzaSyCp3akDr9MGokBqo3XepisDoBz6xKE62Hk`,
              }}
              resizeMode="cover"
              style={{
                marginRight: 15,
                width: 90,
                height: 70,
                borderRadius: 5,
              }}
            />
          ))}
        </View>
        <Separator height={10} />
      </View>
      <ScrollView>
        {/* address and rating */}
        <View style={{ marginHorizontal: 20 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Location & Rating
            </Text>
            <Separator height={5} />
            <View
              style={{
                backgroundColor: "#DBEFEC",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text>{dataDetail?.vicinity}</Text>
              {/* rating */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/image/home/star.png")}
                  resizeMode="contain"
                  style={{
                    width: 10,
                    height: 10,
                  }}
                />
                <Text style={{ marginLeft: 10 }}>{dataDetail?.rating}</Text>
              </View>
            </View>
          </View>
          <Separator height={10} />
          {/* nama laundry */}
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Deskripsi Laundry
            </Text>
            <Separator height={10} />
            <View
              style={{
                backgroundColor: "#DBEFEC",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 15 }}>
                Toko laundry kami adalah destinasi utama untuk semua kebutuhan
                pencucian Anda.
              </Text>
            </View>
          </View>
          <Separator height={20} />
          {/* testimonial */}
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Reviews & Testimonial
          </Text>
          <Separator height={10} />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataDetail?.reviews}
            renderItem={renderDataReviews}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Separator height={20} />
      </ScrollView>
      <TouchableOpacity
        style={{ marginHorizontal: 20 }}
        onPress={() => navigation.navigate("CartScreen")}
      >
        <View
          style={{
            height: 50,
            backgroundColor: "#2E6B60",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Start Laoundry
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Detailplace;
