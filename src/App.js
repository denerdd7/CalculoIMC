import React,{Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import CalculaIMC from './componentes/CalculaIMC';
import estilos from './componentes/estilos';

export default class App extends Component{
  render(){
    return(
      <ImageBackground source={require('./componentes/img/fundo.jpg')} style={estilos.fundo}>
        <View style={estilos.container}>
          <Text style={estilos.titulo}>Calculadora IMC</Text>        
          <CalculaIMC />
        </View>
      </ImageBackground>
    )
  }
}
