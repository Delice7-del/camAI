import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const EditProfileScreen: React.FC = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('Full Name');
  const [email, setEmail] = useState('example@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('Phone number');
  const [password, setPassword] = useState(''); // Assuming empty for password field

  const handleChangePhoto = () => {
    // Implement photo picker logic here (e.g., using expo-image-picker)
    console.log('Change photo pressed');
  };

  const handleSaveChanges = () => {
    // Implement save logic here
    console.log('Save changes');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Top Status Bar Simulation */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.signalIcons} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <TouchableOpacity style={styles.bellButton}>
          <Image
            source={{ uri: 'https://example.com/bell-icon.png' }} // Replace with actual bell icon URI or local asset
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.pageTitle}>Edit Profile</Text>

        {/* Profile Photo */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://example.com/profile-avatar.png' }} // Replace with actual profile photo URI or local asset
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.changePhotoButton} onPress={handleChangePhoto}>
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.form}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.textInput}
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder="Enter new password"
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
            <Text style={styles.saveButtonText}>Save The Changes</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{ uri: 'https://example.com/home-icon.png' }} // Replace with actual home icon
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{ uri: 'https://example.com/alerts-icon.png' }} // Replace with actual alerts icon
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{ uri: 'https://example.com/search-icon.png' }} // Replace with actual search icon
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Image
            source={{ uri: 'https://example.com/settings-icon.png' }} // Replace with actual settings icon
            style={[styles.navIcon, styles.activeNavIcon]}
          />
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Settings</Text>
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
  signalIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#F8F8F8',
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
  content: {
    flex: 1,
    padding: 24,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 24,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  changePhotoButton: {
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  changePhotoText: {
    fontSize: 14,
    color: '#007AFF',
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
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
    // Active state for Settings
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#999999',
  },
  activeNavIcon: {
    tintColor: '#007AFF',
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

export default EditProfileScreen;