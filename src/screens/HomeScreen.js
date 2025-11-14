import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ naviagtion }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);

  //Load saved data from AsyncStorage
  useEffect(() => {
    const loadData = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('weddingChecklist');
        const savedVenue = await AsyncStorage.getItem('selectedVenue');
        if (savedTasks) setTasks(JSON.parse(savedTasks));
        if (savedVenue) setSelectedVenue(JSON.parse(savedVenue));
      } catch (error) {
        console.log('Error loading home data:', error);
      }
    };
    const unsubscribe = setInterval(loadData, 1000);
    return () => clearInterval(unsubscribe);
  }, []);
  // Count completed tasks
  const completedCount = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>💍 Wedding Planner Dashboard</Text>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🏨 Selected Venue</Text>
        {selectedVenue ? (
          <>
            <Text style={styles.info}>Name:{selectedVenue.name}</Text>
            <Text style={styles.info}>Location:{selectedVenue.location}</Text>
            <Text style={styles.info}>Price:{selectedVenue.price}</Text>
            <Text style={styles.info}>Capacity:{selectedVenue.capacity}</Text>
          </>
        ) : (
          <Text style={styles.emptyText}>No venue selected yet.</Text>
        )}
      </View>

      {/* Checklist Progress  */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>✅ Checklist Progress</Text>
        <Text style={styles.info}>
          {completedCount}/{totalTasks}
        </Text>
        <FlatList
          data={tasks.filter(t => t.completed)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Text style={styles.completedItem}>
              <Ionicons name="checkmark-circle" color="#2ecc71" size={18} />{' '}
              {item.title}
            </Text>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No completed tasks yet...</Text>
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d81b60',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fdecef',
    padding: 15,
    borderRadius: 14,
    marginBottom: 16,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#bd0000',
  },
  info: {
    fontSize: 15,
    color: '#333',
    marginVertical: 4,
  },
  completedItem: {
    fontSize: 15,
    color: '#2ecc71',
    marginVertical: 3,
  },
  emptyText: {
    color: '#777',
    marginTop: 8,
  },
});
