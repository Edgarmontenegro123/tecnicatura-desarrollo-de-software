import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type GreetingProps = {name: string};

const Greeting : React.FC<GreetingProps> = ({name}) => {
    return (
        <View>
            <Text style={styles.text}>Hola {name}!</Text>
        </View>
        )
}

export default Greeting;


const styles = StyleSheet.create({
    text: {
        color: '#f0ffff',
        fontSize: 18,
    }
});