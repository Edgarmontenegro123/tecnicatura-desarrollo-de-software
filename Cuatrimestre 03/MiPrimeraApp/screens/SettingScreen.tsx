import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen: React.FC = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Qwerty</Text>
            <Text>Próximamente configuración avanzada!</Text>
        </View>
    );
};

export default SettingsScreen;

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