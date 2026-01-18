import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { BaseColors } from '../constants/theme';

/* ================= TYPES ================= */
interface CustomTextFieldProps extends Omit<TextInputProps, 'style'> {
  hintText?: string;
  isPassword?: boolean;
  style?: ViewStyle | ViewStyle[];
}

/* ================= COMPONENT ================= */
const CustomTextField: React.FC<CustomTextFieldProps> = ({
  hintText = '',
  isPassword = false,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={hintText}
        secureTextEntry={isPassword}
        style={styles.input}
        placeholderTextColor={BaseColors.grey}
        {...props}
      />
    </View>
  );
};

export default CustomTextField;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: BaseColors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: BaseColors.lightGrey,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    fontSize: 14,
    color: BaseColors.black,
  },
});
