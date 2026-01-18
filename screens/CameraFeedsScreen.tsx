import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/theme';
import CameraFeedCard, { TimelineEvent } from '../components/CameraFeedCard';

interface CameraData {
    id: string;
    title: string;
    location: string;
    image: string;
    events: TimelineEvent[];
}

const CameraFeedsScreen: React.FC = () => {
    const router = useRouter();

    // Mock Data matching the requirements
    const cameras: CameraData[] = [
        {
            id: '1',
            title: 'Living Room Camera',
            location: 'interior',
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
            events: [
                { id: '1', time: '09:00', type: 'default', isAlert: false },
                { id: '2', time: '09:15', type: 'motion', isAlert: true },
                { id: '3', time: '09:30', type: 'default', isAlert: false },
                { id: '4', time: '09:45', type: 'motion', isAlert: true },
                { id: '5', time: '10:00', type: 'default', isAlert: false },
                { id: '6', time: '10:15', type: 'motion', isAlert: true },
            ]
        },
        {
            id: '2',
            title: 'Garage Camera',
            location: 'interior',
            image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80',
            events: [
                { id: '1', time: '11:00', type: 'default', isAlert: false },
                { id: '2', time: '11:15', type: 'motion', isAlert: true },
                { id: '3', time: '11:30', type: 'default', isAlert: false },
                { id: '4', time: '11:45', type: 'motion', isAlert: true },
                { id: '5', time: '12:00', type: 'default', isAlert: false },
                { id: '6', time: '12:15', type: 'motion', isAlert: true },
            ]
        },
        {
            id: '3',
            title: 'Hallway Camera',
            location: 'interior',
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
            events: [
                { id: '1', time: '13:00', type: 'default', isAlert: false },
                { id: '2', time: '13:15', type: 'default', isAlert: false },
                { id: '3', time: '13:30', type: 'default', isAlert: false },
                { id: '4', time: '13:45', type: 'motion', isAlert: true },
                { id: '5', time: '14:00', type: 'default', isAlert: false },
            ]
        },
        {
            id: '4',
            title: 'Backyard Camera',
            location: 'outdoor',
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
            events: [
                { id: '1', time: '08:00', type: 'default', isAlert: false },
                { id: '2', time: '08:15', type: 'motion', isAlert: true },
                { id: '3', time: '08:30', type: 'motion', isAlert: true },
            ]
        },
        {
            id: '5',
            title: 'Front Door Camera',
            location: 'outdoor',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            events: [
                { id: '1', time: '18:00', type: 'default', isAlert: false },
                { id: '2', time: '18:15', type: 'motion', isAlert: true },
                { id: '3', time: '18:30', type: 'default', isAlert: false },
            ]
        },
    ];

    const handleAskAI = (cameraTitle: string) => {
        console.log(`Asking AI about ${cameraTitle}`);
        // Pass camera context if supported by ai-chat screen
        router.push('/ai-chat');
    };

    const handleViewAlerts = (cameraTitle: string) => {
        console.log(`Viewing alerts for ${cameraTitle}`);
        // Pass camera context if supported by notifications screen
        router.push('/notifications');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.black} />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Camera Feeds</Text>

                <View style={styles.headerActions}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="notifications-outline" size={24} color={Colors.black} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {cameras.map((camera) => (
                    <CameraFeedCard
                        key={camera.id}
                        title={camera.title}
                        location={camera.location}
                        image={camera.image}
                        events={camera.events}
                        onAskAI={() => handleAskAI(camera.title)}
                        onViewAlerts={() => handleViewAlerts(camera.title)}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default CameraFeedsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    backButton: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
    },
    headerActions: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 16,
    },
    content: {
        padding: 20,
        paddingBottom: 40,
    }
});
