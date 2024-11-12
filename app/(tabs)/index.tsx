import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Logo from '../../assets/images/logo.png';
export default function LoginScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Logo Image */}
        <Image source={Logo} style={styles.logoImage} />
        <Text style={styles.logoText}>ABSENSI SISWA</Text>
      </View>
      
      {/* Login Form Section */}
      <View style={styles.form}>
        {/* Username Input */}
        <TextInput 
          style={[styles.input, styles.yellowBorder]} 
          placeholder="Username" 
          placeholderTextColor="#B0B0B0" 
          defaultValue="feriab99" // example of pre-filled username
        />

        {/* Password Input */}
        <TextInput 
          style={styles.input} 
          placeholder="Masukan password" 
          placeholderTextColor="#B0B0B0" 
          secureTextEntry
        />

        {/* Change Password Link */}
        <TouchableOpacity>
          <Text style={styles.changePassword}>Ganti password</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/HomeScreen')}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', // Yellow color
  },
  form: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 14,
    color: '#333',
  },
  yellowBorder: {
    borderColor: '#FFD700',
  },
  changePassword: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});