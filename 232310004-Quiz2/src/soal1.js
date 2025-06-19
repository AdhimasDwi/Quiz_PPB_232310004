import React from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, Platform } from 'react-native';

const HelloScreen = () => {
  const handleMulaiPress = () => {
    if (Platform.os === 'web'){
        alert('Kuis dimulai');
    }else {
        Alert.alert(
      "Kuis Dimulai!",
      "Anda akan mulai Kuis!", 
    );
    [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        }
      ],
      { cancelable: false }
}
  };

  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>Halo, Selamat Datang di Kuis React Native!</Text>

      
      <Image
        source={{ uri: 'https://cdn-icons-png.freepik.com/512/5486/5486216.png' }}
        style={styles.image}
      />

      
      <Button
        title="Klik Mulai"
        onPress={handleMulaiPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
    borderRadius: 10,
  },
});

export default HelloScreen;