import React from "react";
import { View, Text, Button, Image } from "react-native";
import SearchComponent from "../Components/search";

const MerchantScreen = ()=>{
    return(
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <SearchComponent />
                <Image
                    source={require('../assets/settingsIcon.png')}
                    style={{ width: 30, height: 30, margin: 10 }}
                />
            </View>
        </View>
    );
};

export default MerchantScreen