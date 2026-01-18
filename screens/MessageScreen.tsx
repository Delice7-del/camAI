import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,

} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface Alert {
  id: string;
  time: string;
  title: string;
  description: string;
  timestamp: string;
}

const MessagesScreen: React.FC = () => {
  const router = useRouter();
  const [currentTime] = useState('9:41'); // Static for demo; use real time library in production

  const alerts: Alert[] = [
    {
      id: '1',
      time: 'Mon 11:30 AM',
      title: 'Front door',
      description: 'Person detected at front door. Check the live feed for details.',
      timestamp: '2 min ago',
    },
    {
      id: '2',
      time: '2 min ago',
      title: 'Person detected in backyard',
      description: 'Tap to view the camera feed.',
      timestamp: '2 min ago',
    },
    {
      id: '3',
      time: '2 min ago',
      title: 'A suspicious person was detected in the hallway.',
      description: 'Tap to view open the door feed and left.',
      timestamp: '2 min ago',
    },
    {
      id: '4',
      time: '2 min ago',
      title: 'Person detected in backyard',
      description: 'Tap to view the camera feed.',
      timestamp: '2 min ago',
    },
  ];

  const renderAlertItem = ({ item }: { item: Alert }) => (
    <View style={styles.messageBubble}>
      <Text style={styles.messageTime}>{item.time}</Text>
      <Text style={styles.messageTitle}>{item.title}</Text>
      <Text style={styles.messageDescription}>{item.description}</Text>
      <Text style={styles.messageTimestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Top Status Bar Simulation */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <View style={styles.signalBars} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity style={styles.bellButton}>
          <Image
            source={{ uri: 'https://example.com/bell-icon.png' }} // Replace with actual bell icon URI or local asset
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Text Messages Section */}
      <View style={styles.textMessagesSection}>
        <Image
          source={{ uri: 'https://example.com/profile-avatar.png' }} // Replace with actual avatar URI or local asset
          style={styles.avatar}
        />
        <Text style={styles.textMessagesLabel}>Text Messages</Text>
      </View>

      {/* Alerts List */}
      <FlatList
        data={alerts}
        renderItem={renderAlertItem}
        keyExtractor={(item) => item.id}
        style={styles.alertsList}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{ uri: 'https://example.com/home-icon.png' }} // Replace with actual home icon
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Image
            source={{ uri: 'https://example.com/alerts-icon.png' }} // Replace with actual alerts icon
            style={[styles.navIcon, styles.activeNavIcon]}
          />
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{ uri: 'https://example.com/search-icon.png' }} // Replace with actual search icon
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{ uri: 'https://example.com/settings-icon.png' }} // Replace with actual settings icon
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Settings</Text>
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
  statusBar: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F8F8F8',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  signalBars: {
    width: 60,
    height: 10,
    backgroundColor: '#E0E0E0', // Simplified signal bars; use actual icons or SVG for bars
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
    tintColor: '#000000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  textMessagesSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  textMessagesLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  alertsList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  messageBubble: {
    backgroundColor: '#F8F8F8',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  messageTime: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  messageTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  messageDescription: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
    marginBottom: 4,
  },
  messageTimestamp: {
    fontSize: 12,
    color: '#999999',
    alignSelf: 'flex-end',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  navItem: {
    alignItems: 'center',
    padding: 4,
  },
  activeNavItem: {
    // No additional style needed if active is just color change on icon/text
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#999999',
  },
  activeNavIcon: {
    tintColor: '#007AFF', // Blue for active
  },
  navLabel: {
    fontSize: 10,
    color: '#999999',
    marginTop: 2,
  },
  activeNavLabel: {
    color: '#007AFF',
  },
});

export default MessagesScreen;