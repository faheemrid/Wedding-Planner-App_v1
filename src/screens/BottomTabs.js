import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ChecklistScreen from './ChecklistScreen';
import VenuesScreen from './VenuesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from './CustomHeader'

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize;
          let iconColor;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            iconColor = '#A0333A';
            iconSize = focused ? 30 : 26;
          } else if (route.name === 'Checklist') {
            iconName = focused ? 'checkmark-done' : 'checkmark-done-outline';
            iconColor = '#A0333A';
            iconSize = focused ? 30 : 26;
          } else if (route.name === 'Venues') {
            iconName = focused ? 'business' : 'business-outline';
            iconColor = '#A0333A';
            iconSize = focused ? 30 : 26;
          }
          return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
        },
        tabBarActiveTintColor: '#E91E63',
        tabBarInactiveTintColor: 'gray',
        // headerShown: true,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <CustomHeader title="Home" />,
        }}
      />
      <Tab.Screen
        name="Checklist"
        component={ChecklistScreen}
        options={{
          header: () => <CustomHeader title="Checklist" />,
        }}
      />
      <Tab.Screen
        name="Venues"
        component={VenuesScreen}
        options={{
          header: () => <CustomHeader title="Venues" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
