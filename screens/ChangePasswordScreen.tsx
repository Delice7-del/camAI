import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';
import CustomTextField from '../components/CustomTextField';
import { useRouter } from 'expo-router';

const ChangePasswordScreen: React.FC = () => {
  const router = useRouter();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);

  const getPasswordStrength = () => {
    if (newPassword.length < 8) return { label: 'Weak', value: 0.3, color: '#E53935' };
    if (newPassword.length < 12) return { label: 'Medium', value: 0.6, color: '#FB8C00' };
    return { label: 'Strong', value: 1, color: '#43A047' };
  };

  const strength = getPasswordStrength();

  const handleSave = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    Alert.alert('Success', 'Password changed successfully', [
      { text: 'OK', onPress: () => router.back() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Change Passwords</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.description}>
          Choose a strong password to protect your account. It should be at least
          8 characters long and include a mix of uppercase, lowercase letters,
          numbers and symbols.
        </Text>

        {/* Current Password */}
        <Text style={styles.label}>Current Password:</Text>
        <CustomTextField
          hintText="Enter Your Current Password"
          isPassword={!showPasswords}
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />

        {/* New Password */}
        <Text style={styles.label}>New Password:</Text>
        <CustomTextField
          hintText="Enter Your New Password"
          isPassword={!showPasswords}
          value={newPassword}
          onChangeText={setNewPassword}
        />

        {/* Strength */}
        <Text style={[styles.strengthText, { color: strength.color }]}>
          Password Strength: {strength.label}
        </Text>
        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progressFill,
              { width: `${strength.value * 100}%`, backgroundColor: strength.color },
            ]}
          />
        </View>

        {/* Confirm */}
        <Text style={styles.label}>Confirm New Password:</Text>
        <CustomTextField
          hintText="Confirm New Password"
          isPassword={!showPasswords}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Show passwords */}
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Show all passwords</Text>
          <Switch value={showPasswords} onValueChange={setShowPasswords} />
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  content: {
    padding: 16,
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 12,
  },
  strengthText: {
    fontSize: 12,
    marginTop: 8,
  },
  progressBackground: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    marginVertical: 6,
  },
  progressFill: {
    height: 6,
    borderRadius: 3,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  switchLabel: {
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: Colors.primaryBlue,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  saveButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelText: {
    textAlign: 'center',
    color: '#777',
    fontSize: 14,
  },
});
