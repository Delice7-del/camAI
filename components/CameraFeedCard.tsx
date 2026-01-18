import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';

const { width } = Dimensions.get('window');

/* ================= TYPES ================= */

export interface TimelineEvent {
    id: string;
    time: string;
    type: 'motion' | 'default';
    isAlert?: boolean;
}

interface CameraFeedCardProps {
    title: string;
    location: string;
    image: string; // URL
    events: TimelineEvent[];
    onAskAI: () => void;
    onViewAlerts: () => void;
}

/* ================= COMPONENT ================= */

const CameraFeedCard: React.FC<CameraFeedCardProps> = ({
    title,
    location,
    image,
    events,
    onAskAI,
    onViewAlerts,
}) => {
    return (
        <View style={styles.cardContainer}>
            {/* 1. Camera Feed Image Section */}
            <View style={styles.imageWrapper}>
                <Image source={{ uri: image }} style={styles.cameraImage} resizeMode="cover" />

                {/* Overlay Text */}
                <View style={styles.overlay}>
                    <Text style={styles.cameraTitle}>{title}</Text>
                    <Text style={styles.cameraLocation}>{location}</Text>
                </View>
            </View>

            {/* 2. Event Timeline Section */}
            <View style={styles.contentContainer}>
                <Text style={styles.sectionHeader}>Event TimeLine</Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.timelineScroll}
                    contentContainerStyle={styles.timelineContent}
                >
                    {events.map((event, index) => (
                        <View key={event.id} style={styles.timelineItemWrapper}>
                            {/* Connector Line (visual only, simplified for independent bubbles) */}

                            <View style={[
                                styles.timelineCircle,
                                event.isAlert ? styles.alertCircle : styles.defaultCircle
                            ]}>
                                <Ionicons
                                    name={event.isAlert ? "notifications-outline" : "time-outline"}
                                    size={20}
                                    color={event.isAlert ? Colors.white : '#666'}
                                />
                            </View>
                            <Text style={styles.timeText}>{event.time}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* 3. Action Buttons */}
                <TouchableOpacity style={styles.askAiButton} onPress={onAskAI} activeOpacity={0.8}>
                    <Ionicons name="chatbubble-ellipses-outline" size={20} color={Colors.white} style={{ marginRight: 8 }} />
                    <Text style={styles.askAiButtonText}>Ask AI Chat About This Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.alertsButton} onPress={onViewAlerts} activeOpacity={0.8}>
                    <Ionicons name="notifications-outline" size={20} color={Colors.black} style={{ marginRight: 8 }} />
                    <Text style={styles.alertsButtonText}>View Alerts for This Camera</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CameraFeedCard;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: Colors.white,
        // Add spacing between multiple cards in a list
        marginBottom: 32,
    },
    imageWrapper: {
        width: '100%',
        height: 220, // Approximate height from design
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 16,
        backgroundColor: '#eee', // placeholder bg
        position: 'relative',
    },
    cameraImage: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        // Optional gradient background for readability could go here
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    cameraTitle: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 2,
    },
    cameraLocation: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
    },
    contentContainer: {
        // paddingHorizontal: 4, // If needed
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.black,
        marginBottom: 16,
    },
    timelineScroll: {
        marginBottom: 24,
    },
    timelineContent: {
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    timelineItemWrapper: {
        alignItems: 'center',
        marginRight: 20,
        width: 48,
    },
    timelineCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    defaultCircle: {
        backgroundColor: '#E0E0E0',
    },
    alertCircle: {
        backgroundColor: '#F44336', // Bright red
    },
    timeText: {
        fontSize: 12,
        color: '#666',
    },
    askAiButton: {
        backgroundColor: '#537FE7', // Closely matching the blue in design
        borderRadius: 8,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    askAiButtonText: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: '600',
    },
    alertsButton: {
        backgroundColor: '#F5F5F5', // Light grey
        borderRadius: 8,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alertsButtonText: {
        color: Colors.black,
        fontSize: 14,
        fontWeight: '600',
    },
});
