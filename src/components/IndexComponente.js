import React, { Component } from 'react';
import { View } from 'react-native';
import Panel from './Panel/Painel';
import Result from './Result/Result';
import Top from './Top/Top';
// top result painel
class IndexComponente extends Component {
  constructor(props){
    super(props)
    this.state = {num1: '', num2: '', operacao: '', resultado: ''}
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular(){
    let result = 0
    switch(this.state.operacao){
      case 'soma':
        result = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;
      case 'subtracao':
        result = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;
      default:
        result = 0;
    }
    console.log(result)
    this.setState({ resultado: result.toString() })
  }

  atualizaValor(name, num){
    const obj = {};
    obj[name] = num;
    this.setState(obj)
  }

  atualizaOperacao(op){
    this.setState({operacao: op})
  }

 render(){
   return(
     <View>
       <Top />
       <Result
        resultado={this.state.resultado}
       />
       <Panel 
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaOperacao={this.atualizaOperacao}
          atualizaValor={this.atualizaValor}
       />
     </View>
   );
  }
 }

export default IndexComponente;