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
} from 'react-native';
import { Colors } from '../constants/theme';
import CustomTextField from '../components/CustomTextField';
import SocialAuthButton from '../components/SocialAuthButton';
import { useRouter } from 'expo-router';

const LoginScreen: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.tagline}>AI-powered security, real-time alerts</Text>

        <Text style={styles.header}>Login to CamAI</Text>

        {/* Input Fields */}
        <CustomTextField hintText="Email or Phone Number" style={styles.input} />
        <CustomTextField hintText="Password" isPassword style={styles.input} />

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        {/* OR Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        {/* Create Account */}
        <SocialAuthButton
          label="Create an Account"
          onPressed={() => router.push('/signup')}
          borderColor="rgba(79, 115, 227, 0.1)"
          textColor={Colors.primaryBlueDark}
        />

        {/* Social Login Buttons */}
        <View style={styles.socialContainer}>
          <SocialAuthButton icon="mail-outline" label="Continue with Email" onPressed={() => { }} />
          <SocialAuthButton
            icon="logo-apple"
            label="Continue with Apple"
            onPressed={() => { }}
            style={styles.socialButton as ViewStyle}
          />
          <SocialAuthButton
            icon="logo-google"
            label="Continue with Google"
            onPressed={() => { }}
            style={styles.socialButton as ViewStyle}
          />
          <SocialAuthButton
            icon="logo-facebook"
            label="Continue with Facebook"
            onPressed={() => { }}
            style={styles.socialButton as ViewStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
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
    borderRadius: 60,
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
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primaryBlueDark,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 16,
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: Colors.primaryBlueDark,
    textDecorationLine: 'underline',
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
  socialContainer: {
    width: '100%',
    marginTop: 16,
    gap: 12,
  },
  socialButton: {
    marginTop: 12,
  },
});
