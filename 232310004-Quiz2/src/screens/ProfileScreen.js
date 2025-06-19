import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const profileData = {
    name: 'Adhimas Dwi Putra',
    email: 'adhimasdputra@gmail.com',
    bio: 'Selalu antusias untuk belajar hal baru dan menjelajahi dunia. Menikmati setiap momen dan berusaha memberikan dampak positif di sekitar.',
    photoUrl: 'https://img.lovepik.com/free-png/20211208/lovepik-business-person-avatar-png-image_401422459_wh1200.png', 
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: profileData.photoUrl }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>{profileData.name}</Text>
      <Text style={styles.email}>{profileData.email}</Text>
      <Text style={styles.bio}>{profileData.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#007bff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  email: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  bio: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginHorizontal: 20,
    lineHeight: 24,
  },
});

export default ProfileScreen;