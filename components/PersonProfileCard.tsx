import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import { Colors } from '../constants/theme';

/* ================= TYPES ================= */
interface PersonProfileCardProps {
  name: string;
  imageUrl: string;
  confidence: string | number;
  onViewClips: () => void;
  onSaveProfile: () => void;
  style?: ViewStyle;
}

/* ================= COMPONENT ================= */
const PersonProfileCard: React.FC<PersonProfileCardProps> = ({
  name,
  imageUrl,
  confidence,
  onViewClips,
  onSaveProfile,
  style,
}) => {
  return (
    <View style={[styles.card, style]}>
      {/* Profile Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.confidenceText}>Confidence {confidence}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.viewClipsButton} onPress={onViewClips}>
            <Text style={styles.viewClipsText}>View Clips</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveProfileButton} onPress={onSaveProfile}>
            <Text style={styles.saveProfileText}>Save Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PersonProfileCard;

/* ================= STYLES ================= */
const styles = StyleSheet.create<{
  card: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  infoContainer: ViewStyle;
  name: TextStyle;
  confidenceText: TextStyle;
  buttonRow: ViewStyle;
  viewClipsButton: ViewStyle;
  viewClipsText: TextStyle;
  saveProfileButton: ViewStyle;
  saveProfileText: TextStyle;
}>({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    overflow: 'hidden',
    flex: 1,
  },
  imageContainer: {
    height: 120,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  infoContainer: {
    padding: 8,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.black,
  },
  confidenceText: {
    color: Colors.grey,
    fontSize: 11,
    marginTop: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 8,
    width: '100%',
  },
  viewClipsButton: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 4,
  },
  viewClipsText: {
    fontSize: 10,
    color: Colors.black,
    fontWeight: '600',
  },
  saveProfileButton: {
    flex: 1,
    backgroundColor: Colors.primaryBlueDark,
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
  },
  saveProfileText: {
    fontSize: 10,
    color: Colors.white,
    fontWeight: '600',
  },
});
