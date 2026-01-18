import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Switch,
    ViewStyle,
    TextStyle,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';

import { useRouter } from 'expo-router';

const SettingsScreen: React.FC = () => {
    const router = useRouter();
    // Toggles
    const [smsAlerts, setSmsAlerts] = useState<boolean>(false);
    const [emailSummaries, setEmailSummaries] = useState<boolean>(true);
    const [shareWithPartners, setShareWithPartners] = useState<boolean>(false);

    // Slider
    const [detectionThreshold, setDetectionThreshold] = useState<number>(100);

    // Render a settings section
    const renderSection = (title: string, children: React.ReactNode) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.sectionContent}>{children}</View>
        </View>
    );

    // Render a clickable settings tile
    const renderSettingsTile = (
        icon: React.ComponentProps<typeof Ionicons>['name'],
        title: string,
        subtitle?: string,
        isDestructive: boolean = false,
        onPress?: () => void
    ) => (
        <TouchableOpacity style={styles.tile} onPress={onPress}>
            <View style={styles.tileIconContainer}>
                <Ionicons
                    name={icon}
                    size={22}
                    color={isDestructive ? Colors.errorRed : Colors.black}
                />
            </View>
            <View style={styles.tileTextContainer}>
                <Text
                    style={[
                        styles.tileTitle,
                        isDestructive && { color: Colors.errorRed },
                    ]}
                >
                    {title}
                </Text>
                {subtitle && <Text style={styles.tileSubtitle}>{subtitle}</Text>}
            </View>
            <Ionicons name="chevron-forward" size={20} color={Colors.grey} />
        </TouchableOpacity>
    );

    // Render a toggle switch tile
    const renderToggleTile = (
        icon: React.ComponentProps<typeof Ionicons>['name'],
        title: string,
        subtitle: string,
        value: boolean,
        onToggle: (val: boolean) => void
    ) => (
        <View style={styles.tile}>
            <View style={styles.tileIconContainer}>
                <Ionicons name={icon} size={22} color={Colors.black} />
            </View>
            <View style={styles.tileTextContainer}>
                <Text style={styles.tileTitle}>{title}</Text>
                <Text style={styles.tileSubtitle}>{subtitle}</Text>
            </View>
            <Switch
                value={value}
                onValueChange={onToggle}
                trackColor={{ false: '#D1D1D1', true: Colors.primaryBlue }}
                thumbColor={Colors.white}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={Colors.black} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
                <TouchableOpacity>
                    <Ionicons name="save-outline" size={24} color={Colors.black} />
                </TouchableOpacity>
            </View>
            <View style={styles.headerDivider} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                <View style={styles.content}>
                    {renderSection('Account Management',
                        <>
                            {renderSettingsTile(
                                'person-outline',
                                'Edit Profile',
                                'Update Your Personal Information',
                                false,
                                () => router.push('/edit-profile')
                            )}
                            {renderSettingsTile(
                                'lock-closed-outline',
                                'Change Password',
                                'Secure Your Account With a New \nPassword',
                                false,
                                () => router.push('/change-password')
                            )}
                            {renderSettingsTile(
                                'shield-checkmark-outline',
                                'Two factor authentication',
                                'Add an Extra Layer Of Security',
                                false,
                                () => router.push('/two-factor-authentication')
                            )}
                            {renderSettingsTile('power-outline', 'Logout', undefined, true, () => router.replace('/login'))}
                            {renderSettingsTile('trash-outline', 'Delete Account', undefined, true, () => router.push('/delete-account'))}
                        </>
                    )}

                    {renderSection('Notifications',
                        <>
                            {renderSettingsTile(
                                'notifications-outline',
                                'Push Notifications',
                                'Receive real-time alerts on your device',
                                false,
                                () => router.push('/notifications')
                            )}
                            {renderSettingsTile(
                                'chatbubble-ellipses-outline',
                                'SMS Alerts',
                                'Configure text message alerts',
                                false,
                                () => router.push('/sms-alerts')
                            )}
                            {renderSettingsTile(
                                'mail-outline',
                                'Email Summaries',
                                'Configure email alert summaries',
                                false,
                                () => router.push('/email-summaries')
                            )}
                            {renderSettingsTile(
                                'chatbox-outline',
                                'Messages',
                                'View your messages',
                                false,
                                () => router.push('/message-screen')
                            )}
                        </>
                    )}

                    {renderSection('AI Sensibility',
                        <View style={styles.sliderContainer}>
                            <View style={styles.sliderHeader}>
                                <Ionicons name="options-outline" size={20} color={Colors.grey} />
                                <Text style={styles.sliderTitle}>Detection Threshold</Text>
                                <Text style={styles.sliderValue}>
                                    {Math.round(detectionThreshold)}%
                                </Text>
                            </View>
                            <Text style={styles.sliderSubtitle}>
                                Adjust how sensitive the AI is to detecting events. Higher
                                values reduce false alarms
                            </Text>
                            <Slider
                                style={styles.slider}
                                minimumValue={0}
                                maximumValue={100}
                                value={detectionThreshold}
                                onValueChange={setDetectionThreshold}
                                minimumTrackTintColor={Colors.primaryBlue}
                                maximumTrackTintColor={Colors.lightGrey}
                                thumbTintColor={Colors.primaryBlue}
                            />
                        </View>
                    )}

                    {renderSection('Camera Management',
                        <>
                            {renderSettingsTile(
                                'videocam-outline',
                                'Manage Cameras',
                                'Configure and view connected cameras',
                                false,
                                () => router.push('/manage-cameras')
                            )}
                            {renderSettingsTile(
                                'add-circle-outline',
                                'Add New Camera',
                                'Connect a new security camera',
                                false,
                                () => router.push('/add-camera')
                            )}
                        </>
                    )}
                    {renderSection('Privacy & Data',
                        <>
                            {renderSettingsTile(
                                'lock-closed-outline',
                                'Data Protection Policy',
                                'Review on how long your data is stored',
                                false,
                                () => router.push('/privacy-data')
                            )}
                            {renderToggleTile(
                                'share-social-outline',
                                'Share Data With Partners',
                                'Help improve AI models by sharing anonymous data',
                                shareWithPartners,
                                setShareWithPartners
                            )}
                        </>
                    )}

                    {renderSection('Support',
                        <>
                            {renderSettingsTile(
                                'help-circle-outline',
                                'Help & Support',
                                'Get help and contact support',
                                false,
                                () => router.push('/help-support')
                            )}
                        </>
                    )}

                    <View style={styles.bottomSpacer} />
                </View>
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
    scroll: ViewStyle;
    content: ViewStyle;
    section: ViewStyle;
    sectionTitle: TextStyle;
    sectionContent: ViewStyle;
    tile: ViewStyle;
    tileIconContainer: ViewStyle;
    tileTextContainer: ViewStyle;
    tileTitle: TextStyle;
    tileSubtitle: TextStyle;
    sliderContainer: ViewStyle;
    sliderHeader: ViewStyle;
    sliderTitle: TextStyle;
    sliderValue: TextStyle;
    sliderSubtitle: TextStyle;
    slider: ViewStyle;
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
    scroll: {
        flex: 1,
    },
    content: {
        padding: 16,
    },
    section: {
        marginBottom: 24,
        backgroundColor: Colors.white,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F9F9F9',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.01,
        shadowRadius: 10,
        paddingTop: 16,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.black,
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    sectionContent: {
        paddingBottom: 8,
    },
    tile: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    tileIconContainer: {
        width: 32,
        alignItems: 'center',
    },
    tileTextContainer: {
        flex: 1,
        marginLeft: 12,
    },
    tileTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
    },
    tileSubtitle: {
        fontSize: 12,
        color: Colors.grey,
        marginTop: 2,
    },
    sliderContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    sliderHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sliderTitle: {
        fontWeight: 'bold',
        marginLeft: 16,
        flex: 1,
    },
    sliderValue: {
        color: Colors.primaryBlue,
        fontWeight: 'bold',
    },
    sliderSubtitle: {
        color: Colors.grey,
        fontSize: 12,
        marginLeft: 40,
        marginTop: 8,
    },
    slider: {
        width: '100%',
        height: 40,
        marginTop: 8,
    },
    bottomSpacer: {
        height: 100,
    },
});

export default SettingsScreen;
