import React from 'react';
import { View, Text, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type DetailRouteProp = RouteProp<RootStackParamList, 'Detalle'>;
type DetailNavProp = NativeStackNavigationProp<RootStackParamList, 'Detalle'>;

type Props = {
    route: DetailRouteProp;
    navigation: DetailNavProp;
};

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
    const { productId, userName } = route.params;

    return (
        <View style={{ padding: 16, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, marginBottom: 8 }}>
                Estás en la pantalla de Detalle
            </Text>
            <Text>Producto: #{productId}</Text>
            <Text>Usuario: {userName}</Text>

            <Button
                title="Ir a Acerca de"
                onPress={() =>
                    navigation.navigate('AcercaDe', {
                        appName: 'MiPrimeraApp',
                        version: '1.0.0',
                    })
                }
            />
        </View>
    );
};

export default DetailScreen;
