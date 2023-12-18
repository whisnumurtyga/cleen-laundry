import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import COLORS from '../constants/colors';
import { FilledButton} from '../components';


const Welcome = () => {

  return (
    <View style={styles.bg}>
      <Text style={styles.leenTitle}>leen</Text>
      <Image
        source={require('../assets/splash/logo.png')} // Ganti dengan path gambar Anda 
        // source={require('../assets/facebook.png')} // Ganti dengan path gambar Anda 
        style={styles.logoImage}
      />
      <View style={styles.centeredContainer}>
        <Text style={styles.presentedBy}>presented by</Text>
        <Text style={styles.kelompok}>Kelompok 6</Text>
      </View>

      {/* <FilledButton
        title="Press me"
        textColor="#ffffff"
        buttonColor="#2E6B60"
        borderColor="#2E6B60" 
      /> */}
    </View>
  
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: COLORS.primary, 
    flex: 1,
  },
  leenTitle: {
    top: 290,
    left: 180,
    // fontFamily: 'Montserrat-Medium',
    color: COLORS.white,
    fontSize: 80,
  },
  logoImage: {
    left: 90,
    top: 187,
    width: 82,
    height: 82,
    resizeMode: 'contain', // Atur sesuai kebutuhan tampilan gambar
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 260
  },
  presentedBy: {
    fontSize: 12,
    textAlign: 'center',
    color: COLORS.white
  },
  kelompok: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.white
  }
})
export default Welcome;

