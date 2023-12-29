import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

const CartScreen = ({ navigation }) => {
  const CLOTHING_ITEMS = [
    {
      id: 1,
      image: require("../assets/22.jpg"),
      name: "Kaos",
      price: 2000,
      quantity: 0, // Initialize quantity
    },
    {
      id: 2,
      image: require("../assets/3.png"),
      name: "Kemeja",
      price: 3000,
      quantity: 0, // Initialize quantity
    },
    {
      id: 3,
      image: require("../assets/4.png"),
      name: "Celana",
      price: 3000,
      quantity: 0, // Initialize quantity
    },
    {
      id: 4,
      image: require("../assets/5.png"),
      name: "Kemeja",
      price: 3000,
      quantity: 0, // Initialize quantity
    },
    {
      id: 5,
      image: require("../assets/11.jpg"),
      name: "Kemeja",
      price: 3000,
      quantity: 0, // Initialize quantity
    },
  ];

  const [cartItems, setCartItems] = useState(CLOTHING_ITEMS);

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => {
      if (item.quantity > 0) {
        return sum + item.price * item.quantity;
      } else {
        return sum;
      }
    }, 0);

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
      <Image source={item.image} style={{ width: 100, height: 100 }} />
      <View style={{ marginLeft: 10 }}>
        <Text>{item.name}</Text>
        <Text>Rp {item.price} /item</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: "auto",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
          style={{
            height: 30,
            width: 30,
            backgroundColor: "#2E6B60",
            borderRadius: 50,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>-</Text>
        </TouchableOpacity>
        <Text
          style={{
            paddingHorizontal: 10,
            fontWeight: "bold",
            fontSize: 18,
            color: "#2E6B60",
            opacity: 0.7,
          }}
        >
          {item.quantity}
        </Text>
        <TouchableOpacity
          onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
          style={{
            height: 30,
            width: 30,
            backgroundColor: "#2E6B60",
            borderRadius: 50,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          color: "#2E6B60",
          paddingLeft: 20,
          paddingTop: 30,
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Dry Clean
      </Text>

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Ensure key is a string
      />
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text style={{ color: "#2E6B60", fontWeight: "bold", fontSize: 20 }}>
            Total
          </Text>
          <Text style={{ color: "#2E6B60", fontWeight: "bold", fontSize: 20 }}>
            Rp {getTotalPrice()}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2E6B60",
            padding: 10,
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 10,
            height: 50,
            width: 350,
          }}
          onPress={() =>
            navigation.navigate("Schedule", { totalAmount: getTotalPrice() })
          }
        >
          <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
            Schedule
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
