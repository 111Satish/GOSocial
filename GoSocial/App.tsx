//import 'react-native-gesture-handler'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import CustomDrawerContent from './navigation/drawer';
import BusinessCardScreen from './Screens/businessCard';
import DatingScreen from './Screens/dating';
import JobsScreen from './Screens/jobs';
import NotesScreen from './Screens/notes';
import ProfileScreen from './Screens/profile';
import RefineScreen from './Screens/refine';
import ExploreScreen from './Screens/explore';
import BottomTab from './navigation/bottomTab';
const Drawer = createDrawerNavigator();

const App = () => {
  let user = {name: 'Satish Kumar', location: 'Tiruchirappalli'};
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={props => ({
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#08376C'},

          headerRight: () => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Refine')}>
              <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.squareBox} />
                  <View style={styles.horizontalLine} />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.checkMark}>✓</Text>
                  <View style={styles.horizontalLine} />
                </View>
                <View>
                  <Text style={{color:'white'}}>Refine</Text>
                </View>
              </View>
            </TouchableOpacity>
          ),
        })}>
        <Drawer.Screen
          name="Bottom"
          component={BottomTab}
          options={{
            headerTitle: () => {
              return (
                <View>
                  <Text style={{color: 'white'}}> Howdy {user.name} !!</Text>
                  <Text style={{color: 'white'}}>📍 {user.location}</Text>
                </View>
              );
            },
          }}
        />

        <Drawer.Screen
          name="Refine"
          component={RefineScreen}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={{width:30, height:30}}source={require('./assets/icons/back.png')} />
              </TouchableOpacity>
            ),
            headerRight: () => null,
          })}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Dating" component={DatingScreen} />
        <Drawer.Screen name="Jobs" component={JobsScreen} />
        <Drawer.Screen name="Notes" component={NotesScreen} />
        <Drawer.Screen name="BusinessCard" component={BusinessCardScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 2,
  },
  squareBox: {
    borderWidth: 3,
    width: 10,
    height: 10,
    backgroundColor: '#08376C',
    borderColor:'white',
  },
  horizontalLine: {
    height: 3,
    width: 18,
    backgroundColor: 'white',
    margin: 3,
    borderRadius: 30,
  },
  checkMark: {
    fontSize: 12,
    color: 'white',
    fontWeight: '900',
  },
});

export default App;
