import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Panel } from './Panel';
import { Result } from './Result';
import { Top } from './Top';

class Index extends Component {
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

export default Index;