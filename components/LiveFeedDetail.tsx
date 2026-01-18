import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';

/* ================= TYPES ================= */
interface Event {
  id: string;
  imageUrl: string;
  timestamp: string;
  location: string;
  isAlert: boolean;
  description: string;
}

interface LiveFeedDetailProps {
  event: Event;
  onBack: () => void;
  onChatWithAI: () => void;
  onReviewClip: () => void;
}

/* ================= COMPONENT ================= */
const LiveFeedDetail: React.FC<LiveFeedDetailProps> = ({
  event,
  onBack,
  onChatWithAI,
  onReviewClip,
}) => {
  const optimizedImage = `${event.imageUrl}&w=600`;

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: optimizedImage }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>{event.description}</Text>
          <Text style={styles.location}>{event.location}</Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Event Details</Text>
        {/* Timeline */}
        <View style={styles.timelineContainer}>
          <View style={styles.timelineItem}>
            <View
              style={[
                styles.eventIcon,
                { backgroundColor: event.isAlert ? Colors.errorRed : '#E0E0E0' },
              ]}
            >
              <Ionicons
                name="alert-circle-outline"
                size={24}
                color={event.isAlert ? Colors.white : Colors.black}
              />
            </View>
            <Text style={styles.eventTime}>{event.timestamp}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.primaryButton} onPress={onChatWithAI}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={24}
            color={Colors.white}
            style={styles.buttonIcon}
          />
          <Text style={styles.primaryButtonText}>Chat With AI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={onReviewClip}>
          <Ionicons
            name="videocam-outline"
            size={24}
            color={Colors.black}
            style={styles.buttonIcon}
          />
          <Text style={styles.secondaryButtonText}>Review Clip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LiveFeedDetail;

/* ================= STYLES ================= */
const styles = StyleSheet.create<{
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  overlay: ViewStyle;
  title: TextStyle;
  location: TextStyle;
  content: ViewStyle;
  sectionTitle: TextStyle;
  timelineContainer: ViewStyle;
  timelineItem: ViewStyle;
  eventIcon: ViewStyle;
  eventTime: TextStyle;
  primaryButton: ViewStyle;
  primaryButtonText: TextStyle;
  secondaryButton: ViewStyle;
  secondaryButtonText: TextStyle;
  buttonIcon: TextStyle;
}>({
  container: {
    marginBottom: 32,
  },
  imageContainer: {
    height: 220,
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  title: {
    color: Colors.white,
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
  content: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 16,
  },
  timelineContainer: {
    paddingBottom: 8,
  },
  timelineItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  eventIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventTime: {
    color: Colors.grey,
    fontSize: 12,
  },
  primaryButton: {
    backgroundColor: Colors.primaryBlue,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#F5F5F5',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  secondaryButtonText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginRight: 8,
  },
});
