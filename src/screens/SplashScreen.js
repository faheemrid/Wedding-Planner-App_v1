import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Wellcome');
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        SHAADI
        <Ionicons name="heart" size={50} color="#E91E63" />
      </Text>
      <Text style={styles.subtitle}>Wedding Planner</Text>
      <ActivityIndicator size="large" color="#b8535a" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#b8535a',
    marginVertical:2,
  },
  subtitle: {
    fontSize: 22,
    fontFamily: '600',
    color: '#b8535a',
     marginVertical:4,
  },
});
