import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

const CLOTHING_ITEMS = [
  {
    id: 1,
    image: require('./images/22.jpg'),
    name: 'Kaos',
    price: 2000,
    quantity: 0, // Initialize quantity
  },
  {
    id: 2,
    image: require('./images/11.jpg'),
    name: 'Kemeja',
    price: 3000,
    quantity: 0, // Initialize quantity
  },
  {
    id: 3,
    image: require('./images/3.png'),
    name: 'Celana',
    price: 3000,
    quantity: 0, // Initialize quantity
  },
  {
    id: 4,
    image: require('./images/4.png'),
    name: 'Kemeja',
    price: 3000,
    quantity: 0, // Initialize quantity
  },
  {
    id: 5,
    image: require('./images/5.png'),
    name: 'Kemeja',
    price: 3000,
    quantity: 0, // Initialize quantity
  },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(CLOTHING_ITEMS);

  const getTotalPrice = () => cartItems.reduce((sum, item) => {
    if (item.quantity > 0) {
      return sum + item.price * item.quantity;
    } else {
      return sum;
    }
  }, 0);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <Image source={item.image} style={{ width: 50, height: 50 }} />
      <View style={{ marginLeft: 10 }}>
        <Text>{item.name}</Text>
        <Text>Rp {item.price} /item</Text>
        
      </View  >
          <TouchableOpacity onPress={() => handleQuantityChange(item.id, item.quantity - 1)} style={{ marginLeft: 'auto' }}>
            <Text>-</Text>
          </TouchableOpacity>
            <Text style={{ paddingHorizontal: 10 }}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange(item.id, item.quantity + 1)} style={{ marginLeft: 'auto' }}>
            <Text>+</Text>
          </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ paddingTop: 30, fontSize: 20, fontWeight: 'bold' }}>Keranjang Pakaian</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Ensure key is a string
      />
      <View style={{ padding: 10 }}>
        <Text>Total Harga: Rp {getTotalPrice()}</Text>
        <TouchableOpacity style={{ backgroundColor: '#2E6B60', padding: 10 }}>
          <Text style={{ fontSize: 20 ,color: 'white' }}>Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
