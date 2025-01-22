import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
// Import logo dari folder assets/images
import logo from '../../assets/images/logo.png';
const AttendanceSuccessfulScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} />
      <Text style={styles.logoText}></Text>

      {/* Pesan Sukses */}
      <Text style={styles.successMessage}>Selamat anda</Text>
      <Text style={styles.successHighlight}>Berhasil Izin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 30,
  },
  successMessage: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 20,
  },
  successHighlight: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 5,
  },
});

export default AttendanceSuccessfulScreen;
