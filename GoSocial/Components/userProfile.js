
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserProfile = ({user}) => {
    
    return (
        <View style={styles.container}>
            <View style= {{flexDirection:'row', }}>
                <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
                <View>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.detail}>{user.city + ' | ' + user.occupation}</Text>
                    <Text style={styles.name}>{'Within ' + user.distance + ' m'}</Text>
                    <View style={styles.profileScoreBack}>
                        <View style={[styles.profileScore, { width: user.profileScore * 10 }]} />
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={{color:'#0F3D71',}}>{user.connectionStatus}</Text>
                </TouchableOpacity>
            </View>

            <View>
                
                <Text style={styles.detail}>{user.purpose.join(' | ')}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 25,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        margin:10,
        marginBottom:0,
    },
    profilePic: {
        marginRight:15,
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
        marginBottom: 10,
    },
    profileScore: {
        borderRadius: 40,
        height: 15,
        backgroundColor: '#0F3D71',
        marginBottom: 10,
    },
    bio: {
        color:'#0F3D71',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
});

export default UserProfile;
