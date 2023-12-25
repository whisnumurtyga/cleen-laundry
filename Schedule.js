import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,  } from "react-native";
import CartScreen from './CartScreen'; // Import CartScreen di sini
import { useNavigation } from '@react-navigation/native';


const Schedule = ({ route }) => {
    const navigation = useNavigation();
    const { totalAmount } = route.params;
  
    const [pickupDate, setPickupDate] = useState("");
    const [selectedToday, setSelectedToday] = useState(false);
    const [selectedTomorrow, setSelectedTomorrow] = useState(false);
    const [selectedTwoDaysLater, setSelectedTwoDaysLater] = useState(false);
  
    const [pickupTime, setPickupTime] = useState("");
    const [selectedInstant, setSelectedInstant] = useState(false);
    const [selectedNine, setSelectedNine] = useState(false);
    const [selectedTwelve, setSelectedTwelve] = useState(false);
  
    const [processingTime, setProcessingTime] = useState("");
    const [selectedInstantProcess, setSelectedInstantProcess] = useState(false);
    const [selectedOneDayProcess, setSelectedOneDayProcess] = useState(false);
    const [selectedTwoDaysProcess, setSelectedTwoDaysProcess] = useState(false);
  
    const [paymentMethod, setPaymentMethod] = useState(""); // Pastikan sudah ada deklarasi ini
    const [selectedCash, setSelectedCash] = useState(false);
    const [selectedBank, setSelectedBank] = useState(false);
    const [selectedEWallet, setSelectedEWallet] = useState(false);

    const calculatePickupCost = () => {
        if (selectedToday) {
          if (selectedInstant) {
            return 15000;
          } else if (selectedNine) {
            return 12500;
          } else if (selectedTwelve) {
            return 10000;
          }
        } else if (selectedTomorrow) {
          if (selectedInstant) {
            return 15000;
          } else if (selectedNine) {
            return 12500;
          } else if (selectedTwelve) {
            return 10000;
          }
        } else if (selectedTwoDaysLater) {
          if (selectedInstant) {
            return 15000;
          } else if (selectedNine) {
            return 12500;
          } else if (selectedTwelve) {
            return 10000;
          }
        }
        return 0; // Jika tidak ada pilihan yang dipilih, biaya adalah 0
      };
      
    const calculateProcessingCost = () => {
        if (selectedInstantProcess) {
          return 10000;
        } else if (selectedOneDayProcess) {
          return 7500;
        } else if (selectedTwoDaysProcess) {
          return 5000;
        } else {
          return 0;
        }
    };  
  
    const calculateTotalCost = () => {
        return totalAmount + calculatePickupCost() + calculateProcessingCost();
      };

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const twoDaysLater = new Date(today);
    twoDaysLater.setDate(twoDaysLater.getDate() + 2);
  
    const formatDate = (date) => {
      const options = { weekday: 'long' };
      return date.toLocaleDateString(undefined, options);
    };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Pickup Date</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setPickupDate(formatDate(today));
              setSelectedToday(true);
              setSelectedTomorrow(false);
              setSelectedTwoDaysLater(false);
            }}
            style={[styles.button, selectedToday && { backgroundColor: '#2e6b60' }]}
          >
            <Text style={selectedToday && { color: 'white' }}>{today.getDate()}</Text>
            <Text style={{ fontSize: 12 }}>{formatDate(today)}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPickupDate(formatDate(tomorrow));
              setSelectedToday(false);
              setSelectedTomorrow(true);
              setSelectedTwoDaysLater(false);
            }}
            style={[styles.button, selectedTomorrow && { backgroundColor: '#2e6b60' }]}
          >
            <Text style={selectedTomorrow && { color: 'white' }}>{tomorrow.getDate()}</Text>
            <Text style={{ fontSize: 12 }}>{formatDate(tomorrow)}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPickupDate(formatDate(twoDaysLater));
              setSelectedToday(false);
              setSelectedTomorrow(false);
              setSelectedTwoDaysLater(true);
            }}
            style={[styles.button, selectedTwoDaysLater && { backgroundColor: '#2e6b60' }]}
          >
            <Text style={selectedTwoDaysLater && { color: 'white' }}>{twoDaysLater.getDate()}</Text>
            <Text style={{ fontSize: 12 }}>{formatDate(twoDaysLater)}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Pickup Time</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setPickupTime("Instant");
              setSelectedInstant(true);
              setSelectedNine(false);
              setSelectedTwelve(false);
            }}
            style={[styles.button, selectedInstant && { backgroundColor: '#2e6b60' }]}
          >
            <Text style={selectedInstant && { color: 'white' }}>Instant</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPickupTime("9:00");
              setSelectedInstant(false);
              setSelectedNine(true);
              setSelectedTwelve(false);
            }}
            style={[styles.button, selectedNine && { backgroundColor: '#2e6b60' }]}
          >
            <Text style={selectedNine && { color: 'white' }}>9:00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPickupTime("12:00");
              setSelectedInstant(false);
              setSelectedNine(false);
              setSelectedTwelve(true);
            }}
            style={[styles.button, selectedTwelve && { backgroundColor: '#2e6b60' }]}
          >
            <Text style={selectedTwelve && { color: 'white' }}>12:00</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Processing Time</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setProcessingTime("Instant");
              setSelectedInstantProcess(true);
              setSelectedOneDayProcess(false);
              setSelectedTwoDaysProcess(false);
            }}
            style={[styles.button, selectedInstantProcess && { backgroundColor: '#2e6b60' }]}
          >
            <Text style={selectedInstantProcess && { color: 'white' }}>Instant</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setProcessingTime("1 Day");
              setSelectedInstantProcess(false);
              setSelectedOneDayProcess(true);
              setSelectedTwoDaysProcess(false);
            }}
            style={[styles.button, selectedOneDayProcess && { backgroundColor: '#2e6b60' }]}
          >
            <Text style={selectedOneDayProcess && { color: 'white' }}>1 Day</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setProcessingTime("2 Days");
              setSelectedInstantProcess(false);
              setSelectedOneDayProcess(false);
              setSelectedTwoDaysProcess(true);
            }}
            style={[styles.button, selectedTwoDaysProcess && { backgroundColor: '#2e6b60' }]}
          >
            <Text style={selectedTwoDaysProcess && { color: 'white' }}>2 Days</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Payment Method</Text>
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={() => {
        setPaymentMethod("Cash");
        setSelectedCash(true);
        setSelectedBank(false);
        setSelectedEWallet(false);
      }}
      style={[styles.button, selectedCash && { backgroundColor: '#2e6b60' }]}
    >
      <Text style={selectedCash && { color: 'white' }}>Cash</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        setPaymentMethod("Bank");
        setSelectedCash(false);
        setSelectedBank(true);
        setSelectedEWallet(false);
      }}
      style={[styles.button, selectedBank && { backgroundColor: '#2e6b60' }]}
    >
      <Text style={selectedBank && { color: 'white' }}>Bank</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        setPaymentMethod("E-Wallet");
        setSelectedCash(false);
        setSelectedBank(false);
        setSelectedEWallet(true);
      }}
      style={[styles.button, selectedEWallet && { backgroundColor: '#2e6b60' }]}
    >
      <Text style={selectedEWallet && { color: 'white' }}>E-Wallet</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.totalContainer}>
  <View style={styles.totalRow}>
    <Text style={styles.totalLabel}>Items:</Text>
    <Text style={styles.totalValue}>Rp {totalAmount}</Text>
  </View>
  <View style={styles.totalRow}>
    <Text style={styles.totalLabel}>Pickup:</Text>
    <Text style={styles.totalValue}>Rp {calculatePickupCost()}</Text>
  </View>
  <View style={styles.totalRow}>
    <Text style={styles.totalLabel}>Processing:</Text>
    <Text style={styles.totalValue}>Rp {calculateProcessingCost()}</Text>
  </View>
  <View style={[styles.totalRow, { justifyContent: 'space-between' }]}>
    <Text style={[styles.totalLabel, styles.totalText]}>Total:</Text>
    <Text style={[styles.totalValue, styles.totalText]}>Rp {calculateTotalCost()}</Text>
  </View>
</View>

<View style={styles.payButtonContainer}>
  <TouchableOpacity
onPress={() => {
    // Lakukan navigasi ke OrderSuccessScreen dengan prop metode pembayaran dan totalAmount
    navigation.navigate('OrderSuccess', {
        paymentMethod: paymentMethod,
        totalAmount: calculateTotalCost(),
      });
  }}
  
    style={{
      backgroundColor: '#2e6b60',
      width: 315,
      height: 40,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text style={{ color: 'white' }}>Pay</Text>
  </TouchableOpacity>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start", // Menempatkan konten ke atas
      paddingHorizontal: 20,
      paddingTop: 20, // Menambahkan sedikit padding atas
    },
    section: {
      marginBottom: 20,
      alignSelf: 'stretch', // Menarik ke lebar maksimum
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      alignSelf: 'stretch', // Menarik ke lebar maksimum
    },
    button: {
      backgroundColor: "#DDDDDD",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      flex: 1, // Menyesuaikan agar tombol terisi di kontainer
      marginHorizontal: 5, // Mengatur margin horizontal
    },
    sectionTitle: {
      alignSelf: 'flex-start',
      marginBottom: 10,
    },
   
    totalContainer: {
        position: 'absolute',
        bottom: 70,
        width: 300,
      },
      totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
      totalLabel: {
        flex: 1,
      },
      totalValue: {
        textAlign: 'right',
        flex: 1,
      },
      totalText: {
        fontWeight: 'bold',
        marginBottom: 8,
        fontSize: 18, // Ubah ukuran font total
      },
    
    
      payButtonContainer: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        width: 315,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2e6b60',
        borderRadius: 5,
      },
    });
  
  
  export default Schedule;
