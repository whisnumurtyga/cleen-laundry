import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ButtonUnderline = ({ opa, text }) => {
  return (
    <View style={[styles.box]}>
      <View style={styles.group}>
        <Text style={[styles.textWrapper, {opacity: opa}]}>{text}</Text>
        <View style={styles.rectangle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    box: {
        height: 20,
        position: 'relative',
        width: 57,
    },
        group: {
        height: 20,
        left: 0,
        position: 'absolute', // Mungkin perlu disesuaikan dengan kebutuhan Anda
        top: 0,
        width: 59,
    },
    textWrapper: {
        color: '#2e6b60',
        fontSize: 16,
        fontWeight: '600',
        left: 0,
        letterSpacing: 0,
        // opacity: 0.5,
        position: 'absolute',
        top: -100,
        left: 50,
    },
});

export default ButtonUnderline;
