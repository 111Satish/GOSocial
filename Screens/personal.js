import React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import SearchComponent from "../Components/search";
import UserProfile from "../Components/userProfile";
const PersonalScreen = () => {
    // const handleSearch = (searchText) => {

    //     console.log('Searching for:', searchText);
    //   };

    const user1 = {
        name: 'Satish Kumar',
        profilePic: 'https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg',
        city: 'Trichy',
        occupation: 'Student',
        connectionStatus: '+ INVITE',
        distance: '100-200',
        profileScore: 8,
        purpose: ['Coffee', 'Business', 'Friendship'],
        bio: 'Passionate about coding and exploring new technologies.',
    };
    const user2 = {
        name: 'Vishnu Kumar',
        profilePic: 'https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg',
        city: 'Madurai',
        occupation: 'Student',
        connectionStatus: 'Pending',
        distance: '100-200',
        profileScore: 8,
        purpose:['Coffee', 'Business', 'Friendship'],
        bio: 'Passionate about coding and exploring new technologies.',
    };

    let users = [user1, user2, user1, user2, user1]; // This data will came from backend
    let renderItems = ({ item }) => {
        return (
            <UserProfile user={item} />
        );
    };
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <SearchComponent />
                <Image
                    source={require('../assets/settingsIcon.png')}
                    style={{ width: 30, height: 30, margin: 10 }}
                />
            </View>
            <FlatList data={users} renderItem={renderItems} />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PersonalScreen;