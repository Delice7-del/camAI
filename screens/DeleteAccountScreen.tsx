import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/theme';

const DeleteAccountScreen: React.FC = () => {
  const router = useRouter();
  const [confirmationText, setConfirmationText] = useState('');

  const isConfirmed = confirmationText === 'DELETE';

  const handleDelete = () => {
    if (!isConfirmed) return;
    // API call goes here
    console.log('Account deleted');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Delete Account</Text>

        <TouchableOpacity onPress={() => router.push('/notifications')}>
          <Ionicons name="notifications-outline" size={22} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <Text style={styles.subTitle}>Account Settings</Text>

      {/* Overlay */}
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Warning Icon */}
          <Ionicons
            name="warning-outline"
            size={56}
            color="#FF5252"
            style={styles.icon}
          />

          <Text style={styles.modalTitle}>Confirm Account Deletion</Text>

          <Text style={styles.modalDescription}>
            The action is irreversible. All your data, settings, and camera
            configurations will be permanently removed. To proceed, please type
            "DELETE" in the field below.
          </Text>

          {/* Input */}
          <TextInput
            value={confirmationText}
            onChangeText={setConfirmationText}
            placeholder="TYPE DELETE TO CONFIRM"
            placeholderTextColor="#AAA"
            style={styles.input}
            autoCapitalize="characters"
          />

          {/* Cancel */}
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => router.back()}
          >
            <Text style={styles.cancelText}>CANCEL</Text>
          </TouchableOpacity>

          {/* Delete */}
          <TouchableOpacity
            style={[
              styles.deleteButton,
              !isConfirmed && styles.deleteButtonDisabled,
            ]}
            disabled={!isConfirmed}
            onPress={handleDelete}
          >
            <Text style={styles.deleteText}>TYPE DELETE TO CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeleteAccountScreen;

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
  subTitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modal: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.black,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 18,
  },
  input: {
    width: '100%',
    height: 44,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    fontSize: 13,
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 1,
  },
  cancelButton: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    marginBottom: 10,
  },
  cancelText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
  },
  deleteButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#FF5252',
    alignItems: 'center',
  },
  deleteButtonDisabled: {
    backgroundColor: '#FFB3B3',
  },
  deleteText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
