import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const EmailSummariesScreen: React.FC = () => {
  const router = useRouter();
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [dailyDigest, setDailyDigest] = useState(false);
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [promotionalEmails, setPromotionalEmails] = useState(false);

  const renderToggleTile = (
    title: string,
    subtitle: string,
    value: boolean,
    onToggle: (val: boolean) => void
  ) => (
    <View style={styles.tile}>
      <View style={styles.tileTextContainer}>
        <Text style={styles.tileTitle}>{title}</Text>
        <Text style={styles.tileSubtitle}>{subtitle}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#D1D1D1', true: '#007AFF' }}
        thumbColor="#FFFFFF"
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Email Summaries</Text>
        <View style={{ width: 40 }} /> {/* Spacer for center alignment */}
      </View>
      <View style={styles.headerDivider} />

      <ScrollView style={styles.content}>
        <Text style={styles.sectionHeader}>Manage your email preferences</Text>

        <View style={styles.section}>
          {renderToggleTile(
            'Weekly Digest',
            'Get a summary of your camera activity once a week',
            weeklyDigest,
            setWeeklyDigest
          )}

          {renderToggleTile(
            'Daily Digest',
            'Get a daily summary of yesterday’s events',
            dailyDigest,
            setDailyDigest
          )}

          {renderToggleTile(
            'CriticalAlerts',
            'Receive immediate emails for critical security events',
            criticalAlerts,
            setCriticalAlerts
          )}

          {renderToggleTile(
            'Promotional Emails',
            'Stay updated with our latest offers and features',
            promotionalEmails,
            setPromotionalEmails
          )}
        </View>
      </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    marginTop: 10,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F9F9F9',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.01,
    shadowRadius: 10,
  },
  tile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tileTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  tileTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  tileSubtitle: {
    fontSize: 13,
    color: '#999999',
  },
});

export default EmailSummariesScreen;
