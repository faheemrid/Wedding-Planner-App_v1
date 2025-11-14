import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';

const SignUp = ({ navigation }) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [showpassword, setShowPassword] = useState(false);
  const [showConfirmpassword, setShowConfirmPassword] = useState(false);
  useFocusEffect(
    useCallback(() => {
      setEmail('');
      setPassword('');
      setFullName('');
      setConfirmPassword();
    }, []),
  );
  const handelSignUp = () => {
    if (!fullname || !password || confirmpassword || email) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    if (password !== confirmpassword) {
      Alert.alert('Error', 'Passwords do not match');
    }
    Alert.alert('Success', 'Account Created!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SHAADI</Text>
      <Text style={styles.titleText}>Create Account</Text>
      <Text style={styles.subTitle}>Please Provide following Details!</Text>
      {/* Name */}
      <Text style={styles.label}>Full Name</Text>
      <View style={styles.inputWrapper}>
        <Icon
          name="person-outline"
          size={20}
          color="#666"
          style={styles.icon}
        />
        <TextInput
          placeholder="Full Name"
          style={styles.inputText}
          value={fullname}
          onChangeText={setFullName}
        />
      </View>
      {/* Email */}
      <Text style={styles.label}>Email</Text>
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
      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputWrapper}>
        <Icon
          name="lock-closed-outline"
          size={20}
          color="#666"
          style={styles.icon}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputText}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showpassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showpassword)}>
          <Icon
            name={showpassword ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#666"
            marginLeft="75%"
          />
        </TouchableOpacity>
      </View>
      {/* Confrim */}
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputWrapper}>
        <Icon
          name="lock-closed-outline"
          size={20}
          color="#666"
          style={styles.icon}
        />
        <TextInput
          placeholder=" Confirm Password"
          style={styles.inputText}
          value={confirmpassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmpassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmpassword)}
        >
          <Icon
            name={showConfirmpassword ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#666"
            marginLeft="65%"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signUpBtn} onPress={handelSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
      {/* Footer */}
      <View style={styles.footer}>
        <Text >Already have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={{ color: '#b8535a', fontWeight: '600' }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#b8535a',
    alignSelf: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
    marginLeft: 5,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 24,
    paddingHorizontal: 12,
    marginBottom: 15,
    width: '100%',
    padding: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
  },
  icon: {
    marginRight: 8,
  },
  signUpBtn: {
    backgroundColor: '#b8535a',
    paddingVertical: 16,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    marginTop: '25%',
    justifyContent: 'center',
    
  },
});
