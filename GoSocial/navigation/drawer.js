import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Your custom drawer content */}
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image
          source={require('../assets/profilepic.jpg')} // Add the correct path to your profile picture
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text>User Name</Text>
        <Text>User ID</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
        <Text>My Network</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dating')}>
        <Text>Dating</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Jobs')}>
        <Text>Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BusinessCard')}>
        <Text>BusinessCardScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notes')}>
        <Text>Notes Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;