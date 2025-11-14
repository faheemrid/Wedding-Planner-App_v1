import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const RoleSelection = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const roles = [
    { id: 'groom', label: 'Groom', image: require('../assets/groom.png') },
    { id: 'bride', label: 'Bride', image: require('../assets/bride.png') },
    { id: 'guests', label: 'Guests', image: require('../assets/guests.png') },
  ];
  const handleContinue = () => {
    if (selectedRole) {
      navigation.navigate('BottomTabs', { roles: selectedRole });
    } else {
      Alert.alert('Please select a role first!');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      {roles.map(role => (
        <TouchableOpacity
          key={role.id}
          style={[styles.card, selectedRole === role.id && styles.selectedCard]}
          onPress={() => setSelectedRole(role.id)}
        >
          <Image source={role.image} style={styles.icon} />
          <Text
            style={[
              styles.label,
              selectedRole === role.id && styles.selectedLabel,
            ]}
          >
            {role.label}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoleSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333',
  },
  card: {
    width: '40%',
    backgroundColor: '#ffffffff',
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedCard: {
    backgroundColor: '#A0333A',
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  selectedLabel: {
    color: '#fff',
  },
  continueButton: {
    backgroundColor: '#A0333A',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginTop: 30,
    width:"70%"
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    alignSelf:"center"
  },
});
