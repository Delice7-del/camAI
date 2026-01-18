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
import { Colors } from '../constants/theme';
import LiveFeedDetail from '../components/LiveFeedDetail';
import { useRouter } from 'expo-router';

/* ================= TYPES ================= */
interface Event {
  id: string;
  imageUrl: string;
  timestamp: string;
  location: string;
  isAlert: boolean;
  description: string;
}

/* ================= COMPONENT ================= */
const CameraDetailsScreen: React.FC = () => {
  const router = useRouter();

  const event: Event = {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1000',
    timestamp: '10:12 PM',
    location: 'Front Door',
    isAlert: true,
    description: 'Person detected at front door',
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Live Feed</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerIcon} onPress={() => router.push('/notifications')}>
            <Ionicons name="notifications-outline" size={24} color={Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="chatbubble-outline" size={24} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerDivider} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <LiveFeedDetail
          event={event}
          onBack={() => router.back()}
          onChatWithAI={() => router.push('/ai-chat')}
          onReviewClip={() => router.push('/camera-details')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CameraDetailsScreen;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    flex: 1,
    textAlign: 'center',
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 16,
  },
  headerDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },
});
