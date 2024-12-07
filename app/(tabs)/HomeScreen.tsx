import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
// Komponen HomeScreen
const HomeScreen = () => {
const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Selamat Datang, Siswa!</Text>
        <Text style={styles.subtitle}>Aplikasi Absensi Siswa</Text>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/AbsensiHariIni')}>
          <Text style={styles.cardTitle}>Absensi Hari Ini</Text> 
          <Text style={styles.cardContent}>Klik untuk melihat absensi hari ini</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}> 
          <Text style={styles.cardTitle}>Riwayat Absensi</Text>
          <Text style={styles.cardContent}>Lihat riwayat absensi kamu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Jadwal Kelas</Text>
          <Text style={styles.cardContent}>Cek jadwal kelas kamu</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Keluar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  cardContainer: {
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
  },
  cardContent: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
