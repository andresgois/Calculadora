import React from 'react';
import { Text, View } from 'react-native';
import { Comando } from './Comando';
import Entrada from './Entrada';
import Operacao from './Operacao';

const Panel = (props) => (
  <View>
    <Entrada />
    <Operacao />
    <Comando />
  </View>
);

export {Panel};