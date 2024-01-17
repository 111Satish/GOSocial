import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';

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
                <Text style={{ fontSize: 30, color: isPlusVisible ? 'white' : '#0F3D71' }}>+</Text>
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
                        <Image style={styles.icon} source={require('../assets/icons/dating.png')}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Matrimony</Text>
                        <View style={styles.circularIcon}>
                        <Image style={styles.icon} source={require('../assets/icons/ring.png')}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Buy-Sell-Rent</Text>
                        <View style={styles.circularIcon}>
                        <Image style={styles.icon} source={require('../assets/icons/shoppingBag.png')}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Business Cards</Text>
                        <View style={styles.circularIcon}>
                        <Image style={styles.icon} source={require('../assets/icons/businessCard.png')}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Clan Groups</Text>
                        <View style={styles.circularIcon}>
                        <Image style={styles.icon} source={require('../assets/icons/hash.png')}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Jobs</Text>
                        <View style={styles.circularIcon}>
                        <Image style={styles.icon} source={require('../assets/icons/opportunity.png')}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} >
                        <Text style={styles.caption}>Notes</Text>
                        <View style={styles.circularIcon}>
                        <Image style={styles.icon} source={require('../assets/icons/notes.png')}/>
                        </View>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={styles.modalIcon} onPress={toggleModal}>
                    <Image style={styles.icon} source={require('../assets/icons/cross.png')}/>
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
    icon:{
        width:30,
        height:30,
    },
    caption:{
        color:'#0F3D71',
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
        backgroundColor: '#0F3D71',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 70,
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
