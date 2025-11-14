import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ChecklistScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editId, setEditId] = useState(null);
  const defaultTasks = [
    { id: '1', title: 'Book Venue', completed: false },
    { id: '2', title: 'Hire Photographer', completed: false },
    { id: '3', title: 'Book Catering Service', completed: false },
    { id: '4', title: 'Plan Mehendi Ceremony', completed: false },
    { id: '5', title: 'Arrange Sangeet Night', completed: false },
    { id: '6', title: 'Book Honeymoon Package', completed: false },
  ];
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const saved = await AsyncStorage.getItem('weddingChecklist');
        if (saved) {
          setTasks(JSON.parse(saved));
        } else {
          setTasks(defaultTasks);
          await AsyncStorage.setItem(
            'weddingChecklist',
            JSON.stringify(defaultTasks),
          );
        }
      } catch (error) {
        console.log('Error loading checklist:', error);
      }
    };
    loadTasks();
  }, []);
  useEffect(() => {
    AsyncStorage.setItem('weddingChecklist', JSON.stringify(tasks));
  }, [tasks]);
  const addTask = () => {
    if (newTask.trim() === '') return;
    const updated = [
      ...tasks,
      { id: Date.now().toString(), title: newTask, completed: false },
    ];
    setTasks(updated);
    setNewTask('');
  };
  const deleteTask = id => {
    const updated = tasks.filter(item => item.id !== id);
    setTasks(updated);
  };
  const handleEdit = (id, title) => {
    setNewTask(title);
    setEditId(id);
  };
  const saveEdit = () => {
    const updated = tasks.map(item =>
      item.id === editId ? { ...item, title: newTask } : item,
    );
    setTasks(updated);
    setEditId(null);
    setNewTask('');
  };
  const toggleComplete = (id) => {
    const updated = tasks.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    );
    setTasks(updated);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>💍 Wedding Checklist</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <TouchableOpacity onPress={() => toggleComplete(item.id)}>
              <Ionicons
                name={item.completed ? 'checkbox' : 'square-outline'}
                size={24}
                color={item.completed ? '#2ecc71' : '#bd0000'}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.taskText,
                {
                  textDecorationLine: item.completed ? 'line-through' : 'none',
                },
              ]}
            >
              {item.title}
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => handleEdit(item.id, item.title)}>
                <Ionicons name="create-outline" size={22} color="#f39c12" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Ionicons name="trash-outline" size={22} color="#e74c3c" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No checklist items. Add one below!</Text>
        }
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add new checklist item..."
          value={newTask}
          onChangeText={setNewTask}
           style={styles.input}
        />
        <TouchableOpacity
          style={styles.addBtn}
          onPress={editId ? saveEdit : addTask}
        >
          <Ionicons
            name={editId ? 'checkmark' : 'add'}
            size={26}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChecklistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
   padding: 16,
  },
  heading:{
     fontSize: 22,
    fontWeight: 'bold',
    color: '#d81b60',
    marginBottom: 16,
    textAlign: 'center',
  },
  taskCard:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fdecef',
    padding: 10,
    marginBottom: 8,
    borderRadius: 12,
  },
  taskText:{
    flex:1,
    marginLeft:10,
    fontSize:16,
    color:'#333'
  },
  actions:{
    flexDirection:'row',
    gap:10,
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10,
  },
  input:{
   flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
  },
  addBtn:{
     backgroundColor: '#d81b60',
    marginLeft: 8,
    padding: 10,
    borderRadius: 12,
  },
  empty:{
    textAlign:"center",
    color:"#888",
    marginTop:20,
  }
});
