import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../constants/theme';
import OverviewScreen from '../screens/OverviewScreen';
import AlertsTimelineScreen from '../screens/AlertsTimelineScreen';
import PersonSearchScreen from '../screens/PersonSearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

/* ================= TYPES ================= */
export type MainTabParamList = {
  Overview: undefined;
  Alerts: undefined;
  Search: undefined;
  Settings: undefined;
};

/* ================= NAVIGATOR ================= */
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Overview') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Alerts') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primaryBlueDark,
        tabBarInactiveTintColor: Colors.grey,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen
        name="Overview"
        component={OverviewScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen name="Alerts" component={AlertsTimelineScreen} />
      <Tab.Screen name="Search" component={PersonSearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
