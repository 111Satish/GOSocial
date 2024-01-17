import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { FontAwesome, Fontisto, Entypo, AntDesign } from '@expo/vector-icons';
import { Image, StyleSheet } from 'react-native'; 
import ExploreScreen from '../Screens/explore';
import ChatScreen from '../Screens/chat';
import ContactScreen from '../Screens/contacts';
import GroupScreen from '../Screens/group';
import NetworkScreen from '../Screens/network';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Explore') {
                        return <Image style={styles.icon} source= {require('../assets/icons/eye.png')} />;
                    } 
                    else if (route.name === 'Network') {
                        return <Image style={styles.icon} source= {require('../assets/icons/network.png')} />;
                    }
                    else if(route.name === 'Chat'){
                        return <Image style={styles.icon} source= {require('../assets/icons/chat.png')} />;
                    }
                    else if(route.name === 'Contacts'){
                        return <Image style={styles.icon} source= {require('../assets/icons/contacts.png')} />;
                    }
                    else if(route.name === 'Groups'){
                        return <Image style={styles.icon} source= {require('../assets/icons/hash.png')} />;
                    }
                },
                tabBarLabelStyle:{
                    fontSize:16,
                    fontWeight:'bold'
                },
    
            })}

        >
            <Tab.Screen name="Explore" component={ExploreScreen}/>
            <Tab.Screen name="Network" component={NetworkScreen}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
            <Tab.Screen name="Contacts" component={ContactScreen}/>
            <Tab.Screen name="Groups" component={GroupScreen}/>

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    icon:{
        width:30,
        height:30,
    }
})

export default BottomTab;
