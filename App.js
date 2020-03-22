import React from 'react';
import { StyleSheet, Button, View, TextInput, ActivityIndicator } from 'react-native';

export default function App() {
  const _onPressButton = () => {
    alert('You tapped the button!')
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <TextInput style={styles.input} placeholder="input disini!"></TextInput>
        <Button
          onPress={_onPressButton}
          title="Press Me"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 10,
    marginTop:10, 
    padding:5,
    borderRadius:5
  }
});
