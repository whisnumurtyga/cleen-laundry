import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProcessScreen = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Contoh data transaksi, Anda bisa menggantinya dengan data sebenarnya
    const sampleTransactions = [
      {
        totalAmount: 69000,
        paymentMethod: 'Cash',
        transactionCode: 'IAX8918W',
        transactionDate: new Date().toLocaleDateString(),
      },
      {
        totalAmount: 120000,
        paymentMethod: 'Credit Card',
        transactionCode: 'XZB1234Y',
        transactionDate: new Date().toLocaleDateString(),
      },
      // ... tambahkan data transaksi lain di sini jika perlu
    ];

    setTransactions(sampleTransactions);
  }, []);

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

export default ProcessScreen;
