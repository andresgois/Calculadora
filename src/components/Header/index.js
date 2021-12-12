import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => (
  <View style={styles.topo}>
    <Text style={styles.texto}>
      Calculadora 1.0
    </Text>
  </View>
);

const styles = StyleSheet.create({
  topo: {
    padding: 10,
    backgroundColor: '#2196f3',
    alignItems: 'center',
  },
  texto: {
    fontSize: 25,
    color: '#fff',
  }
})

export {Header};