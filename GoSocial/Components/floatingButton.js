import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
// import { 
//     Ionicons, 
//     AntDesign, 
//     Foundation, 
//     MaterialCommunityIcons,
//     FontAwesome,
//     FontAwesome5,
// } from '@expo/vector-icons';
const FloatingButton = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isPlusVisible, setPlusVisible] = useState(true);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setPlusVisible(!isPlusVisible);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.floatingButton} onPress={toggleModal}>
                <Text style={{ fontSize: 30, color: isPlusVisible ? 'white' : 'blue' }}>+</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(!isModalVisible);
                }}
            >
                <View style={styles.modalContainer}>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Dating</Text>
                        <View style={styles.circularIcon}>
                        {/* <FontAwesome5 name="hand-holding-heart" size={24} color="black" /> */}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Matrimony</Text>
                        <View style={styles.circularIcon}>
                        {/* <MaterialCommunityIcons name="ring" size={24} color="black" /> */}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Buy-Sell-Rent</Text>
                        <View style={styles.circularIcon}>
                        {/* <FontAwesome name="shopping-bag" size={24} color="black" /> */}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Business Cards</Text>
                        <View style={styles.circularIcon}>
                        {/* <MaterialCommunityIcons name="card-account-details-star" size={24} color="black" /> */}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Clan Groups</Text>
                        <View style={styles.circularIcon}>
                        {/* <FontAwesome name="group" size={24} color="black" /> */}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Jobs</Text>
                        <View style={styles.circularIcon}>
                        {/* <MaterialCommunityIcons name="briefcase-search" size={24} color="black" /> */}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Notes</Text>
                        <View style={styles.circularIcon}>
                        {/* <Foundation name="clipboard-pencil" size={24} color="black" /> */}
                        </View>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={styles.modalIcon} onPress={toggleModal}>
                        {/* <Ionicons name="close" size={30} color="white" /> */}
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer:{
        flexDirection:'row',
        marginBottom: 20,
        verticalAlign:'middle'
    },
    caption:{
        textAlignVertical:'center',
        fontWeight:'bold',
        fontSize:18,
        marginRight:10,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 20,
        paddingRight: 25,
        backgroundColor:'rgba(255,255,255,0.9)'
    },
    modalIcon: {
        margin: 10,
    },
    circularIcon: {
        elevation:9,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFD700',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FloatingButton;
