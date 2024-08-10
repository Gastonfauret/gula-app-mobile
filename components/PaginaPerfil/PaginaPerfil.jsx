import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import FloatingMenu from '../Home/MenuFlotante';
import Header from '../Home/Header';
import ExpandableItem from './ItemsExpandibles';
import ExpandableItemSalir from './ItemsExpandiblesSalir';
import useGetUserData from '../../hooks/useGetUserData'
import useGetProfileData from '../../hooks/useGetProfileData';
import { ipAddress } from '../../ipconfig/ipconfig';



export default function PaginaPerfil() {
    const [userData, setUserData] = useState(null);
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await useGetUserData();
                setUserData(userData);

                const profileData = await useGetProfileData();
                setProfileData(profileData);

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }

        fetchData();
    }, []);
   

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <>
            <View style={styles.container}>
                <Header />

                <View style={styles.profileContainer}>
                    <View>
                    <Image style={styles.profilePhoto} source={{ uri: `http://${ipAddress}:3070/assets/uploads/profile/${profileData.profilePicture}` }} />

                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textProfileName}>{userData.name}</Text>
                        <Text style={styles.textProfileEmail}>{userData.email}</Text>
                        <Text style={styles.textProfile}>{profileData.location}</Text>
                    </View>
                </View>

                <View style={styles.expandableItemContainer}>
                    <ExpandableItem title='Datos Personales' content={[`${userData.name}`,`${profileData.birthDate}`, `${profileData.location}`]} />

                    <ExpandableItem title='Ayuda' content={['Telefono: (02281) 15 123456', 'Email: ayuda@gula.com', 'Web: www.gula.com']} />

                    <ExpandableItemSalir
                        title="Cerrar Sesión"
                        content={['Salir']}
                    />
                </View>


                <FloatingMenu />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    expandableItemContainer: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'start',
        paddingTop: '3%',
        width: '96%',
    },

    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '96%',
        height: '15%',
        borderWidth: 1,
        borderColor: '#D5DBDB',
        borderRadius: 3,
        marginTop: '2%'
    },

    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#5D6D7E',
    },

    textContainer: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        gap: 6
    },

    textProfileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: '-3%'
    },

    textProfileEmail: {
        fontSize: 15,
        fontWeight: 'semibold',
        color: 'black'
    },

    textProfile: {
        fontSize: 11,
        fontWeight: 'semibold',
        color: 'black'
    }
})