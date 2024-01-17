
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native';
//import { Feather } from '@expo/vector-icons';
const BusinessProfile = ({user}) => {

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
                        <TouchableOpacity style={styles.iconContainer} onPress={() => {
                            Linking.openURL(`tel:${user.phoneNumber}`);

                        }}>
                            <Image style={styles.icon} source = {require('../assets/icons/call.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.iconContainer, { flexDirection: 'row' }]}>
                        <Image style={styles.icon} source = {require('../assets/icons/addPeople.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={{color:'#0F3D71',}}>{user.connectionStatus}</Text>
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
        backgroundColor: 'white',
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
        color:'#0F3D71',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detail: {
        color:'#0F3D71',
        fontSize: 16,
        marginBottom: 3,
    },
    profileScoreBack: {
        width: 100,
        borderRadius: 40,
        height: 15,
        backgroundColor: '#999',
        margin: 5,
    },
    profileScore: {
        borderRadius: 40,
        height: 15,
        backgroundColor: '#0F3D71',
        marginBottom: 10,
    },
    job:{
        color:'#0F3D71',
        fontWeight:'bold'
    },
    bio: {
        color:'#0F3D71',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
    iconContainer: {
        backgroundColor: '#0F3D71',
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginLeft: 10,
    },
    icon:{
        width:30,
        height:30,
    }
});

export default BusinessProfile;
