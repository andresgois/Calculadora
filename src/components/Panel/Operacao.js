
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Picker from 'react-native-picker-select';

const operacoes = [
  { label: "Soma", value: "soma" },
  { label: "Subtração", value: "subtracao" },
];

export default class Operacao extends Component {
  render(){
    return(
      <Picker 
        style={styles.Operacao}
        placeholder={{ label: "Selecione a operação", value: null }}
        items={operacoes}
        onValueChange={ (op) => { this.props.atualizaOperacao(op) }}
        value={this.props.operacao}
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
