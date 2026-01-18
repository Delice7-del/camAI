import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/theme';

const AboutScreen: React.FC = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.black} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>About CamAI</Text>
                <View style={{ width: 40 }} />
            </View>
            <View style={styles.headerDivider} />

            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    {/* Placeholder for App Logo */}
                    <View style={styles.logoPlaceholder}>
                        <Ionicons name="camera-outline" size={60} color={Colors.primaryBlue} />
                    </View>
                    <Text style={styles.appName}>CamAI</Text>
                    <Text style={styles.version}>Version 1.0.0</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.description}>
                        CamAI is an advanced AI-powered security camera application designed to keep your home safe and smart.
                        With real-time object detection, intelligent alerts, and seamless activity summarization,
                        CamAI provides peace of mind wherever you are.
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.copyright}>© 2026 CamAI Inc. All rights reserved.</Text>
                </View>
            </View>
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
    backButton: {
        padding: 8,
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
    content: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    logoPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: '#EEF2FF', // Light blue bg
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    appName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        marginBottom: 8,
    },
    version: {
        fontSize: 16,
        color: '#666',
    },
    section: {
        width: '100%',
        padding: 16,
        backgroundColor: '#F9F9F9',
        borderRadius: 12,
        marginBottom: 24,
    },
    description: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
        textAlign: 'center',
    },
    footer: {
        marginTop: 'auto',
        marginBottom: 20,
    },
    copyright: {
        fontSize: 12,
        color: '#999',
    },
});

export default AboutScreen;
