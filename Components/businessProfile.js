
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
const BusinessProfile = () => {
    const user = {
        name: 'Aman Singh',
        profilePic: 'https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg',
        city: 'Trichy',
        job: 'SDE',
        phoneNumber: 9097983136,
        joningStatus: 1,
        connectionStatus: '+ INVITE',
        locationDist: 15.0,
        profileScore: 8,
        experiance: 1,
        bio: 'Passionate about coding and exploring new technologies.',
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
                <View>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.detail}>{user.city + ', within ' + user.locationDist + ' KM'}</Text>
                    <View style={styles.profileScoreBack}>
                        <View style={[styles.profileScore, { width: user.profileScore * 10 }]} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.iconContainer}>
                            <Feather name='phone-call' size={24} color='white' />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.iconContainer, { flexDirection: 'row' }]}>
                            <Feather name='user' size={24} color='white' />
                            <Text style={{ fontSize: 10, color: 'white' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text>{user.connectionStatus}</Text>
                </TouchableOpacity>
            </View>

            <View>

                <Text style={styles.job}>{user.job + " | " + user.experiance + ' years of experience'}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 25,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        margin: 10,
        marginBottom: 0,
    },
    profilePic: {
        marginRight: 15,
        width: 100,
        height: 100,
        borderRadius: 15,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detail: {
        fontSize: 16,
        marginBottom: 3,
    },
    profileScoreBack: {
        width: 100,
        borderRadius: 40,
        height: 15,
        backgroundColor: 'red',
        margin: 5,
    },
    profileScore: {
        borderRadius: 40,
        height: 15,
        backgroundColor: 'blue',
        marginBottom: 10,
    },
    job:{
        fontWeight:'bold'
    },
    bio: {
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
    iconContainer: {
        backgroundColor: 'black',
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginLeft: 10,
    },
});

export default BusinessProfile;
