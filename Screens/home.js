import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>This is Home Screen</Text>
      <Button
        title="Go to Explore Screen"
        onPress={() => navigation.navigate("Explore", { name: "Jane" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
