import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/theme';

const TwoFactorAuthenticationScreen: React.FC = () => {
  const router = useRouter();

  const [enabled, setEnabled] = useState(true);
  const [method, setMethod] = useState<'sms' | 'app'>('sms');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Two-factor Authentication</Text>

        <TouchableOpacity onPress={() => router.push('/notifications')}>
          <Ionicons name="notifications-outline" size={22} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Enable 2FA */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.cardTitle}>Enable Two-factor Authentication</Text>
            <Switch value={enabled} onValueChange={setEnabled} />
          </View>

          <Text style={styles.cardDescription}>
            Add an Extra Layer of security to your account by requiring a
            verification code in addition to your password.
          </Text>
        </View>

        {/* Authentication Model */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Choose Authentication Model</Text>

          {/* SMS */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setMethod('sms')}
          >
            <Ionicons
              name={method === 'sms' ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color={Colors.primaryBlue}
            />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>
                Receive a verification code via text message
              </Text>
              <Text style={styles.optionSubtitle}>
                to your registered phone number.
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* Authenticator App */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setMethod('app')}
          >
            <Ionicons
              name={method === 'app' ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color={Colors.primaryBlue}
            />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>
                Use an app like Google Authenticator or Authy
              </Text>
              <Text style={styles.optionSubtitle}>
                to generate codes.
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Recovery Codes */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recovery Codes</Text>
          <Text style={styles.cardDescription}>
            Generate one-time recovery codes to access your account if you lose
            access to your primary authentication method.
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>
            View or Generate Recovery Code
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TwoFactorAuthenticationScreen;

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
    paddingBottom: 32,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  optionText: {
    marginLeft: 10,
    flex: 1,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
  optionSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 12,
  },
  primaryButton: {
    backgroundColor: Colors.primaryBlue,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

