
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Numero = (props) => (
  <View>
    <TextInput 
      style={styles.Numero}
    />

  </View>
);

const styles = StyleSheet.create({
  Numero: {
    height: 80,
    width: 140,
    fontSize: 20,
    borderBottomWidth: 0.5,
  },
})

export {Numero};