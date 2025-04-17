import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Latihan2_Form = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Lengkap</Text>
      <TextInput
        style={styles.input}
        value={nama}
        onChangeText={setNama}
        placeholder="Masukkan Nama Lengkap"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Masukkan Email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>No Telepon</Text>
      <TextInput
        style={styles.input}
        value={noTelp}
        onChangeText={setNoTelp}
        placeholder="Masukkan No Telepon"
        keyboardType="phone-pad"
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>

      {submitted && (
        <View style={styles.outputContainer}>
          <Text style={styles.outputTitle}>Hasil </Text>
          <Text>Nama  : {nama}</Text>
          <Text>Email   : {email}</Text>
          <Text>No Telp : {noTelp}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  outputContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
  },
  outputTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
});

export default Latihan2_Form;
