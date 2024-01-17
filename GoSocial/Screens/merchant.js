import React from "react";
import { View, Text, Button, Image, FlatList, TouchableOpacity} from "react-native";
import SearchComponent from "../Components/search";
import MerchantProfile from "../Components/merchantProfile";
import FloatingButton from "../Components/floatingButton";
const MerchantScreen = ()=>{
    const user1 = {
        companyName: 'Car Trails',
        profilePic: 'https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg',
        city: 'Trichy',
        serviceType: 'Taxi',
        phoneNumber: 9097983136,
        joningStatus: 1,
        locationCoord: [122.444, 111.000],
        profileScore: 8,
        bio: 'Hi community! We have great deals for you Check us out !! \n Taxi service',
    };
    const user2 = {
        companyName: 'Just Electric',
        profilePic: 'https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg',
        city: 'Chennai',
        serviceType: 'Electrician',
        phoneNumber: 9097983136,
        joningStatus: 1,
        locationCoord: [122.444, 111.000],
        profileScore: 6,
        bio: 'Hi community! We have great deals for you Check us out !! \n Taxi service',
    };

    let users = [user1, user2, user1, user2]; // This data will came from backend

    let renderItems = ({item})=>{
        return(
            <MerchantProfile user = {item}/>
        )
    }
    return(
        <View style={{flex:1,flexDirection: 'column'}}>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <SearchComponent />
                <TouchableOpacity>
                    <Image
                        source={require('../assets/settingsIcon.png')}
                        style={{ width: 30, height: 30, margin: 10 }}
                    />
                </TouchableOpacity>
            </View>
            <FlatList data = {users} renderItem = {renderItems}/>
            <FloatingButton />
        </View>
    );
};

export default MerchantScreen