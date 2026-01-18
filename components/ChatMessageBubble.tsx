import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';

interface ChatMessageBubbleProps {
    text: string;
    isAI: boolean;
    imageUrl?: string;
    imageLabel?: string;
}

const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({ text, isAI, imageUrl, imageLabel }) => {
    return (
        <View
            style={[
                styles.container,
                { alignSelf: isAI ? 'flex-start' : 'flex-end' },
            ]}
        >
            <View style={styles.bubbleRow}>
                {isAI && (
                    <View style={styles.aiIconContainer}>
                        <Ionicons name="shield-checkmark" size={24} color={Colors.black} />
                    </View>
                )}
                <View style={styles.messageContent}>
                    <View
                        style={[
                            styles.bubble,
                            {
                                backgroundColor: isAI ? '#F3F4F6' : '#5C7CFA', // Light grey for AI, Royal Blue for User
                                borderTopLeftRadius: isAI ? 4 : 18,
                                borderBottomLeftRadius: 18,
                                borderTopRightRadius: 18,
                                borderBottomRightRadius: isAI ? 18 : 4,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.messageText,
                                { color: isAI ? Colors.black : Colors.white },
                            ]}
                        >
                            {text}
                        </Text>
                    </View>

                    {imageUrl && (
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: imageUrl }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                            {imageLabel && (
                                <View style={styles.imageOverlay}>
                                    <Text style={styles.imageLabel}>{imageLabel}</Text>
                                </View>
                            )}
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        maxWidth: '85%',
    },
    bubbleRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    aiIconContainer: {
        marginRight: 8, // Space between shield and bubble
        marginTop: 0,
    },
    messageContent: {
        flexShrink: 1, // Allow text to wrap properly
        width: '100%',
    },
    bubble: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 18,
    },
    messageText: {
        fontSize: 15, // Slightly larger for readability
        lineHeight: 22,
    },
    imageContainer: {
        marginTop: 8,
        borderRadius: 12, // Softer corners
        overflow: 'hidden',
        position: 'relative',
        width: 240, // Fixed width for images (or could be 100%)
        height: 140,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageOverlay: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    imageLabel: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: '600',
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
});

export default ChatMessageBubble;
