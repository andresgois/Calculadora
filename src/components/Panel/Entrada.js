import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Numero } from './Numero';

export default class Entrada  extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.container}>
        <Numero />
        <Numero />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },
})

