import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Numero from './Numero';

class Entrada extends Component {
  constructor(props){
    super(props)
  }

 render(){
   return(
     <View style={styles.container}>
       <Numero num={this.props.num1} />
       <Numero num={this.props.num2} />
     </View>
   );
  }

}

export default Entrada;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },
});