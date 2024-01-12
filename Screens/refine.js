import React from "react";;
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RefineScreen = ()=>{
    const navigation = useNavigation();
    return (
        <View>
            <Text>This is Refine Screen</Text>
            <Button title="Go to Explore Screen" onPress={()=> navigation.navigate('Explore')}/>
            <Button title="Go to Explore Home Screen" onPress={()=> navigation.navigate('Home')}/>
        </View>
    );
};

export default RefineScreen;