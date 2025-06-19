import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

const FormPendaftaran = () => {
  
  const [namaLengkap, setNamaLengkap] = useState('');
  const [email, setEmail] = useState('');
  const [nomorHP, setNomorHP] = useState('');

  
  const [namaLengkapError, setNamaLengkapError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nomorHPError, setNomorHPError] = useState('');

  const handleSubmit = () => {
    setNamaLengkapError('');
    setEmailError('');
    setNomorHPError('');

    let isValid = true;

    
    if (namaLengkap.trim() === '') {
      setNamaLengkapError('Nama Lengkap tidak boleh kosong.');
      isValid = false;
    }

    // Validasi Email
    if (email.trim() === '') {
      setEmailError('Email tidak boleh kosong.');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) { 
      setEmailError('Format email tidak valid.');
      isValid = false;
    }

   
    if (nomorHP.trim() === '') {
      setNomorHPError('Nomor HP tidak boleh kosong.');
      isValid = false;
    } else if (!/^[0-9]+$/.test(nomorHP) || nomorHP.length < 10 || nomorHP.length > 13) { 
      setNomorHPError('Nomor HP tidak valid (hanya angka, 10-13 digit).');
      isValid = false;
    }

    if (isValid) {
      
      Alert.alert(
        "Pendaftaran Berhasil!",
        `Nama Lengkap: ${namaLengkap}\nEmail: ${email}\nNomor HP: ${nomorHP}`,
        [
          { text: "OK", onPress: () => console.log("OK Pressed, data submitted") }
        ],
        { cancelable: false }
      );
      
      setNamaLengkap('');
      setEmail('');
      setNomorHP('');
    } else {
      
      Alert.alert("Error Validasi", "Harap Isi Semua Kolom Dengan Benar.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Form Pendaftaran</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nama Lengkap:</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nama lengkap Anda"
            value={namaLengkap}
            onChangeText={setNamaLengkap}
          />
          {namaLengkapError ? <Text style={styles.errorText}>{namaLengkapError}</Text> : null}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan email Anda"
            value={email}
            onChangeText={setEmail}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nomor HP:</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nomor HP Anda"
            keyboardType="numeric" 
            value={nomorHP}
            onChangeText={setNomorHP}
            maxLength={13} 
          />
          {nomorHPError ? <Text style={styles.errorText}>{nomorHPError}</Text> : null}
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Submit"
            onPress={handleSubmit}
            color="#4CAF50" 
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
    fontWeight: '600',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  buttonWrapper: {
    marginTop: 30,
    width: '80%', 
    borderRadius: 8,
    overflow: 'hidden', 
  },
});

export default FormPendaftaran;