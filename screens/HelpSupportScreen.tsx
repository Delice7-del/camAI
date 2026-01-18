import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/theme';

const HelpSupportScreen: React.FC = () => {
  const router = useRouter();

  const handleFAQPress = () => {
    router.push('/faq');
  };

  const handleContactPress = () => {
    router.push('/contact-support');
  };

  const handleAboutPress = () => {
    router.push('/about');
  };

  const handleChatSupportPress = () => {
    // Open Chat Support
    console.log('Open Chat Support');
  };

  const handleEmailSupportPress = () => {
    // Open Email Support
    console.log('Open Email Support');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Help & Support</Text>

        <TouchableOpacity onPress={() => router.push('/notifications')}>
          <Ionicons name="notifications-outline" size={22} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Help & Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Help & Support</Text>

          {/* FAQ Row */}
          <TouchableOpacity style={styles.optionRow} onPress={handleFAQPress}>
            <Ionicons name="search-outline" size={20} color={Colors.primaryBlue} />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Frequently Asked Questions</Text>
              <Text style={styles.optionSubtitle}>
                Find answers to common questions
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          {/* Contact Support Row */}
          <TouchableOpacity style={styles.optionRow} onPress={handleContactPress}>
            <Ionicons name="call-outline" size={20} color={Colors.primaryBlue} />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Contact Support</Text>
              <Text style={styles.optionSubtitle}>
                Reach out to our support team for help
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          {/* About CamAI Row */}
          <TouchableOpacity style={styles.optionRow} onPress={handleAboutPress}>
            <Ionicons name="information-circle-outline" size={20} color={Colors.primaryBlue} />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>About CamAI</Text>
              <Text style={styles.optionSubtitle}>
                Learn more about the app and its features
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Quick Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Support</Text>

          <View style={styles.quickSupportRow}>
            {/* Chat Support Button */}
            <TouchableOpacity
              style={styles.quickButton}
              onPress={handleChatSupportPress}
            >
              <Ionicons name="chatbubble-outline" size={24} color={Colors.primaryBlue} style={styles.quickIcon} />
              <Text style={styles.quickButtonText}>Chat Support</Text>
            </TouchableOpacity>

            {/* Email Support Button */}
            <TouchableOpacity
              style={styles.quickButton}
              onPress={handleEmailSupportPress}
            >
              <Ionicons name="mail-outline" size={24} color={Colors.primaryBlue} style={styles.quickIcon} />
              <Text style={styles.quickButtonText}>Email Support</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpSupportScreen;

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
  section: {
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
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 12,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  optionText: {
    flex: 1,
    marginLeft: 12,
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 2,
  },
  optionSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  quickSupportRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  quickIcon: {
    marginBottom: 8,
  },
  quickButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primaryBlue,
  },
}); 3