import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Visor from '../Visor/Visor'

class Result extends Component {
  constructor(props){
    super(props)
  }

 render(){
   return(
    <Visor style={styles.container} />
   );
  }
 }

 const styles = StyleSheet.create({
  container: {
  }
});

export default Result;