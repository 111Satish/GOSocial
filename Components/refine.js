import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Slider from '@react-native-community/slider';

const Refine = () => {
    const availability = ['Available | Hey Let Us Connect',
        'Away | Stay Discrete And Watch',
        'Busy | Do Not Disturb I Will Catch Up Later',
        'SOS | Emergency! Need Assistance! HELP']
    const [selectedItem, setSelectedItem] = useState(availability[0]);
    const [userStatus, setUserStatus] = useState('Hi community! I am open to new connections');
    const [sliderValue, setSliderValue] = useState(50);
    const minSliderValue = 1;
    const maxSliderValue = 100;
    const [selectedPurpose, setSelectedPurpose] = useState([]);
    const options = ['Coffee', 'Business', 'Hobbies', 'Friendship', 'Movies', 'Dining', 'Dating', 'Matrimony'];

    const toggleSelection = (purpose) => {
        if (selectedPurpose.includes(purpose)) {
            setSelectedPurpose((prevSelectedPurpose) =>
                prevSelectedPurpose.filter((selectedPurpose) => selectedPurpose !== purpose)
            );
        } else {
            setSelectedPurpose((prevSelectedPurpose) => [...prevSelectedPurpose, purpose]);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.dropdownContainer}>
                <Text style={styles.label}>Select Your Availability</Text>
                <SelectDropdown
                    data={availability}
                    onSelect={(selectedItem) => setSelectedItem(selectedItem)}
                    buttonTextAfterSelection={(selectedItem) => selectedItem}
                    rowTextForSelection={(item) => item}
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownButtonText}
                    dropdownStyle={styles.dropdown}
                    defaultButtonText={availability[0]}
                />
                {/* {selectedItem && <Text style={styles.selectedText}>{`Selected: ${selectedItem}`}</Text>} */}
            </View>

            <View style={styles.textAreaContainer}>
                <Text style={styles.label}>Add Your Status</Text>
                <TextInput
                    style={styles.textArea}
                    multiline
                    numberOfLines={3}
                    value={userStatus}
                    onChangeText={(text) => setUserStatus(text)}
                />
            </View>

            <View style={styles.sliderContainer}>
                <View style={styles.horizontalLine} />
                <Text style={styles.label}>Select Hyper Local Distance</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={minSliderValue}
                    maximumValue={maxSliderValue}
                    value={sliderValue}
                    onValueChange={(value) => setSliderValue(value)}
                />
                <View style={[styles.sliderThumb, { left: `${(sliderValue / maxSliderValue) * 90}%` }]}>
                    <Text style={styles.sliderValueText}>{Math.round(sliderValue)} KM</Text>
                </View>
            </View>

            <View >
                <Text style={styles.label}>Select Purposes</Text>
                <View style={styles.optionsContainer}>
                    {options.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.option,
                                selectedPurpose.includes(item) ? styles.selectedOption : null,
                            ]}
                            onPress={() => toggleSelection(item)}
                        >
                            <Text style={styles.optionText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    console.log(selectedItem);
                    console.log(userStatus);
                    console.log(sliderValue);
                    console.log(selectedPurpose);
                }}>
                <Text style={{color:'white', fontSize:17}}>Save & Explore</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownContainer: {
        width: '90%',
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
        color: '#16537e',
    },
    dropdownButton: {
        alignSelf:'center',
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#16537e',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownButtonText: {
        width: '90%',
        color: '#16537e',
    },
    dropdown: {
        marginTop: 0,
        paddingTop: 0,
        marginRight: 20,
        width: '100%',
        maxHeight: 200,
        borderColor: '#16537e',
        borderWidth: 1,
        borderRadius: 5,
    },
    //   selectedText: {
    //     marginTop: 0,
    //     fontSize: 16,
    //     color: 'blue',
    //   },
    textAreaContainer: {
        marginTop: 15,
        width: '90%',
    },
    textArea: {
        alignSelf:'center',
        borderWidth: 1,
        borderColor: '#16537e',
        borderRadius: 15,
        padding: 5,
        marginBottom: 16,
        minHeight: 10,
        color: '#16537e'
    },
    sliderContainer: {
        marginTop: 10,
        width: '100%',
    },
    //   horizontalLine: {
    //     width: '80%',
    //     height: 2,
    //     backgroundColor: 'black',
    //     marginVertical: 10,
    //   },
    slider: {
        marginTop:40,
        width: '100%',
    },
    sliderThumb: {
        position: 'absolute',
        top: 30,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#16537e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderValueText: {
        color: 'white',
        fontWeight: 'bold',
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        alignItems: 'center',
    },
    option: {
        flexWrap: 'wrap',
        padding: 10,
        margin: 5,
        borderWidth: 2,
        borderColor: '#16537e',
        borderRadius: 20,
    },
    selectedOption: {
        backgroundColor: '#C6E2FF',
    },
    optionText: {
        fontSize: 16,
        color: '#16537e',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#16537e',
        borderRadius: 30,
        width: '45%',
        height: 35,
        alignItems: 'center',
        padding: 5,
    }
});

export default Refine;

