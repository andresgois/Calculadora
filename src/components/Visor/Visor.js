import React, { Component} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class Visor extends Component {

  constructor(props){
    super(props)
    this.state = {
      resultado: ''
    }
  }

  render(){
    return(
      <View>
        <TextInput 
          style={styles.visor}
          placeholder='Resultado'
          editable={true}
          value={this.state.resultado}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  visor: {
    height: 100,
    fontSize: 30,
    borderBottomWidth: 0.5,
  },
})
