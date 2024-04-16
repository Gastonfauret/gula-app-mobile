import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import FloatingMenu from '../Home/FloatingMenu';
import Header from '../Home/Header';
import ExpandableItem from './ExpandableItem';
import ExpandableItemLogOut from './ExpandableItemLogOut';
import MainSlider from '../MainSlider';


export default function Profile() {
    return (
        <>
            <View style={styles.container}>
                <Header />

                <View style={styles.profileContainer}>
                    <View>
                        <Image style={styles.profilePhoto} source={require('../../assets/Profile Image.png')}></Image>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textProfileName}>Adrian Calo</Text>
                        <Text style={styles.textProfileEmail}>calo@gula.com</Text>
                        <Text style={styles.textProfile}>Benito Juarez</Text>
                    </View>
                </View>

                <View style={styles.expandableItemContainer}>
                    <ExpandableItem title='Datos Personales' content={['Nombre Completo: Adrian Calo', 'Edad: 33 años', 'Dni: 35411043', 'Fecha de Nac.: 12/10/1990', 'Direccion: Pelegrini 120', 'Localidad: Benito Juarez, Buenos Aires, Argentina']} />

                    <ExpandableItem title='Ayuda' content={['Telefono: (02281) 15 123456', 'Email: ayuda@gula.com', 'Web: www.gula.com']} />

                    <ExpandableItem
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
        fontSize: 26,
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