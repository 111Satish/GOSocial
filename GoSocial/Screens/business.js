import React from "react";
import { View, Text, Button, Image, ScrollView, FlatList, TouchableOpacity} from "react-native";
import SearchComponent from "../Components/search";
import BusinessProfile from "../Components/businessProfile";
import FloatingButton from "../Components/floatingButton";
const BusinessScreen = () => {

    const user1 = {
        name: 'Aman Singh',
        profilePic: 'https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg',
        city: 'Trichy',
        job: 'SDE',
        phoneNumber: 9097983136,
        joningStatus: 1,
        connectionStatus: '+ INVITE',
        locationDist: 15.0,
        profileScore: 8,
        experiance: 1,
        bio: 'Passionate about coding and exploring new technologies.',
    };

    const user2 = {
        name: 'Aman Singh',
        profilePic: 'https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg',
        city: 'Trichy',
        job: 'SDE',
        phoneNumber: 9097983136,
        joningStatus: 1,
        connectionStatus: '+ INVITE',
        locationDist: 15.0,
        profileScore: 8,
        experiance: 1,
        bio: 'Passionate about coding and exploring new technologies.',
    };

    let users = [user1, user2, user1, user2];
    const renderItems = ({item}) => {
        return (
            <BusinessProfile user= {item}/>
        );
    };

    return (
        <View style={{ flex:1 }}>
            <View style={{flexDirection: 'row', margin: 10 }}>
                <SearchComponent />
                <TouchableOpacity>
                    <Image
                        source={require('../assets/icons/settings.png')}
                        style={{ width: 30, height: 30, margin: 10 }}
                    />
                </TouchableOpacity>
            </View>
            <FlatList data={users} renderItem={renderItems} />
            <FloatingButton />
        </View>
    );
};

export default BusinessScreen;