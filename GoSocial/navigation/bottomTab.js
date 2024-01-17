import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { FontAwesome, Fontisto, Entypo, AntDesign } from '@expo/vector-icons'; 
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

                    // if (route.name === 'Network') {
                    //     return <Entypo name="network" size={24} color="black" />;
                    // } 
                    // else if (route.name === 'Explore') {
                    //     return <Fontisto name="eye" size={24} color="black" />;
                    // }
                    // else if(route.name === 'Chat'){
                    //     return <Entypo name="chat" size={24} color="black" />
                    // }
                    // else if(route.name === 'Contacts'){
                    //     return <AntDesign name="contacts" size={24} color="black" />
                    // }
                    // else if(route.name === 'Groups'){
                    //     return <FontAwesome name="hashtag" size={24} color="black" />
                    // }
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

export default BottomTab;
