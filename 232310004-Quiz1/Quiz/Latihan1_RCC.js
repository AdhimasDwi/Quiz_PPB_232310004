import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Latihan1_RCC extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={{
              uri: 'https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=700&q=90',
            }}
            style={styles.avatar}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Nama : Adhimas Dwi Putra</Text>
            <Text style={styles.text}>NPM   : 232310004</Text>
            <Text style={styles.text}>Jurusan : Teknologi Informasi</Text>
            <Text style={styles.text}>Hobi : Bermain Game</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff3e0',
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 115,
    borderRadius: 10, 
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 13.8,
    marginBottom: 8,
    color: 'black',
    textAlign: 'left',
  },
});

export default Latihan1_RCC;
