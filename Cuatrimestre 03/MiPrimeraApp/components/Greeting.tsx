import {StyleSheet, Text, View} from 'react-native';

const Greeting = () => {
    return (
        <View>
            <Text style={styles.text}>Hola desde otro compónente!</Text>
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