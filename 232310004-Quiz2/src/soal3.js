// src/soal3.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListMahasiswa = () => {
  
  const [mahasiswaData] = useState([
    { id: '1', nama: 'Adhimas Dwi Putra', npm: '232310004' },
    { id: '2', nama: 'Muhammad Arya Nursabilillah', npm: '232310013' },
    { id: '3', nama: 'Muhamad Toriq Rabbani', npm: '232310035' },
    { id: '4', nama: 'Joshua Chrisensa', npm: '232310002' },
    { id: '5', nama: 'Charlos Ferdinand', npm: '232310037' },
  ]);

  
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.npm}>NPM: {item.npm}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Mahasiswa</Text>
     
      <FlatList
        data={mahasiswaData} 
        renderItem={renderItem} 
        keyExtractor={item => item.id} 
        contentContainerStyle={styles.flatListContent} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#e8f5e9', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2e7d32',
  },
  flatListContent: {
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  npm: {
    fontSize: 14,
    color: '#666',
  },
});

export default ListMahasiswa;