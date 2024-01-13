import React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import SearchComponent from "../Components/search";
const PersonalScreen = () => {
    // const handleSearch = (searchText) => {

    //     console.log('Searching for:', searchText);
    //   };

    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', margin:10 }}>
                <SearchComponent/>
                <Image 
                source={require('../assets/settingsIcon.png')} 
                style={{width:30, height:30, margin:10}}
                />
            </View>

        </View>

    );
};



export default PersonalScreen;