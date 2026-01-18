import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PrivacyDataScreen: React.FC = () => {
  const router = useRouter();
  const [dataSharingEnabled, setDataSharingEnabled] = useState(false);

  const toggleDataSharing = () => setDataSharingEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy & Data</Text>
        <TouchableOpacity style={styles.bellButton} onPress={() => router.push('/notifications')}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContent}>
        {/* Data Protection Policy Item */}
        <View style={styles.policyItem}>
          <Ionicons name="radio-button-on" size={20} color="#2196F3" style={styles.icon} />
          <View style={styles.textContent}>
            <Text style={styles.itemTitle}>Data Protection Policy</Text>
            <Text style={styles.itemSubtitle}>
              We are committed to protecting your privacy and{'\n'}
              ensuring the security of your personal data. This{'\n'}
              Policy outlines how we collect, use and safeguard{'\n'}
              your information
            </Text>
          </View>
        </View>

        {/* Data Sharing Item */}
        <View style={styles.policyItem}>
          <Ionicons name="radio-button-off" size={20} color="#666" style={styles.icon} />
          <View style={styles.textContent}>
            <Text style={styles.itemTitle}>Data Sharing with Partners</Text>
            <Text style={styles.itemSubtitle}>
              Share data with partners to help improve AI models and features by sharing{'\n'}
              anonymous usage data with most trusted{'\n'}
              partners. Your personal identity remain confidential
            </Text>
          </View>
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
            thumbColor={dataSharingEnabled ? '#FFFFFF' : '#F5F5F5'}
            ios_backgroundColor="#E0E0E0"
            onValueChange={toggleDataSharing}
            value={dataSharingEnabled}
          />
        </View>

        {/* View Full Policy Row */}
        <TouchableOpacity style={styles.viewPolicyRow}>
          <Ionicons name="document-text-outline" size={24} color="#2196F3" />
          <View style={styles.viewPolicyContent}>
            <Text style={styles.viewPolicyText}>View Full Privacy Policy</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#999" />
        </TouchableOpacity>
      </ScrollView>
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
  scrollContent: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  policyItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    marginTop: 2,
    marginRight: 12,
  },
  textContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  viewPolicyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  viewPolicyContent: {
    flex: 1,
    marginLeft: 12,
  },
  viewPolicyText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});

export default PrivacyDataScreen;