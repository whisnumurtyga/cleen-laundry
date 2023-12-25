import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';

const TrackingScreen = ({ navigation }) => {
  const [progress, setProgress] = useState('Order has been accepted');
  const [timestamp, setTimestamp] = useState('');

  const handleProgressChange = (newProgress) => {
    setProgress(newProgress);
    setTimestamp(new Date().toLocaleString());
  };

  const circleSize = 20; // Ukuran lingkaran progres


  return (
    <View style={{ flex: 1, padding: 40 }}>
      {/* Baris atas */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        {/* Icon Back */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: -65 }}>
          <Ionicons name="arrow-back" size={35} color="#2e6b60" />
        </TouchableOpacity>
        
        {/* Judul Tracking */}
        <Text style={{ fontSize: 20 }}>Tracking</Text>
      </View>

      {/* Container untuk status */}
      <View style={{ alignItems: 'flex-start' }}>
        {/* Status: Order has been accepted */}
        <TouchableOpacity onPress={() => handleProgressChange('Order has been accepted')} style={styles.touchableOpacity}>
          <Svg height={circleSize} width={circleSize} style={{ marginRight: 10 }}>
            <Circle cx={circleSize / 2} cy={circleSize / 2} r={circleSize / 2} fill={progress === 'Order has been accepted' ? '#2e6b60' : 'white'} stroke="#2e6b60" strokeWidth={2} />
          </Svg>
          <View style={{ width: '80%' }}>
            <Text style={{ fontSize: 16 }}>Order has been accepted</Text>
            <Text>{progress === 'Order has been accepted' ? timestamp : ''}</Text>
          </View>
        </TouchableOpacity>
        
        {/* Status: Courier on the way to take your laundry */}
        <TouchableOpacity onPress={() => handleProgressChange('Courier on the way to take your laundry')} style={styles.touchableOpacity}>
          <Svg height={circleSize} width={circleSize} style={{ marginRight: 10 }}>
            <Circle cx={circleSize / 2} cy={circleSize / 2} r={circleSize / 2} fill={progress === 'Courier on the way to take your laundry' ? '#2e6b60' : 'white'} stroke="#2e6b60" strokeWidth={2} />
          </Svg>
          <View style={{ width: '80%' }}>
            <Text style={{ fontSize: 16 }}>Courier on the way to take your laundry</Text>
            <Text>{progress === 'Courier on the way to take your laundry' ? timestamp : ''}</Text>
          </View>
        </TouchableOpacity>
        
         {/* Status: Laundry is being done */}
         <TouchableOpacity onPress={() => handleProgressChange('Laundry is being done')} style={styles.touchableOpacity}>
          <Svg height={circleSize} width={circleSize} style={{ marginRight: 10 }}>
            <Circle cx={circleSize / 2} cy={circleSize / 2} r={circleSize / 2} fill={progress === 'Laundry is being done' ? '#2e6b60' : 'white'} stroke="#2e6b60" strokeWidth={2} />
          </Svg>
          <View style={{ width: '80%' }}>
            <Text style={{ fontSize: 16 }}>Laundry is being done</Text>
            <Text>{progress === 'Laundry is being done' ? timestamp : ''}</Text>
          </View>
        </TouchableOpacity>

        {/* Status: Laundry is being delivered */}
        <TouchableOpacity onPress={() => handleProgressChange('Laundry is being delivered')} style={styles.touchableOpacity}>
          <Svg height={circleSize} width={circleSize} style={{ marginRight: 10 }}>
            <Circle cx={circleSize / 2} cy={circleSize / 2} r={circleSize / 2} fill={progress === 'Laundry is being delivered' ? '#2e6b60' : 'white'} stroke="#2e6b60" strokeWidth={2} />
          </Svg>
          <View style={{ width: '80%' }}>
            <Text style={{ fontSize: 16 }}>Laundry is being delivered</Text>
            <Text>{progress === 'Laundry is being delivered' ? timestamp : ''}</Text>
          </View>
        </TouchableOpacity>

          {/* Status: Laundry has been received */}
          <TouchableOpacity onPress={() => handleProgressChange('Laundry has been received')} style={styles.touchableOpacity}>
          <Svg height={circleSize} width={circleSize} style={{ marginRight: 10 }}>
            <Circle cx={circleSize / 2} cy={circleSize / 2} r={circleSize / 2} fill={progress === 'Laundry has been received' ? '#2e6b60' : 'white'} stroke="#2e6b60" strokeWidth={2} />
          </Svg>
          <View style={{ width: '80%' }}>
            <Text style={{ fontSize: 16 }}>Laundry has been received</Text>
            <Text>{progress === 'Laundry has been received' ? timestamp : ''}</Text>
          </View>
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

const styles = {
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
  },
};

export default TrackingScreen;
