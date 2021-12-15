import React, { Component} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class Numero extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <TextInput 
          style={styles.Numero}
          value={this.props.num}
          onChangeText={ valorCampo => this.props.atualizaValor(this.props.name, valorCampo)}
        />
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  Numero: {
    height: 80,
    width: 140,
    fontSize: 20,
    borderBottomWidth: 0.5,
  },
})

export default Numero;