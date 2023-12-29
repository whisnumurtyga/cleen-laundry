import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DriverScreen from './DriverScreen';

const ProcessScreen = ({ route }) => {
  const { totalAmount, paymentMethod, transactionCode, transactionDate } = route.params || {};
  const navigation = useNavigation();

  const DriverScreen = () => {
    // Ganti 'AnotherScreen' dengan nama screen yang ingin Anda navigasi
    navigation.navigate('DriverScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.dataBox}>
        <View style={styles.dataRow}>
          <Text style={styles.label}>Total Amount:</Text>
          <Text style={styles.value}>{totalAmount}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.label}>Payment Method:</Text>
          <Text style={styles.value}>{paymentMethod}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.label}>Transaction Code:</Text>
          <Text style={styles.value}>{transactionCode}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.label}>Transaction Date:</Text>
          <Text style={styles.value}>{transactionDate}</Text>
        </View>
      </View >

      {/* Tombol Navigasi ke Screen Lain */}
      <View style={{paddingTop: 350}}>
      <TouchableOpacity onPress={DriverScreen} style={styles.button}>
        <Text style={styles.buttonText}>Lacak Driver</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (kode gaya yang sudah ada)

  button: {
    marginTop: 20,
    backgroundColor: '#2E6B60',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProcessScreen;
