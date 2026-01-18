import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AddCameraScreen: React.FC = () => {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<'power' | 'wifi'>('power');

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add A Camera</Text>
        <Ionicons name="notifications-outline" size={22} color="#000" />
      </View>

      {/* CAMERA IMAGE */}
      <Image
        source={require('../assets/images/camera.png')} // replace path if needed
        style={styles.image}
        resizeMode="contain"
      />

      {/* CONTENT CARD */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Choose Authentication Model</Text>

        {/* POWER ON */}
        <TouchableOpacity
          style={styles.radioRow}
          onPress={() => setAuthMode('power')}
        >
          <Ionicons
            name={authMode === 'power' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color="#4F6EF7"
          />
          <View style={styles.radioText}>
            <Text style={styles.radioTitle}>Power ON</Text>
            <Text style={styles.radioDesc}>
              Plug in the camera and turn in on.
            </Text>
          </View>
        </TouchableOpacity>

        {/* CONNECT WIFI */}
        <TouchableOpacity
          style={styles.radioRow}
          onPress={() => setAuthMode('wifi')}
        >
          <Ionicons
            name={authMode === 'wifi' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color="#4F6EF7"
          />
          <View style={styles.radioText}>
            <Text style={styles.radioTitle}>Connect to WI-FI</Text>
            <Text style={styles.radioDesc}>
              Go to your Wi-Fi settings and connect the camera
            </Text>
          </View>
        </TouchableOpacity>

        {/* SCAN QR */}
        <TouchableOpacity style={styles.qrButton}>
          <Text style={styles.qrText}>Scan QR Code</Text>
        </TouchableOpacity>

        {/* CAMERA NAME */}
        <Text style={styles.label}>Name Your Camera</Text>

        <TouchableOpacity style={styles.dropdown}>
          <Ionicons name="camera-outline" size={18} color="#555" />
          <Text style={styles.dropdownText}>Front Door Camera</Text>
          <Ionicons name="chevron-down" size={18} color="#555" />
        </TouchableOpacity>

        {/* START SETUP */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startText}>Start Setup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddCameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  image: {
    height: 140,
    alignSelf: 'center',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 18,
    padding: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 14,
  },
  radioRow: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  radioText: {
    marginLeft: 10,
  },
  radioTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  radioDesc: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  qrButton: {
    backgroundColor: '#EEF2FF',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 14,
  },
  qrText: {
    color: '#4F6EF7',
    fontWeight: '500',
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E5F0',
    borderRadius: 12,
    padding: 12,
  },
  dropdownText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },
  startButton: {
    backgroundColor: '#4F6EF7',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 18,
  },
  startText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
