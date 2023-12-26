import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Dimensions, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Menggunakan FontAwesome5 sebagai contoh ikon, Anda dapat mengganti dengan ikon lain
import { useNavigation } from "@react-navigation/native"; // import useNavigation dari React Navigation

const { width } = Dimensions.get('window'); // Mendapatkan lebar layar


const BottomBar = ({ onHomePress, onOrderPress, onChatPress }) => {
    const navigation = useNavigation();

    const navigateToHome = () => {
        // Navigasi ke layar Home saat tombol Home ditekan
        navigation.navigate('Home');
    };

    const navigateToOrder = () => {
        // Navigasi ke layar Order saat tombol Order ditekan
        navigation.navigate('Order');
    };

    const navigateToChat = () => {
        // Navigasi ke layar Chat saat tombol Chat ditekan
        navigation.navigate('Chat');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={navigateToHome}
                style={styles.iconContainer}
            >
                <Image
                    source={require("../assets/bottom-bar/home.png")}
                    style={styles.iconImage}
                />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={navigateToOrder}
                style={styles.iconContainer}
            >
                <Image
                    source={require("../assets/bottom-bar/order.png")}
                    style={styles.iconImage}
                />
                <Text>Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={navigateToChat}
                style={styles.iconContainer}
            >
                <Image
                    source={require("../assets/bottom-bar/chat.png")}
                    style={styles.iconImage}
                />
                <Text>Chat</Text>
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
        top: 365,
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
