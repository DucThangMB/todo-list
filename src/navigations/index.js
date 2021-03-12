import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import WorkList from '../screens/WorkList';
import AddNotes from '../screens/AddNotes';
import WorkDetail from '../screens/WorkDetail';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="WorkList" component={WorkList} />
        <Stack.Screen name="AddNotes" component={AddNotes} />
        <Stack.Screen name="WorkDetail" component={WorkDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
