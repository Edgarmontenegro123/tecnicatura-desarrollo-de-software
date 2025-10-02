import React from 'react';
import { View, Text, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type AboutRouteProp = RouteProp<RootStackParamList, 'AcercaDe'>;
type AboutNavProp = NativeStackNavigationProp<RootStackParamList, 'AcercaDe'>;

type Props = {
    route: AboutRouteProp;
    navigation: AboutNavProp;
};

const About: React.FC<Props> = ({ route, navigation }) => {
    const { appName, version } = route.params;

    return (
        <View style={{ padding: 16, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, marginBottom: 12 }}>
                Pantalla Acerca de
            </Text>
            <Text>App: {appName}</Text>
            <Text>Versión: {version}</Text>

            <View style={{ marginTop: 20 }}>
                <Button title="Volver a Detalle" onPress={() => navigation.goBack()} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title="Volver a Inicio" onPress={() => navigation.navigate('Inicio')} />
            </View>
        </View>
    );
};

export default About;
