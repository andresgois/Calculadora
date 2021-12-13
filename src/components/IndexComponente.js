import React, { Component } from 'react';
import { View } from 'react-native';
import Panel from './Panel/Painel';
import Result from './Result/Result';
import Top from './Top/Top';
// top result painel
class IndexComponente extends Component {
  constructor(props){
    super(props)
  }

 render(){
   return(
     <View>
       <Top />
       <Result />
       <Panel />
     </View>
   );
  }
 }

export default IndexComponente;