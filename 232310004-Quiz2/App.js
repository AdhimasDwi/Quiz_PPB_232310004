import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import HelloScreen from './src/soal1';
import CounterApp from './src/soal2';
import ListMahasiswa from './src/soal3';
import FormPendaftaran from './src/soal4';

// Import screens untuk Soal 5
import HomeScreen from './src/screens/HomeScreen'; 
import ProfileScreen from './src/screens/ProfileScreen'; 

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    // <HelloScreen />
    // <CounterApp />
    // <ListMahasiswa />
    // <FormPendaftaran />

    // Kode untuk menjalankan Soal 5: Navigasi Antar Halaman
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Halaman Utama' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profil Pengguna' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}