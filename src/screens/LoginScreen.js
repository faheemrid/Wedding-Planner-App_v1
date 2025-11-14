import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useFocusEffect(
    useCallback(() => {
      setEmail('');
      setPassword('');
    }, []),
  );
  const handelLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    navigation.navigate('RoleSelection');
  };
  //Soical Login dumyfn
  const handleFacebookLogin = () => {
    Alert.alert('Facebook Login', 'Facebook login pressed!');
  };
  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Google login pressed!');
  };
  const handleAppleLogin = () => {
    Alert.alert('Apple Login', 'Apple login pressed!');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SHAADI</Text>
      <Text style={styles.titleText}>Create Account</Text>
      <Text style={styles.subTitle}>Please Provide following Details!</Text>
      <View style={styles.inputWrapper}>
        <Icon name="mail-outline" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="Email"
          style={styles.inputText}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Icon
          name="lock-closed-outline"
          size={20}
          color="#666"
          style={styles.icon}
        />
        <TextInput
          placeholder=" Enter Your Email"
          style={styles.inputText}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgetText}> Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={handelLogin}>
        <Text style={styles.loginText}> Log In</Text>
      </TouchableOpacity>

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Continue With</Text>
        <View style={styles.line} />
      </View>
      {/* Social Login */}
      <View style={styles.soicalRow}>
        <TouchableOpacity onPress={handleFacebookLogin}>
          <Icon name="logo-facebook" size={32} color="#1877F2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoogleLogin}>
          <Icon name="logo-google" size={32} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAppleLogin}>
          <Icon name="logo-apple" size={32} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 25 }}>
        <Text style={{ fontSize: 14 }}>Don't Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ color: '#b8535a', fontWeight: '600' }}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  innerContainer: {
    flex: 1,
    margin: '20%',
    alignItems: 'center',
  },
  logo: {
    // marginTop:30,
    fontSize: 32,
    fontWeight: '800',
    color: '#b8535a',
    marginBottom: 25,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 20,
    color: '#555',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 24,
    paddingHorizontal: 12,
    marginVertical: 8,
    width: '100%',
    padding: 5,
  },
  icon: {
    marginLeft: 7,
  },
  inputText: {
    flex: 1,
    paddingVertical: 14,
  },
  forgetText: {
    color: '#b8535a',
    alignSelf: 'flex-end',
    // marginRight: 20,
    marginTop: 5,
    marginBottom: 15,
    marginLeft: '55%',
  },
  loginBtn: {
    backgroundColor: '#b8535a',
    paddingVertical: 16,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    marginVertical: 15,
    width: '90%',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#a19d9dff',
  },
  orText: {
    marginHorizontal: 6,
    fontSize: 14,
    color: '#666',
  },
  soicalRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%',
  },
});
