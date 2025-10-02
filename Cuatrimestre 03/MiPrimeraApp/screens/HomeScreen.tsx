/*
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla de Inicio</Text>
            <Text>Bienvenid@ a la App con pestañas!</Text>
        </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    }
})*/

import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen: React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Prueba de ícono:</Text>
            <Ionicons name="home-outline" size={50} color="blue" />
        </View>
    );
};

export default HomeScreen;
