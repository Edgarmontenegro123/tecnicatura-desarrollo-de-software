import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileScreen: React.FC = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Perfil</Text>
            <Text>Nombre: Miranda</Text>
            <Text>Carrera: Tecnicatura Superior en Desarrollo Web</Text>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    }
})