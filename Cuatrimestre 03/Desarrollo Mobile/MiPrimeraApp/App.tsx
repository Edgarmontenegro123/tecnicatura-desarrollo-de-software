import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
/*import Icon from 'react-native-vector-icons/Ionicons';*/
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingScreen';
import {RootStackParamList} from './types/navigation';


const Tab = createBottomTabNavigator<RootStackParamList>();
const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName: string;

                    switch (route.name) {
                        case 'Inicio':
                            iconName = 'home-outline';
                            break;
                        case 'Perfil':
                            iconName = 'person-outline';
                            break;
                        case 'Configuracion':
                            iconName = 'settings-outline';
                            break;
                        default:
                            iconName = 'help';
                            break;
                    }
                    return <Ionicons name={iconName} size = {size} color={color} />;
                },
                tabBarActiveTintColor: '#2563eb',
                tabBarInactiveTintColor: '#6b7280',
                tabBarLabelStyle: {fontSize: 14},
                tabBarStyle: {height: 58, paddingBottom: 0, paddingTop: 6},
            })}>
                <Tab.Screen name='Inicio' component={HomeScreen} />
                <Tab.Screen
                    name='Perfil'
                    component={ProfileScreen}
                    options={{
                        tabBarBadge: 3, // 🔥 el número que quieres mostrar
                        tabBarBadgeStyle: { backgroundColor: 'red', color: 'white' },
                    }}
                />

                <Tab.Screen name='Configuracion' component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App;