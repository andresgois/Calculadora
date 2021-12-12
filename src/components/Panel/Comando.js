import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Comando = (props) => (
  <Button 
    styles={styles.btn}
    title='Calcular'
  />
);

const styles = StyleSheet.create({
  btn: {
    height: 120,
  },
})

export {Comando};