import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/theme';

const FAQScreen: React.FC = () => {
    const router = useRouter();

    const faqs = [
        {
            question: "How do I add a new camera?",
            answer: "Go to the Settings screen and tap on 'Add New Camera'. Follow the on-screen instructions to connect via QR code or Wi-Fi."
        },
        {
            question: "Can I share my camera access?",
            answer: "Yes, you can share access with family members. Go to 'Manage Cameras' and select the camera you wish to share."
        },
        {
            question: "How does the AI detection work?",
            answer: "CamAI uses advanced computer vision to identify people, pets, and vehicles. You can adjust the sensitivity in the AI Sensibility settings."
        },
        {
            question: "Is my data secure?",
            answer: "Absolutely. logical and physical security protections are in place. You can review our Data Protection Policy in the Privacy & Data settings."
        },
        {
            question: "What if I forget my password?",
            answer: "You can reset your password from the Login screen by tapping 'Forgot Password'."
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.black} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>FAQ</Text>
                <View style={{ width: 40 }} />
            </View>
            <View style={styles.headerDivider} />

            <ScrollView style={styles.content}>
                <Text style={styles.pageTitle}>Frequently Asked Questions</Text>

                {faqs.map((faq, index) => (
                    <View key={index} style={styles.faqItem}>
                        <Text style={styles.question}>{faq.question}</Text>
                        <Text style={styles.answer}>{faq.answer}</Text>
                    </View>
                ))}

                <View style={styles.bottomSpacer} />
            </ScrollView>
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
        padding: 16,
    },
    pageTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 24,
        color: Colors.black,
    },
    faqItem: {
        marginBottom: 20,
        backgroundColor: '#F9F9F9',
        padding: 16,
        borderRadius: 12,
    },
    question: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 8,
    },
    answer: {
        fontSize: 14,
        color: '#555',
        lineHeight: 22,
    },
    bottomSpacer: {
        height: 40,
    }
});

export default FAQScreen;
