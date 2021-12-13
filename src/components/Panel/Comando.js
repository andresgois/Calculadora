import React, { Component } from 'react';
import { StyleSheet, Button} from 'react-native';

class Comando extends Component {
  constructor(props){
    super(props)
  }

 render(){
   return(
    <Button 
      styles={styles.btn}
      title='Calcular'
      onPress={this.props.acao}
    />
   );
  }
 }

export default Comando;


const styles = StyleSheet.create({
  btn: {
    height: 120,
  },
});