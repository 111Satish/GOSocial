// SearchComponent.js

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchComponent = () => {
    //{ onSearch }
//   const [searchText, setSearchText] = useState('');

//   const handleSearch = () => {
//     onSearch(searchText);
 // };
 //

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#999"
        // onChangeText={(text) => setSearchText(text)}
        // value={searchText}
      />
      <TouchableOpacity style={styles.searchButton}>
        <Feather name="search" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 45,
    paddingVertical: 2,
    paddingHorizontal: 25,
    borderWidth:1,
    margin:10,
    width:'75%'
  },
  input: {
    flex: 1,
    height: 30,
    color: '#333',
  },
  searchButton: {
    borderRadius: 10,
    marginLeft: 5,
    padding: 1,
  },
});

export default SearchComponent;
