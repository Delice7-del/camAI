import React, { FC, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';

interface AIChatInputProps {
  onSendMessage: (text: string) => void;
}

const AIChatInput: FC<AIChatInputProps> = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText.trim());
      setInputText('');
    }
  };
  return (
    <View style={styles.container}>
      {/* Quick Action Chips */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickActions}
        >
          <TouchableOpacity style={styles.actionChip}>
            <Text style={styles.actionText}>What happened next?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionChip}>
            <Text style={styles.actionText}>Show similar events</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Input Area */}
      <View style={styles.inputRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="mic-outline" size={28} color={Colors.grey} />
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            placeholderTextColor={Colors.grey}
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={handleSend}
            returnKeyType="send"
          />
        </View>

        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AIChatInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  quickActions: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  actionChip: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 8,
  },
  actionText: {
    color: Colors.primaryBlueDark,
    fontSize: 13,
    fontWeight: '500',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  iconButton: {
    marginRight: 12,
  },
  inputContainer: {
    flex: 1,
    height: 48,
    backgroundColor: '#F0F0F0',
    borderRadius: 24,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    fontSize: 16,
    color: Colors.black,
  },
  sendButton: {
    width: 44,
    height: 44,
    backgroundColor: Colors.primaryBlueDark,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
});
