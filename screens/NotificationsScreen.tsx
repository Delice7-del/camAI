import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const NotificationsScreen: React.FC = () => {
  const router = useRouter();
  const [pushEnabled, setPushEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(true);

  const togglePush = () => setPushEnabled(previousState => !previousState);
  const toggleSms = () => setSmsEnabled(previousState => !previousState);
  const toggleEmail = () => setEmailEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.bellButton}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        
        <View style={styles.toggleRow}>
          <View style={styles.toggleContent}>
            <Text style={styles.toggleTitle}>Push Notifications</Text>
            <Text style={styles.toggleSubtitle}>Receive real-time alerts on your device</Text>
          </View>
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
            thumbColor={pushEnabled ? '#FFFFFF' : '#F5F5F5'}
            ios_backgroundColor="#E0E0E0"
            onValueChange={togglePush}
            value={pushEnabled}
          />
        </View>

        <View style={styles.toggleRow}>
          <View style={styles.toggleContent}>
            <Text style={styles.toggleTitle}>SMS Alerts</Text>
            <Text style={styles.toggleSubtitle}>Get critical alerts via text messages</Text>
          </View>
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
            thumbColor={smsEnabled ? '#FFFFFF' : '#F5F5F5'}
            ios_backgroundColor="#E0E0E0"
            onValueChange={toggleSms}
            value={smsEnabled}
          />
        </View>

        <View style={styles.toggleRow}>
          <View style={styles.toggleContent}>
            <Text style={styles.toggleTitle}>Email Summaries</Text>
            <Text style={styles.toggleSubtitle}>Receive daily or weekly alerts summaries</Text>
          </View>
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
            thumbColor={emailEnabled ? '#FFFFFF' : '#F5F5F5'}
            ios_backgroundColor="#E0E0E0"
            onValueChange={toggleEmail}
            value={emailEnabled}
          />
        </View>
      </View>

      {/* Advanced Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Advanced settings</Text>
        
        <TouchableOpacity style={styles.advancedRow}>
          <Ionicons name="settings-outline" size={24} color="#666" />
          <View style={styles.advancedContent}>
            <Text style={styles.advancedTitle}>Manage Notification Groups</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.advancedRow} onPress={() => router.push('/privacy-data')}>
          <Ionicons name="settings-outline" size={24} color="#666" />
          <View style={styles.advancedContent}>
            <Text style={styles.advancedTitle}>Data Protection Policy</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#999" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  bellButton: {
    padding: 4,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  toggleContent: {
    flex: 1,
  },
  toggleTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  toggleSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  advancedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  advancedContent: {
    flex: 1,
    marginLeft: 12,
  },
  advancedTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});

export default NotificationsScreen;