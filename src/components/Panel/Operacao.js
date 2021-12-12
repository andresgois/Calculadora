
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Picker from 'react-native-picker-select';

const operacoes = [
  { label: "Soma", value: "soma" },
  { label: "Subtração", value: "subtracao" },
];

export default class Operacao extends Component {
  constructor(props){
    super(props)
    this.state = {
      operacao: ''
    }
  }

  render(){
    return(
      <Picker 
        style={styles.Operacao}
        placeholder={{ label: "Selecione a operação", value: null }}
        items={operacoes}
        onValueChange={ (value) => { this.setState({ operacao: value }); }}
        value={this.state.operacao}
      />
    );
  }
}


const styles = StyleSheet.create({
  Operacao: {
    height: 100,
    fontSize: 30,
    marginBottom: 15,
    marginTop: 15,
  },
})
