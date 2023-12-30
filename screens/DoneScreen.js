import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DoneScreen = () => {
  // Data transaksi (contoh sementara)
  const transactions = [
    {
      totalAmount: 65000,
      paymentMethod: 'E-wallet',
      transactionCode: 'EWL7689Z',
      transactionDate: new Date().toLocaleDateString(),
    },
    {
      totalAmount: 145000,
      paymentMethod: 'Debit Card',
      transactionCode: 'DBC5678X',
      transactionDate: new Date().toLocaleDateString(),
    },
    {
      totalAmount: 150000,
      paymentMethod: 'E-wallet',
      transactionCode: 'EFG5678Z',
      transactionDate: new Date().toLocaleDateString(),
    },
    {
      totalAmount: 89000,
      paymentMethod: 'Debit Card',
      transactionCode: 'KLM9012X',
      transactionDate: new Date().toLocaleDateString(),
    },
    {
      totalAmount: 110000,
      paymentMethod: 'Credit Card',
      transactionCode: 'PQR3456A',
      transactionDate: new Date().toLocaleDateString(),
    },
    {
      totalAmount: 98000,
      paymentMethod: 'Cash',
      transactionCode: 'MNO7890B',
      transactionDate: new Date().toLocaleDateString(),
    },
    {
      totalAmount: 200000,
      paymentMethod: 'Bank Transfer',
      transactionCode: 'XYZ1234C',
      transactionDate: new Date().toLocaleDateString(),
    },
  ];
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {transactions.map((transaction, index) => (
        <View style={styles.dataBox} key={index}>
          <View style={styles.upperLeft}>
            <Text style={styles.label}>Laundry Time</Text>
            <Text style={styles.value}>Dry Clean</Text>
            <Text style={styles.amountText}>{`Rp. ${transaction.totalAmount.toLocaleString()}`}</Text>
          </View>
          <View style={styles.upperRight}>
            <Text style={[styles.value, styles.transactionCode]}>{transaction.transactionCode}</Text>
            <Text style={[styles.value, styles.transactionDate]}>{transaction.transactionDate}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  dataBox: {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperLeft: {
    flex: 1,
  },
  upperRight: {
    position: 'relative',
    alignItems: 'flex-end',
  },
  lowerLeft: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10, // Menambah jarak bawah
  },
  transactionCode: {
    fontSize: 14,
    position: 'absolute',
    top: 15,
    right: 15,
  },
  transactionDate: {
    fontSize: 14,
    position: 'absolute',
    bottom: 15, // Menempatkan di bawah
    right: 15, // Menempatkan ke kanan
  },
});

export default DoneScreen;
