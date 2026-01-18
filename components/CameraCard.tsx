import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BaseColors } from '../constants/theme';

const { width } = Dimensions.get('window');

/* ================= TYPES ================= */
interface CameraCardProps {
  title: string;
  location: string;
  imageUrl: string;
  isOnline?: boolean;
  lastActive: string;
  onPressLive: () => void;
}

/* ================= COMPONENT ================= */
const CameraCard: React.FC<CameraCardProps> = memo(
  ({ title, location, imageUrl, isOnline = true, lastActive, onPressLive }) => {
    const optimizedImage = `${imageUrl}&w=600`;

    return (
      <View style={styles.card}>
        {/* Camera Preview */}
        <View style={styles.previewContainer}>
          <Image
            source={{ uri: optimizedImage }}
            style={styles.previewImage}
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>

        {/* Status Row */}
        <View style={styles.statusRow}>
          <Text
            style={[
              styles.statusText,
              { color: isOnline ? '#4CAF50' : BaseColors.errorRed },
            ]}
          >
            {isOnline ? 'Online' : 'Offline'}
          </Text>
          <Text style={styles.activeText}>Active {lastActive}</Text>
        </View>

        <View style={styles.divider} />

        {/* Controls */}
        <View style={styles.controlsRow}>
          <TouchableOpacity style={styles.actionButton} onPress={onPressLive}>
            <Ionicons
              name="videocam-outline"
              size={22}
              color={BaseColors.primaryBlueDark}
            />
            <Text style={styles.actionLabel}>Live</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons
              name="camera-outline"
              size={22}
              color={BaseColors.primaryBlueDark}
            />
            <Text style={styles.actionLabel}>Snapshot</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons
              name="desktop-outline"
              size={22}
              color={BaseColors.primaryBlueDark}
            />
            <Text style={styles.actionLabel}>AI Mode</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

export default CameraCard;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  card: {
    backgroundColor: BaseColors.white,
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  previewContainer: {
    height: 200,
    width: '100%',
    position: 'relative',
  },
  previewImage: {
    height: 200,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  title: {
    color: BaseColors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.54)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  location: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.54)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  statusText: {
    fontWeight: 'bold',
  },
  activeText: {
    color: BaseColors.grey,
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: BaseColors.lightGrey,
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  actionButton: {
    alignItems: 'center',
    padding: 8,
  },
  actionLabel: {
    color: BaseColors.primaryBlueDark,
    fontSize: 12,
    marginTop: 4,
  },
});
