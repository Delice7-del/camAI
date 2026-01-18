import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Dimensions,
    TextStyle,
    ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';
import PersonProfileCard from '../components/PersonProfileCard';

const { width } = Dimensions.get('window');

// Filters type
const filters: string[] = ['Recent', 'Today', 'Last 7 days', 'Red Shirts'];

import { useRouter } from 'expo-router';

// Optional: you can define a type for PersonProfileCard props if needed
interface PersonProfile {
    name: string;
    imageUrl: string;
    confidence: string;
    onViewClips: () => void;
    onSaveProfile: () => void;
}

const PersonSearchScreen: React.FC = () => {
    const router = useRouter();
    const [selectedFilter, setSelectedFilter] = useState<string>('Recent');
    const [searchText, setSearchText] = useState<string>('');
    const persons: PersonProfile[] = [
        {
            name: 'Smith John',
            imageUrl:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
            confidence: '95.5%',
            onViewClips: () => { },
            onSaveProfile: () => { },
        },
        {
            name: 'Emma Watson',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL9xUq5z4NBpSGNX6d8YT6ZGdx1jShuifDg&s',
            confidence: '92.3%',
            onViewClips: () => { },
            onSaveProfile: () => { },
        },
        {
            name: 'John Doe',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
            confidence: '88.7%',
            onViewClips: () => { },
            onSaveProfile: () => { },
        },
        {
            name: 'Jane Smith',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300',
            confidence: '90.2%',
            onViewClips: () => { },
            onSaveProfile: () => { },
        },
    ];

    // Filter persons based on search text
    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={Colors.black} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Person Search</Text>
                <TouchableOpacity>
                    <Ionicons name="save-outline" size={24} color={Colors.black} />
                </TouchableOpacity>
            </View>
            <View style={styles.headerDivider} />

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={20} color={Colors.grey} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search By Time, Clothing, Direction, ..."
                            placeholderTextColor={Colors.grey}
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                    </View>
                </View>

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
                                    style={[
                                        styles.filterChip,
                                        isSelected && styles.filterChipSelected,
                                    ]}
                                    onPress={() => setSelectedFilter(filter)}
                                >
                                    <Text
                                        style={[
                                            styles.filterText,
                                            isSelected && styles.filterTextSelected,
                                        ]}
                                    >
                                        {filter}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>

                {/* Results Grid */}
                <View style={styles.gridContainer}>
                    {filteredPersons.map((person, index) => (
                        <View key={index} style={styles.gridItem}>
                            <PersonProfileCard {...person} />
                        </View>
                    ))}
                </View>

                {/* Load More Button */}
                <TouchableOpacity style={styles.loadMoreButton}>
                    <Text style={styles.loadMoreText}>Load More Results</Text>
                </TouchableOpacity>

                {/* Search Tips */}
                <View style={styles.tipsContainer}>
                    <View style={styles.tipsHeader}>
                        <Ionicons
                            name="bulb-outline"
                            size={20}
                            color={Colors.primaryBlueDark}
                        />
                        <Text style={styles.tipsTitle}>Search Tips</Text>
                    </View>
                    <View style={styles.tipsList}>
                        {['By Time', 'By Clothing', 'By Direction', 'By Appearance'].map(
                            (tip) => (
                                <View key={tip} style={styles.tipItem}>
                                    <Ionicons
                                        name="chevron-forward"
                                        size={16}
                                        color={Colors.grey}
                                    />
                                    <Text style={styles.tipText}>{tip}</Text>
                                </View>
                            )
                        )}
                    </View>
                </View>

                <View style={styles.bottomSpacer} />
            </ScrollView>
        </SafeAreaView>
    );
};

/* ================= STYLES ================= */
interface Styles {
    container: ViewStyle;
    header: ViewStyle;
    headerTitle: TextStyle;
    headerDivider: ViewStyle;
    searchContainer: ViewStyle;
    searchBar: ViewStyle;
    searchInput: TextStyle;
    filterContainer: ViewStyle;
    filterChip: ViewStyle;
    filterChipSelected: ViewStyle;
    filterText: TextStyle;
    filterTextSelected: TextStyle;
    gridContainer: ViewStyle;
    gridItem: ViewStyle;
    loadMoreButton: ViewStyle;
    loadMoreText: TextStyle;
    tipsContainer: ViewStyle;
    tipsHeader: ViewStyle;
    tipsTitle: TextStyle;
    tipsList: ViewStyle;
    tipItem: ViewStyle;
    tipText: TextStyle;
    bottomSpacer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
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
    searchContainer: {
        padding: 16,
        paddingTop: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 48,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 14,
        color: Colors.black,
    },
    filterContainer: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    filterChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 12,
        backgroundColor: '#F5F5F5',
    },
    filterChipSelected: {
        backgroundColor: Colors.primaryBlueDark,
    },
    filterText: {
        color: Colors.black,
        fontSize: 14,
    },
    filterTextSelected: {
        color: Colors.white,
        fontWeight: 'bold',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 8,
    },
    gridItem: {
        width: '50%',
        padding: 8,
        height: 220,
    },
    loadMoreButton: {
        margin: 16,
        backgroundColor: '#F5F5F5',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadMoreText: {
        fontWeight: 'bold',
        color: Colors.black,
    },
    tipsContainer: {
        margin: 16,
        backgroundColor: '#FAFAFA',
        borderRadius: 12,
        padding: 16,
    },
    tipsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    tipsTitle: {
        color: Colors.primaryBlueDark,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
    },
    tipsList: {
        gap: 12,
    },
    tipItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tipText: {
        color: Colors.black,
        marginLeft: 8,
    },
    bottomSpacer: {
        height: 100,
    },
});

export default PersonSearchScreen;
