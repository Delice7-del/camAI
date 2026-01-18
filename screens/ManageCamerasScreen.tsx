import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/theme';

type Camera = {
  id: string;
  title: string;
  status: 'Online' | 'Offline' | 'Recording';
  location: string;
  message: string;
  image: string; // URI or require path
  online: boolean;
};

const ManageCamerasScreen: React.FC = () => {
  const router = useRouter();

  const cameras: Camera[] = [
    {
      id: '1',
      title: 'Front Door Camera',
      status: 'Online',
      location: 'Main Entrance',
      message: 'Motion Detected 6 minutes ago',
      image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80', // Placeholder
      online: true,
    },
    {
      id: '2',
      title: 'Living Room Camera',
      status: 'Online',
      location: 'Living Area',
      message: 'Motion Detected 20 minutes ago',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80', // Placeholder
      online: true,
    },
    {
      id: '3',
      title: 'Backyard Camera',
      status: 'Recording',
      location: 'Garden Area',
      message: 'Continuous Recording Active',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80', // Placeholder
      online: true,
    },
    {
      id: '4',
      title: 'Hallway Camera',
      status: 'Offline',
      location: 'Main Entrance',
      message: 'Disconnected 5 minutes ago',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80', // Placeholder
      online: false,
    },
  ];

  const handleDetails = (cameraId: string) => {
    // Navigate to details
    console.log(`Details for ${cameraId}`);
  };

  const handleRemove = (cameraId: string) => {
    // Remove camera logic
    console.log(`Remove ${cameraId}`);
  };

  const handleAddNewCamera = () => {
    // Navigate to add camera screen
    router.push('/add-camera');
  };

  const handleManagePairedDevices = () => {
    // Manage paired devices logic
    console.log('Manage paired devices');
  };

  const handleViewCameraFeeds = () => {
    router.push('/camera-feeds');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Manage Cameras</Text>

        <TouchableOpacity onPress={() => router.push('/notifications')}>
          <Ionicons name="notifications-outline" size={22} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        {/* Navigation to New Feeds Screen */}
        <TouchableOpacity style={styles.feedsButton} onPress={handleViewCameraFeeds}>
          <Ionicons name="grid-outline" size={20} color={Colors.white} style={{ marginRight: 8 }} />
          <Text style={styles.feedsButtonText}>View All Camera Feeds</Text>
        </TouchableOpacity>

        {/* Your Cameras Section */}
        <Text style={styles.sectionTitle}>Your Cameras</Text>

        {cameras.map((camera) => (
          <View key={camera.id} style={styles.cameraCard}>
            <TouchableOpacity style={styles.imageContainer} activeOpacity={0.8}>
              <Image source={{ uri: camera.image }} style={styles.cameraImage} />
            </TouchableOpacity>

            <View style={styles.cameraInfo}>
              <Text style={styles.cameraTitle}>{camera.title}</Text>
              <View style={styles.statusRow}>
                <Text style={[
                  styles.status,
                  { color: camera.online ? Colors.primaryBlue : Colors.errorRed }
                ]}>
                  {camera.status}
                </Text>
                <Text style={styles.location}>{camera.location}</Text>
              </View>
              <Text style={styles.message}>{camera.message}</Text>

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => handleDetails(camera.id)}
                >
                  <Text style={styles.detailsButtonText}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemove(camera.id)}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* Connect a New Camera Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connect a new camera</Text>

          <View style={styles.featureCard}>
            <Ionicons
              name="ellipse"
              size={20}
              color={Colors.primaryBlue}
              style={styles.featureIcon}
            />
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>New Camera Setup</Text>
              <Text style={styles.featureDescription}>
                Seamlessly add new security cameras to your system
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.addButton} onPress={handleAddNewCamera}>
            <Ionicons name="add-circle-outline" size={24} color={Colors.primaryBlue} />
            <Text style={styles.addButtonText}>+ Add New Camera</Text>
          </TouchableOpacity>
        </View>

        {/* Device Pairing Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Device Pairing</Text>

          <View style={styles.featureCard}>
            <Ionicons
              name="ellipse-outline"
              size={20}
              color={Colors.primaryBlue}
              style={styles.featureIcon}
            />
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Pair Smart Devices</Text>
              <Text style={styles.featureDescription}>
                Connect other devices to enhance your security system
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.manageButton} onPress={handleManagePairedDevices}>
            <Text style={styles.manageButtonText}>Manage Paired Devices</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primaryBlue} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageCamerasScreen;

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
  feedsButton: {
    backgroundColor: Colors.primaryBlue,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  feedsButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 12,
  },
  cameraCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    flexDirection: 'row',
  },
  imageContainer: {
    marginRight: 12,
  },
  cameraImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
  },
  cameraInfo: {
    flex: 1,
  },
  cameraTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 4,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  status: {
    fontSize: 13,
    fontWeight: '600',
    marginRight: 8,
  },
  location: {
    fontSize: 13,
    color: '#666',
  },
  message: {
    fontSize: 13,
    color: Colors.primaryBlue,
    marginBottom: 12,
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  detailsButton: {
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  detailsButtonText: {
    color: Colors.primaryBlue,
    fontSize: 12,
    fontWeight: '500',
  },
  removeButton: {
    backgroundColor: Colors.errorRed,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  removeButtonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
  section: {
    marginTop: 24,
  },
  featureCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  featureIcon: {
    marginTop: 2,
    marginRight: 12,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  addButton: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    borderRadius: 8,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  addButtonText: {
    color: Colors.primaryBlue,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  manageButton: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  manageButtonText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: 'bold',
  },
});