import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    FlatList,
    ListRenderItemInfo,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';
import CameraCard from '../components/CameraCard';

// Define camera type
interface Camera {
    id: string;
    title: string;
    location: string;
    imageUrl: string;
    lastActive: string;
    status?: 'online' | 'offline';
    hasAlert?: boolean;
}

const filters: string[] = ['All', 'Online', 'Offline', 'Alerts'];

const cameras: Camera[] = [
    {
        id: '1',
        title: 'Front Door Camera',
        location: 'Main Entrance',
        imageUrl: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80',
        lastActive: '2 mins ago',
        status: 'online',
    },
    {
        id: '2',
        title: 'Living Room Camera',
        location: 'Interior',
        imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
        lastActive: '2 mins ago',
        status: 'online',
    },
    {
        id: '3',
        title: 'Garage Camera',
        location: 'Garage',
        imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.3_O_4ibqE1gJVQ1sWu2E_gHaFL?rs=1&pid=ImgDetMain&o=7&rm=3',
        lastActive: '2 mins ago',
        status: 'offline',
        hasAlert: true,
    },
    {
        id: '4',
        title: 'Backyard',
        location: 'Garden',
        imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
        lastActive: '2 mins ago',
        status: 'offline',
    },
    {
        id: '5',
        title: 'Hallway',
        location: 'Corridor',
        imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
        lastActive: '2 mins ago',
        status: 'online',
    },
];

import { useRouter } from 'expo-router';

const OverviewScreen: React.FC = () => {
    const router = useRouter();
    const [selectedFilter, setSelectedFilter] = useState<string>('All');

    // Optional: Filter cameras based on selected chip
    const filteredCameras = cameras.filter((cam) => {
        if (selectedFilter === 'All') return true;
        if (selectedFilter === 'Online') return cam.status === 'online';
        if (selectedFilter === 'Offline') return cam.status === 'offline';
        if (selectedFilter === 'Alerts') return cam.hasAlert;
        return true;
    });

    const renderCamera = ({ item }: ListRenderItemInfo<Camera>) => (
        <CameraCard {...item} onPressLive={() => router.push('/camera-details')} />
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="options-outline" size={24} color={Colors.black} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Overview</Text>
                <TouchableOpacity onPress={() => router.push('/notifications')}>
                    <Ionicons name="notifications-outline" size={24} color={Colors.black} />
                </TouchableOpacity>
            </View>
            <View style={styles.headerDivider} />

            {/* Filter Chips */}
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterContainer}
                >
                    {filters.map((filter) => {
                        const isSelected = selectedFilter === filter;
                        return (
                            <TouchableOpacity
                                key={filter}
                                style={[styles.filterChip, isSelected && styles.filterChipSelected]}
                                onPress={() => setSelectedFilter(filter)}
                            >
                                <Text style={[styles.filterText, isSelected && styles.filterTextSelected]}>
                                    {filter}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>

            {/* Camera List */}
            <FlatList
                data={filteredCameras}
                keyExtractor={(item) => item.id}
                renderItem={renderCamera}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

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
    },
    headerDivider: {
        height: 1,
        backgroundColor: '#F0F0F0',
    },
    filterContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    filterChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
        marginRight: 12,
        backgroundColor: Colors.white,
    },
    filterChipSelected: {
        backgroundColor: Colors.primaryBlueDark,
        borderColor: Colors.primaryBlueDark,
    },
    filterText: {
        color: Colors.black,
        fontSize: 14,
    },
    filterTextSelected: {
        color: Colors.white,
        fontWeight: 'bold',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
});

export default OverviewScreen;
