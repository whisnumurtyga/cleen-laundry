import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Menggunakan FontAwesome5 sebagai contoh ikon, Anda dapat mengganti dengan ikon lain

const { width } = Dimensions.get('window'); // Mendapatkan lebar layar


const BottomBar = ({ onHomePress, onOrderPress, onChatPress }) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onHomePress}
                style={styles.iconContainer}
            >
                <Image
                    source={require("../assets/bottom-bar/home.png")}
                    style={styles.iconImage}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onOrderPress}
                style={styles.iconContainer}
            >
                <Image
                    source={require("../assets/bottom-bar/order.png")}
                    style={styles.iconImage}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onChatPress}
                style={styles.iconContainer}
            >
                <Image
                    source={require("../assets/bottom-bar/chat.png")}
                    style={styles.iconImage}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff', // Warna latar belakang
        borderTopWidth: 1,
        borderTopColor: '#ccc', // Warna garis atas
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: {width},     
        top: 375,
      },
      iconContainer: {
        alignItems: 'center',
      },
      iconImage: {
        width: 32, // Sesuaikan lebar gambar ikon
        height: 32, // Sesuaikan tinggi gambar ikon
      },
});

export default BottomBar;
