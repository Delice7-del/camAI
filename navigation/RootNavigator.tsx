import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import CameraDetailsScreen from '../screens/CameraDetailsScreen';
import AIChatScreen from '../screens/AIChatScreen';
import MainNavigator from './MainNavigator';

/* ================= TYPES ================= */
export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
  CameraDetails: { cameraId?: string }; // optional param example
  AIChat: { chatId?: string }; // optional param example
};

/* ================= STACK NAVIGATOR ================= */
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="CameraDetails" component={CameraDetailsScreen} />
      <Stack.Screen name="AIChat" component={AIChatScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
