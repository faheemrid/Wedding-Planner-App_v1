import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const venues = [
  {
    id: '1',
    name: 'Royal Palace',
    location: 'Lahore',
    priceRange: 200000,
    capacity: 300,
  },
  {
    id: '2',
    name: 'Pearl Banquet',
    location: 'Karachi',
    priceRange: 350000,
    capacity: 500,
  },
  {
    id: '3',
    name: 'Dreamland Resort',
    location: 'Islamabad',
    priceRange: 150000,
    capacity: 200,
  },
  {
    id: '4',
    name: 'Garden Heights',
    location: 'Multan',
    priceRange: 90000,
    capacity: 150,
  },
  {
    id: '5',
    name: 'Sunset Lawn',
    location: 'Faisalabad',
    priceRange: 120000,
    capacity: 250,
  },
  {
    id: '6',
    name: 'Lakeside Hall',
    location: 'Peshawar',
    priceRange: 80000,
    capacity: 180,
  },
  {
    id: '7',
    name: 'Grand Pavilion',
    location: 'Quetta',
    priceRange: 110000,
    capacity: 220,
  },
  {
    id: '8',
    name: 'Blossom Court',
    location: 'Rawalpindi',
    priceRange: 170000,
    capacity: 280,
  },
  {
    id: '9',
    name: 'Velvet Ballroom',
    location: 'Sialkot',
    priceRange: 260000,
    capacity: 350,
  },
  {
    id: '10',
    name: 'Orchid Banquet',
    location: 'Hyderabad',
    priceRange: 140000,
    capacity: 210,
  },
];

const selectVenue = async venue => {
  try {
    await AsyncStorage.setItem('selectedVenue', JSON.stringify(venue));
    Alert.alert('Venue selected successfully!');
  } catch (error) {
    console.log('Error saving venue:', error);
  }
};
const VenuesScreen = ({ navigation }) => {
  const [budget, setBudget] = useState('');
  const [capacity, setCapacity] = useState('');

  const filtered = venues.filter(v => {
    const underBudget = budget ? v.priceRange <= parseInt(budget) : true;
    const enoughCapacity = capacity ? v.capacity >= parseInt(capacity) : true;
    return underBudget && enoughCapacity;
  });
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Wedding Venues</Text>
      <View style={styles.filterRow}>
        <TextInput
          placeholder="Max Budget (PKR)"
          placeholderTextColor="#888"
          value={budget}
          onChangeText={setBudget}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Min Capacity"
          placeholderTextColor="#888"
          value={capacity}
          onChangeText={setCapacity}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>
              {item.location}|Capacity:{item.capacity}
            </Text>
            <Text style={styles.price}>
              PKR:{item.priceRange.toLocaleString()}
            </Text>
            <TouchableOpacity
              style={styles.selectBtn}
              onPress={() => selectVenue(item)}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Select</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 40 }}>
            No venues found.
          </Text>
        }
      />
    </View>
  );
};

export default VenuesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#bd0000',
    textAlign: 'center',
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    width: '48%',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 0.5,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  details: {
    color: '#666',
    marginTop: 4,
  },
  price: {
    color: '#bd0000',
    marginTop: 6,
    fontWeight: '600',
  },
  selectBtn: {
  backgroundColor: '#bd0000',
  padding: 8,
  borderRadius: 8,
  marginTop: 10,
  alignItems: 'center',
},
});
