import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyButton from './MyButton';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <View>
            <View style={styles.buttonContainer}>
                <MyButton title = 'Add!!!' onPress={() => setCount(count + 1)} />
                <MyButton title = 'subtract!' onPress={() => setCount(count - 1)} />
            </View>
            <Text style={styles.text}>Counter: {count}</Text>
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    text: {
        color: '#f0ffff',
        fontSize: 18,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
})