import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Latihan3_Tombol = () => {
  const [warna, setWarna] = useState('green');
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const ubahWarna = () => {
   
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

   
    if (warna === 'green') {
      setWarna('red');
    } else {
      setWarna('green');
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.kotak, { backgroundColor: warna, transform: [{ scale: scaleAnim }] }]} />
      <Text style={styles.label}>Warna saat ini: {warna === 'green' ? 'Hijau' : 'Merah'}</Text>
      <TouchableOpacity style={styles.tombolBulat} onPress={ubahWarna}>
        <Text style={styles.textTombol}>Klik</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
    gap: 20,
  },
  kotak: {
    width: 150,
    height: 150,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  tombolBulat: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#00bfa5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 5,
  },
  textTombol: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Latihan3_Tombol;
