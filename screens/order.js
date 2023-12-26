import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Order = () => {
  // Data dummy untuk pesanan
  const orders = [
    { id: '1', item: 'T-shirt', quantity: 2 },
    { id: '2', item: 'Jeans', quantity: 1 },
    { id: '3', item: 'Socks', quantity: 5 },
    // ...data pesanan lainnya
  ];

  // Fungsi untuk merender setiap item pesanan
  const renderOrderItem = ({ item }) => {
    return (
      <View style={styles.orderItem}>
        <Text style={styles.itemName}>{item.item}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  itemName: {
    fontSize: 18,
    marginBottom: 5,
  },
  itemQuantity: {
    color: 'gray',
  },
  list: {
    flex: 1,
  },
});

export default Order;
