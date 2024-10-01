import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';


export default function SliderEntrada() {    
    
    const navigation = useNavigation();
    return (
        <Swiper >
            <View style={styles.container}>
                <Image
                    source={require('../../assets/Slider Entrada/Pantalla Papas.png')}
                    resizeMode='cover'
                    style={styles.sliderImg}
                />
            </View>

            <View style={styles.container}>
                <Image
                    source={require('../../assets/Slider Entrada/Pantalla Coca.png')}
                    resizeMode='cover'
                    style={styles.sliderImg}
                />
            </View>

            <View style={styles.container}>
                <Image
                    source={require('../../assets/Slider Entrada/Pantalla Hamburguesa.png')}
                    resizeMode='cover'
                    style={styles.sliderImg}
                />

                <View style={styles.TercerSlide}>
                    <View style={styles.bottonContainer}>
                        <Pressable style={styles.btnSlider} onPress={() => navigation.navigate('Login')}>
                            <Text >Ingresa</Text>
                        </Pressable>

                        <Pressable style={styles.btnSlider} onPress={() => navigation.navigate('Register')}>
                            <Text>Registrate Gratis</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </Swiper>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },

    sliderImg: {
        flex: 1,
        //resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },

    sliderText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 48,
        color: 'white'
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },

    logoBlanco: {
        resizeMode: 'center',
        width: '90%',
        height: '40%'
    },

    TercerSlide: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textImgContainer: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '4%',
        paddingTop: '20%'
    },

    bottonContainer: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'colum',
        gap: 20,        
        marginTop: '130%'
    },

    btnSlider: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#D5DBDB',
        width: '90%',
        height: '40%',
        borderRadius: 30,
        //boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },

    textContainer: {
        flexDirection: 'row',
        gap: 3
    },

    registerText: {
        fontWeight: 'semibold',
        textAlign: 'center',
        fontSize: 10,
        color: 'white'
    },

    registerLinkText: {
        fontWeight: 'semibold',
        textAlign: 'center',
        fontSize: 10,
        color: '#F1948A'
    }
});



