import { StyleSheet } from "react-native";

export default StyleSheet.create({ 
    container:{
      flex: 1,
      justifyContent:'center',
      alignItems: 'center', 
    },
  
    fonte:{
      fontSize: 40,
    },
  
    input:{
      padding: 15,
      borderRadius: 10,
      borderWidth: 1.5,
      margin: 15,
    },

    titulo:{
      borderRadius: 15,
      padding: 10,
      shadowRadius: 1,
      backgroundColor: 'white',
      textAlign: 'center',
      fontSize: 25,
      marginBottom: 50,
    },

    subtitulo:{
      fontSize: 20,
      
    },

    botao:{
      borderRadius: 10,
      borderWidth: 1,
      paddingTop: 10,
    },

    fundo: {
      flex: 1,
      width: '100%',
      height: '100%',  
    },
})