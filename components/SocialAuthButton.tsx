import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';

/* ================= TYPES ================= */
interface SocialAuthButtonProps {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap; // restricts to valid Ionicons names
  onPressed: () => void;
  borderColor?: string;
  textColor?: string;
  style?: ViewStyle;
}

/* ================= COMPONENT ================= */
const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  label,
  icon,
  onPressed,
  borderColor,
  textColor,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: borderColor || Colors.lightGrey }, style]}
      onPress={onPressed}
    >
      <View style={styles.content}>
        {icon && (
          <Ionicons
            name={icon}
            size={24}
            color={textColor || Colors.black}
            style={styles.icon}
          />
        )}
        <Text style={[styles.label, { color: textColor || Colors.black }]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialAuthButton;

/* ================= STYLES ================= */
const styles = StyleSheet.create<{
  button: ViewStyle;
  content: ViewStyle;
  icon: TextStyle;
  label: TextStyle;
}>({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
});
