import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Logo from '../../assets/images/logo.png';
// Komponen Today's Attendance Screen
const TodayAttendanceScreen = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.logoText}>ABSENSI SISWA</Text>

      {/* Attendance Buttons */}
      <TouchableOpacity style={styles.presentButton} onPress={() => router.push('/AbsensiHariIni')}>
        <Text style={styles.buttonText}>HADIR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.absentButton}>
        <Text style={styles.buttonText}>IZIN</Text>
      </TouchableOpacity>

      {/* Logout Link */}
      <TouchableOpacity>
        <Text style={styles.logoutText}>ganti akun</Text>
      </TouchableOpacity>
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
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  presentButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  absentButton: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  logoutText: {
    color: '#7f8c8d',
    marginTop: 20,
    fontSize: 14,
  },
});

export default TodayAttendanceScreen;
