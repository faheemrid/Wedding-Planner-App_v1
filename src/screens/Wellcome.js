import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
const Wellcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SHAADI</Text>
      <Text style={styles.sublogo}>Wedding Planner</Text>
      <View style={styles.contianerBtn}>
        <TouchableOpacity style={styles.signUpBtn} onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}> SignUp </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    fontSize: 40,
    fontWeight: '800',
    color: '#b8535a',
    marginBottom: 10,
  },
  sublogo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#b8535a',
    marginBottom: '70%',
  },
  contianerBtn: {
    width: '100%',
    alignItems: 'center',
  },
  signUpBtn: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 14,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  signUpText: {
    color: '#b8535a',
    fontSize: 18,
    fontWeight: '600',
  },
  loginBtn: {
    backgroundColor: '#b8535a',
    borderRadius: 30,
    paddingVertical: 14,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
