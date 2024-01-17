// SearchComponent.js

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
//import { Feather } from '@expo/vector-icons';

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
        <Image style={styles.icon} source = {require('../assets/icons/search.png')}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    borderColor:'#08376C',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 45,
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderWidth:1,
    margin:10,
    width:'75%'
  },
  icon:{
    width:30,
    height:30,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  searchButton: {
    borderRadius: 10,
    marginLeft: 5,
    padding: 1,
  },
});

export default SearchComponent;
