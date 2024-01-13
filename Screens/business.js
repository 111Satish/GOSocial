import React from "react";
import { View, Text, Button, Image, ScrollView} from "react-native";
import SearchComponent from "../Components/search";
import BusinessProfile from "../Components/businessProfile";
const BusinessScreen = ()=>{
    return(
        <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', margin: 10 }}>
            <SearchComponent />
            <Image
                source={require('../assets/settingsIcon.png')}
                style={{ width: 30, height: 30, margin: 10 }}
            />
        </View>
        <ScrollView>
            <BusinessProfile/>
            <BusinessProfile/>
            <BusinessProfile/>
            <BusinessProfile/>
            <BusinessProfile/>
            <BusinessProfile/>
            <BusinessProfile/>
            <BusinessProfile/>
            <BusinessProfile/>
            <BusinessProfile/>
            <BusinessProfile/>
            <BusinessProfile/>
        </ScrollView>
    </View>
    );
};

export default BusinessScreen;