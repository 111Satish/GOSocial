import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavigationContainer from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PersonalScreen from "./personal";
import BusinessScreen from "./business";
import MerchantScreen from "./merchant";

const Tab = createMaterialTopTabNavigator();
const ExploreScreen = () => {
  const navigation = useNavigation();
  return (
      <Tab.Navigator initialRouteName="Personal">
        <Tab.Screen name="Personal" component={PersonalScreen} />
        <Tab.Screen name="Business" component={BusinessScreen}/>
        <Tab.Screen name="Merchant" component={MerchantScreen}/>
      </Tab.Navigator>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ExploreScreen;