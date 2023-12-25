import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Schedule from './Schedule';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { calculateTotalCost } from './Schedule'; // Impor fungsi calculateTotalCost dari Schedule



const OrderSuccessScreen = ({ route }) => {
  const { paymentMethod, totalAmount } = route.params;
  const getCurrentDateTime = () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString('en-US', options);
  };

  const generateTransactionCode = () => {
    return Math.random().toString(36).substring(5).toUpperCase();
  };

  const [transactionCode, setTransactionCode] = useState('');
  const [isImageVisible, setImageVisible] = useState(false);

  
  useEffect(() => {
    const code = generateTransactionCode();
    setTransactionCode(code);

    const timer = setTimeout(() => {
      setImageVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {isImageVisible && (
          <Animatable.View animation="fadeInUp" duration={1500} style={styles.imageContainer}>
            <Image
              source={require('../assets/OrderSuccess.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </Animatable.View>
        )}
      </View>
      <Text style={styles.successText}>Order Successful</Text>
      <Text style={styles.dateTimeText}>{getCurrentDateTime()}</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoText}>
          <Text style={styles.infoLabel}>Nominal:</Text>
          <Text style={styles.infoValue}>{totalAmount}</Text>
        </View>
        <View style={styles.infoText}>
          <Text style={styles.infoLabel}>Payment Method:</Text>
          <Text style={styles.infoValue}>{paymentMethod}</Text>
        </View>
        <View style={styles.infoText}>
          <Text style={styles.infoLabel}>Transaction Code:</Text>
          <Text style={styles.infoValue}>{transactionCode}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>See Courier</Text>
      </TouchableOpacity>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dateTimeText: {
    fontSize: 16,
    marginTop: 5,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  infoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  infoLabel: {
    textAlign: 'left',
    width: 150,
  },
  infoValue: {
    textAlign: 'right',
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#2e6b60',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderSuccessScreen;
