import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';
import AlertCard from '../components/AlertCard';

/* ================= TYPES ================= */
interface AlertItem {
  id: string;
  cameraName: string;
  time: string;
  imageUrl: string;
  detectionType: string;
  description: string;
}

import { useRouter } from 'expo-router';

/* ================= DATA ================= */
const severities = ['High', 'Medium', 'Low'] as const;
const types = ['Person', 'Motion', 'Object'] as const;

const alerts: AlertItem[] = [
  {
    id: '1',
    cameraName: 'Front Door Camera',
    time: '10:10 AM',
    imageUrl:
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80',
    detectionType: 'Person Detected',
    description:
      'Suspicious individual detected loitering near the front entrance for over 2 minutes. Behaviour appears unusual.',
  },
  {
    id: '2',
    cameraName: 'Living Room Camera',
    time: '10:10 AM',
    imageUrl:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    detectionType: 'Motion Detected',
    description:
      'Unexpected motion detected inside the living room. Could be a pet or minor anomaly.',
  },
  {
    id: '3',
    cameraName: 'Garage Camera',
    time: '10:10 AM',
    imageUrl:
      'https://tse3.mm.bing.net/th/id/OIP.3_O_4ibqE1gJVQ1sWu2E_gHaFL?rs=1&pid=ImgDetMain&o=7&rm=3',
    detectionType: 'Door Left Open',
    description:
      'Garage door left open for an extended period. Potential security oversight.',
  },
];

/* ================= COMPONENT ================= */
const AlertsTimelineScreen: React.FC = () => {
  const router = useRouter();
  const [selectedSeverity, setSelectedSeverity] = useState<typeof severities[number]>('High');
  const [selectedType, setSelectedType] = useState<typeof types[number]>('Person');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alerts Timeline</Text>
        <TouchableOpacity>
          <Ionicons name="save-outline" size={24} color={Colors.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerDivider} />

      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View style={styles.filtersSection}>
            {/* Severity Selection */}
            <Text style={styles.filterTitle}>Severity</Text>
            <View style={styles.chipRow}>
              {severities.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[styles.chip, selectedSeverity === item && styles.chipSelected]}
                  onPress={() => setSelectedSeverity(item)}
                >
                  <Text style={[styles.chipText, selectedSeverity === item && styles.chipTextSelected]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Detection Type */}
            <Text style={[styles.filterTitle, { marginTop: 24 }]}>Detection Type</Text>
            <View style={styles.chipRow}>
              {types.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[styles.chip, selectedType === item && styles.chipSelected]}
                  onPress={() => setSelectedType(item)}
                >
                  <Text style={[styles.chipText, selectedType === item && styles.chipTextSelected]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.divider} />
            <Text style={styles.dateHeader}>Today, October 26</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.alertsSection}>
            <AlertCard
              {...item}
              onChatWithAI={() => router.push('/ai-chat')}
              onReviewClip={() => router.push('/camera-details')}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default AlertsTimelineScreen;

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
  headerDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },
  filtersSection: {
    padding: 16,
  },
  filterTitle: {
    color: Colors.grey,
    fontWeight: '500',
    marginBottom: 12,
  },
  chipRow: {
    flexDirection: 'row',
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    marginRight: 12,
    backgroundColor: Colors.white,
  },
  chipSelected: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  chipText: {
    color: Colors.black,
    fontSize: 14,
  },
  chipTextSelected: {
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.lightGrey,
    marginHorizontal: 16,
  },
  alertsSection: {
    paddingHorizontal: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  dateHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 16,
    color: Colors.black,
  },
});
