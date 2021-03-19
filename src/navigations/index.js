import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Login from '../screens/Login';
import WorkList from '../screens/WorkList';
import AddNotes from '../screens/AddNotes';
import WorkDetail from '../screens/WorkDetail';
import ActiveList from '../screens/ActiveList';
import CompleteList from '../screens/CompleteList';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="WorkList"
        component={WorkList}
        options={{
          tabBarLabel: 'AllList',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ActiveList"
        component={ActiveList}
        options={{
          tabBarLabel: 'ActiveList',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="filter-center-focus"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CompleteList"
        component={CompleteList}
        options={{
          tabBarLabel: 'CompleteList',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="playlist-add-check"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddNotes" component={AddNotes} />
        <Stack.Screen name="WorkDetail" component={WorkDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
