import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';
import ChatMessageBubble from '../components/ChatMessageBubble';
import AIChatInput from '../components/AIChatInput';
import { useRouter } from 'expo-router';

/* ================= TYPES ================= */
interface Message {
  id: string;
  text: string;
  isAI: boolean;
  imageUrl?: string;
  imageLabel?: string;
}

/* ================= COMPONENT ================= */
const AIChatScreen: React.FC = () => {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm  CamAI. How can I assist you with your Front Door camera events?",
      isAI: true,
    },
    {
      id: '2',
      text: "Detected a person near your front door. Suspicious movement observed for 15 seconds. Identity unknown.",
      isAI: true,
      imageUrl: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1000",
      imageLabel: "View Event Clip",
    },
    {
      id: '3',
      text: "What exactly happened? Can you show me the clip?",
      isAI: false,
    },
    {
      id: '4',
      text: "At 10:12 PM, an unidentified person approached your door, hesitated for a moment, and walked away. A full 30-second clip is available.",
      isAI: true,
      imageUrl: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1000",
      imageLabel: "View Event Clip",
    },
    {
      id: '5',
      text: "Is it safe? Was anything unusual left behind?",
      isAI: false,
    },
    {
      id: '6',
      text: "The area appears clear, and no objects were left. The person did not attempt to interact with the door or property. Minimal risk detected.",
      isAI: true,
    },
  ]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isAI: false,
    };
    setMessages(prev => [...prev, newMessage]);
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message. I'm processing your request...",
        isAI: true,
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AI Chats:Front Door</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="chatbubble-outline" size={24} color={Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} // Placeholder for user avatar
              style={{ width: 28, height: 28, borderRadius: 14 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerDivider} />

      {/* Header Card */}
      <View style={styles.eventCard}>
        <View style={styles.eventIconContainer}>
          <Ionicons name="desktop-outline" size={32} color={Colors.grey} />
        </View>
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>Front Door</Text>
          <Text style={styles.eventTime}>Today, 10:12 PM</Text>
        </View>
        <Ionicons name="time-outline" size={24} color="#5C7CFA" />
      </View>

      {/* Chat List */}
      <FlatList
        ref={flatListRef}
        style={styles.chatList}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatMessageBubble
            text={item.text}
            isAI={item.isAI}
            imageUrl={item.imageUrl}
            imageLabel={item.imageLabel}
          />
        )}
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Input */}
      <AIChatInput onSendMessage={handleSendMessage} />
    </SafeAreaView>
  );
};

export default AIChatScreen;

/* ================= STYLES ================= */
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
  headerActions: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 16,
  },
  headerDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },
  eventCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventIconContainer: {
    marginRight: 16,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  eventTime: {
    fontSize: 12,
    color: Colors.grey,
    marginTop: 2,
  },
  chatList: {
    flex: 1,
  },
  chatContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
