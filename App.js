/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  ListView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert
} from 'react-native';
import { styles } from './styles/style';
import * as Images from './imgs/images';

const buttonAction = ()=>{
  var random = Math.floor(5*Math.random());
  var frases = Array();
  frases[0]='Frase 1';
  frases[1]='Frase 2';
  frases[2]='Frase 3';
  frases[3]='Frase 4';
  frases[4]='Frase 5';
  Alert.alert(frases[random]);
}

export default class App extends Component {  
  render() {

    const {
      container,
      button,
      buttonText
    } = styles;

    return (
      <View style={container}>
        <Image source={Images.logo} />
        <TouchableOpacity
          style={button}
          onPress={buttonAction}
        >
          <Text style={buttonText}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    ); 
  }
}; 