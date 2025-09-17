import React from 'react'
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import Greeting from './components/Greeting';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Eddy! Esto es React Native!</Text>
      <Greeting />
      <Button
          title="Press Me"
          onPress={() => {
            Alert.alert('Button Pressed!');
          }}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141313',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f0ffff',
    fontSize: 18,
  }
});
