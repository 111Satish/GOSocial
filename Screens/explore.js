import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExploreScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>This is Explore Screen</Text>
            <Button title="Go to Refine Screen" onPress={()=>navigation.navigate('Refine')}/>
        </View>
        
    );
  };

export default ExploreScreen;