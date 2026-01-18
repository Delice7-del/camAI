import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, BaseColors } from '../constants/theme';

/* ================= TYPES ================= */

interface AlertCardProps {
  cameraName: string;
  time: string;
  imageUrl: string;
  detectionType: string;
  description: string;
  onChatWithAI: () => void;
  onReviewClip: () => void;
}

/* ================= COMPONENT ================= */

const AlertCard: React.FC<AlertCardProps> = memo(
  ({
    cameraName,
    time,
    imageUrl,
    detectionType,
    description,
    onChatWithAI,
    onReviewClip,
  }) => {
    // Optimize Unsplash image quality
    const optimizedImage = `${imageUrl}&w=600`;

    return (
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.cameraInfo}>
            <Ionicons
              name="videocam-outline"
              size={18}
              color={BaseColors.grey}
            />
            <Text style={styles.cameraName}>{cameraName}</Text>
          </View>

          <View style={styles.timeInfo}>
            <Ionicons
              name="time-outline"
              size={16}
              color={BaseColors.grey}
            />
            <Text style={styles.timeText}>{time}</Text>
          </View>
        </View>

        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: optimizedImage }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.detectionType}>{detectionType}</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>

        {/* Actions */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={onChatWithAI}
          >
            <Ionicons
              name="chatbubble-outline"
              size={18}
              color={BaseColors.black}
              style={styles.buttonIcon}
            />
            <Text style={styles.chatButtonText}>Chat With AI</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.reviewButton}
            onPress={onReviewClip}
          >
            <Ionicons
              name="videocam-outline"
              size={18}
              color={BaseColors.white}
              style={styles.buttonIcon}
            />
            <Text style={styles.reviewButtonText}>Review Clip</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footerRow}>
          <TouchableOpacity style={styles.footerItem}>
            <Ionicons
              name="share-outline"
              size={18}
              color={BaseColors.grey}
            />
            <Text style={styles.footerText}>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerItem}>
            <Ionicons
              name="checkmark-circle-outline"
              size={18}
              color={BaseColors.grey}
            />
            <Text style={styles.footerText}>Mark Resolved</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

export default AlertCard;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  card: {
    backgroundColor: BaseColors.white,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    alignItems: 'center',
  },
  cameraInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cameraName: {
    fontWeight: '600',
    color: BaseColors.grey,
    marginLeft: 8,
  },
  timeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: BaseColors.grey,
    fontSize: 13,
    marginLeft: 4,
  },
  imageContainer: {
    height: 200,
    width: '100%',
    position: 'relative',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    justifyContent: 'flex-end',
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  detectionType: {
    color: BaseColors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionContainer: {
    padding: 16,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: BaseColors.black,
  },
  actionRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  chatButton: {
    flex: 1,
    height: 44,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  chatButtonText: {
    color: BaseColors.black,
    fontWeight: '600',
  },
  reviewButton: {
    flex: 1,
    height: 44,
    backgroundColor: Colors.primaryBlueDark,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewButtonText: {
    color: BaseColors.white,
    fontWeight: '600',
  },
  buttonIcon: {
    marginRight: 6,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: BaseColors.grey,
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 6,
  },
});
