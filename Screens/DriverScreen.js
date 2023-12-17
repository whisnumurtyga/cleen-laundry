import { Center } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';


const DriverScreen = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
        <Image style={{width: "100"}} source={require('../images/Maps.png')}/>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={{paddingBottom: 200, width: 500, height: 300 }}
                source={require('../images/deskripsi.png')}
                resizeMode="contain"
            />
        </View>


    
        
      <View style={styles.bottomContainer}>
        <Image source={require('../images/rin.png')}/>
        <Text style={styles.statusText}>Rin Shima</Text>
        <Text>W 3111 NES</Text> 
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DriverScreen;
