import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
    ImageStyle,
} from 'react-native';
import { Colors } from '../constants/theme';
import CustomTextField from '../components/CustomTextField';

import { useRouter } from 'expo-router';

const SignUpScreen: React.FC = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="cover"
                    />
                </View>

                <Text style={styles.tagline}>AI-powered security, real-time alerts</Text>

                <Text style={styles.header}>Welcome To CamAI</Text>

                <CustomTextField
                    hintText="Enter Your Full Name"
                    style={styles.input}
                />
                <CustomTextField
                    hintText="Enter Your Username"
                    style={styles.input}
                />
                <CustomTextField
                    hintText="Enter Your Email"
                    style={styles.input}
                />
                <CustomTextField
                    hintText="Enter Phone Number"
                    style={styles.input}
                />
                <CustomTextField
                    hintText="Enter Your Password"
                    isPassword={true}
                    style={styles.input}
                />
                <CustomTextField
                    hintText="Confirm Your Password"
                    isPassword={true}
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={() => router.replace('/(tabs)')}
                >
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.divider} />
                </View>

                <TouchableOpacity
                    style={styles.loginLink}
                    onPress={() => router.back()}
                >
                    <Text style={styles.loginLinkText}>Login Here</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

/* ================= STYLES ================= */
interface Styles {
    container: ViewStyle;
    scrollContent: ViewStyle;
    logoContainer: ViewStyle;
    logo: ImageStyle;
    appName: TextStyle;
    tagline: TextStyle;
    header: TextStyle;
    input: ViewStyle;
    signUpButton: ViewStyle;
    signUpButtonText: TextStyle;
    dividerContainer: ViewStyle;
    divider: ViewStyle;
    dividerText: TextStyle;
    loginLink: ViewStyle;
    loginLinkText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 40,
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 8,
    },
    logo: {
        width: 160,
        height: 160,
        borderRadius: 80,
        marginBottom: 8,
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.primaryBlueDark,
    },
    tagline: {
        color: Colors.grey,
        fontSize: 14,
        marginBottom: 24,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.black,
        marginBottom: 32,
    },
    input: {
        marginBottom: 16,
    },
    signUpButton: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.primaryBlueDark,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    signUpButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.lightGrey,
    },
    dividerText: {
        marginHorizontal: 16,
        fontWeight: 'bold',
        color: Colors.black,
    },
    loginLink: {
        alignSelf: 'flex-end',
        marginBottom: 16,
    },
    loginLinkText: {
        color: Colors.primaryBlueDark,
        textDecorationLine: 'underline',
    },
});

export default SignUpScreen;
