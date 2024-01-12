import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExploreScreen = () => {
    const name = "Satish Kumar"
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Welcome, {name}!</Text>
          <Button
            title="Refine"
            onPress={() => navigation.navigate("Refine")}
          />
        </View>
        <Text>This is the profile screen for {name}</Text>
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