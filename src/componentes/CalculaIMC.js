import React, { useState } from 'react';
import { Button, Text, TextInput} from 'react-native';
import estilos from './estilos';

export default props => {
    const [peso, setPeso] = useState('0');
    const [altura, setAltura] = useState('0.0');
    const [resultado, setResultado] = useState('0.0');
    const [info, setInfo] = useState('');
    
    function Calcular(){
        setResultado(peso / (altura * altura))
        
        if(resultado < 18.5){
            setInfo('Magreza')
        }else if(resultado >= 18.5 && resultado <= 24.9){
            setInfo('Normal')
        }else if(resultado >= 25.0 && resultado <= 29.9){
            setInfo('Sobrepeso')
        }else if(resultado >= 30.0 && resultado <= 39.9){
            setInfo('Obesidade')
        }else{
            setInfo('Obesidade Grave')
        }
    }

    return(
        <>
            <Text style = {estilos.subtitulo}>Peso</Text>
            <TextInput
                style={estilos.input}
                placeholder="Digite o seu peso (Kg): "
                keyboardType="numeric"
                onChangeText={peso => setPeso(peso.replace(',', '.'))}
                
            />

            <Text style = {estilos.subtitulo}>Altura</Text>
            <TextInput
                style={estilos.input}
                placeholder="Digite a sua altura (Mt): "
                keyboardType="numeric"
                onChangeText={altura => setAltura(altura.replace(',', '.'))}
            />

            <Button
                style={estilos.botao}
                title="Calcular"
                onPress={Calcular}
            />

            <Text style = {estilos.subtitulo}> {"\n"}IMC = {resultado} {"\n"}
                Classificação = {info}  </Text>

        </>
    )
}