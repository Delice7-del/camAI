import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SMAlertsScreen: React.FC = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SMS Alerts</Text>
        <TouchableOpacity style={styles.bellButton}>
          <Image
            source={{ uri: 'https://example.com/bell-icon.png' }} // Replace with actual bell icon URI or local asset
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Illustration - Optional */}
        <View style={styles.illustrationContainer}>
          <Image
            source={{ uri: 'https://example.com/sms-illustration.png' }} // Replace with actual illustration URI or local asset
            style={styles.illustration}
          />
        </View>

        {/* Enable Toggle */}
        <View style={styles.toggleSection}>
          <Text style={styles.sectionTitle}>Enable SMS Alerts</Text>
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#4CAF50' }}
            thumbColor={isEnabled ? '#FFFFFF' : '#F5F5F5'}
            ios_backgroundColor="#E0E0E0"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.description}>Receive critical alerts via text messages</Text>

        {/* Phone Number Input */}
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.textInput}
          placeholder="+250 _____"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 8,
  },
  bellButton: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#000000', // Adjust tint if needed
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  illustration: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  toggleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000000',
    marginBottom: 24,
  },
  saveButton: {
    backgroundColor: '#E3F2FD', // Light blue as per design
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2196F3', // Blue text
  },
});

export default SMAlertsScreen;