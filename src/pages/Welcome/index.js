import React from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

  const navigation = useNavigation();

 return (
   <SafeAreaView style={styles.container}>
    <View style={styles.containerLogo}>
        <Animatable.Image  
            animation="flipInX" 
            source={require('../../assets/logo.png')} 
            resizeMode="contain" 
            style={styles.image}
        />
    </View>

    <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}> Monitore, organize seus gastos de qualquer lugar </Text>
        <Text style={styles.subTitle}> Faça o login para começar </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
    </Animatable.View>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69D',

    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#38a69D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingEnd: '5%',
        paddingStart: '5%',
    },
    image: {
        width: '100%',
    }, 
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    subTitle: {
        color: '#a1a1a1',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69D',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontweight: 'bold',
    }
})
