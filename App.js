import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, BackHandler, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/home';
import ExploreScreen from './Screens/explore';
import RefineScreen from './Screens/refine';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen
          name="Explore"
          component={ExploreScreen}

          options={({ navigation }) => ({
            title: null,
            headerLeft: () => (
              <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
              <View style={{ flexDirection: 'row' }}>
                <View style={leftStyle.container}>
                  <View style={leftStyle.line} />
                  <View style={leftStyle.line} />
                  <View style={[leftStyle.line, leftStyle.halfHeightLine]} />
                </View>
                <View style={{ marginLeft: 20 }}>
                  <Text>Howdy Satish Kumar!!</Text>
                  <Text>📍 Tiruchirappalli</Text>
                </View>
              </View>
              </TouchableOpacity>
            ),


            headerRight: () => (
              <TouchableOpacity onPress={()=>navigation.navigate('Refine')}>
              <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                  <View style={styles.squareBox} />
                  <View style={styles.horizontalLine} />
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.checkMark}>✓</Text>
                  <View style={styles.horizontalLine} />
                </View>
                <View>
                  <Text>Refine</Text>
                </View>
              </View>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Refine"
          component={RefineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const leftStyle = StyleSheet.create({
  container: {
    width: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    margin: 2,
  },
  line: {
    width: '100%',
    height: 3,
    backgroundColor: 'black',
    marginVertical: 3,
    borderRadius: 30,
  },
  halfHeightLine: {
    width: '50%',
    alignSelf: 'flex-start'
  },
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    margin:2,
  },
  squareBox: {
    borderWidth:3,
    width: 10,
    height: 10,
    backgroundColor: 'white', 
  },
  horizontalLine: {
    height: 3,
    width: 18, 
    backgroundColor: 'black', 
    margin: 3,
    borderRadius:30, 
  },
  checkMark: {
    fontSize: 12,
    color: 'black',
    fontWeight:'900'
  },
});


export default App;
