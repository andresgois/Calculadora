import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends Component {

 render(){
   return(
    <View style={styles.topo}>
      <Text style={styles.texto}>
        Calculadora 1.0
      </Text>
    </View>
   );
  }
 }

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