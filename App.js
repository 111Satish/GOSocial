import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/home'; // Make sure the path is correct
import ExploreScreen from './Screens/explore'; // Make sure the path is correct
import RefineScreen from './Screens/refine';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Refine" component={RefineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
