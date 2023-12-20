import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle, Line } from 'react-native-svg';

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

      {/* Baris untuk SVG dan status */}
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        {/* SVG untuk progres */}
        <Svg height={circleSize * 5} width={circleSize} style={{ marginLeft: 10 }}>
          {/* Garis penghubung */}
          <Line x1={circleSize / 2} y1={0} x2={circleSize / 2} y2={circleSize * 5} stroke="#2e6b60" strokeWidth={2} />
          
          {/* Lingkaran-langkaran progres */}
        <Circle cx={circleSize / 2} cy={circleSize / 2} r={circleSize / 2} fill={progress === 'Order has been accepted' ? '#2e6b60' : 'white'} stroke="#2e6b60" strokeWidth={2} />
        <Circle cx={circleSize / 2} cy={circleSize * 1.5} r={circleSize / 2} fill={progress === 'Courier on the way to take your laundry' ? '#2e6b60' : 'white'} stroke="#2e6b60" strokeWidth={2} />
        <Circle cx={circleSize / 2} cy={circleSize * 2.5} r={circleSize / 2} fill={progress === 'Laundry is being done' ? '#2e6b60' : 'white'} stroke="#2e6b60" strokeWidth={2} />
        <Circle cx={circleSize / 2} cy={circleSize * 3.5} r={circleSize / 2} fill={progress === 'Laundry is being delivered' ? '#2e6b60' : 'white'} stroke="#2e6b60" strokeWidth={2} />
        <Circle cx={circleSize / 2} cy={circleSize * 4.5} r={circleSize / 2} fill={progress === 'Laundry has been received' ? '#2e6b60' : 'white'} stroke="#2e6b60" strokeWidth={2} />
        </Svg>

        {/* Baris untuk status */}
        <View style={{ marginLeft: 10 }}>
          {/* Status: Order has been accepted */}
          <TouchableOpacity onPress={() => handleProgressChange('Order has been accepted')} style={styles.touchableOpacity}>
            <View style={{ width: '80%' }}>
              <Text style={{ fontSize: 16 }}>Order has been accepted</Text>
              <Text>{progress === 'Order has been accepted' ? timestamp : ''}</Text>
            </View>
          </TouchableOpacity>
          
          {/* Status: Courier on the way */}
          <TouchableOpacity onPress={() => handleProgressChange('Courier on the way to take your laundry')} style={styles.touchableOpacity}>
            <View style={{ width: '80%' }}>
              <Text style={{ fontSize: 16 }}>Courier on the way to take your laundry</Text>
              <Text>{progress === 'Courier on the way to take your laundry' ? timestamp : ''}</Text>
            </View>
          </TouchableOpacity>
        
          {/* Status: Laundry is being done */}
          <TouchableOpacity onPress={() => handleProgressChange('Laundry is being done')} style={styles.touchableOpacity}>
            <View style={{ width: '80%' }}>
              <Text style={{ fontSize: 16 }}>Laundry is being done</Text>
              <Text>{progress === 'Laundry is being done' ? timestamp : ''}</Text>
            </View>
          </TouchableOpacity>

          {/* Status: Laundry is being delivered */}
          <TouchableOpacity onPress={() => handleProgressChange('Laundry is being delivered')} style={styles.touchableOpacity}>
            <View style={{ width: '80%' }}>
              <Text style={{ fontSize: 16 }}>Laundry is being delivered</Text>
              <Text>{progress === 'Laundry is being delivered' ? timestamp : ''}</Text>
            </View>
          </TouchableOpacity>

          {/* Status: Laundry has been received */}
          <TouchableOpacity onPress={() => handleProgressChange('Laundry has been received')} style={styles.touchableOpacity}>
            <View style={{ width: '80%' }}>
              <Text style={{ fontSize: 16 }}>Laundry has been received</Text>
              <Text>{progress === 'Laundry has been received' ? timestamp : ''}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  touchableOpacity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '80%',
  },
};

export default TrackingScreen;
