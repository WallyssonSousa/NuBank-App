import React , {useState} from 'react';
import { StyleSheet,  View, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import imagemFundo from '../../assets/planoFundoEntrada.jpg';
//AppMusic
export default function Home() {

    const [input, setInput] = useState('');
    const [ hidePass, setHidePass] = useState(true);


  return (

    <ImageBackground style={styles.planoFundo} source={imagemFundo}>
        <View style={styles.container}>
            
            <TextInput 
                style={styles.email}
                placeholder="Digite seu email:"
                placeholderTextColor="#fff"
            />
            <TextInput 
                style={styles.senha}
                placeholder="Digite sua senha:"
                placeholderTextColor="#fff"
                value={input}
                onChangeText={ (texto) => setInput(texto)}
                secureTextEntry={hidePass}
            />
            <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass)} >
                { hidePass ? 
                    <Ionicons name="eye" color="#f0f0f0" size={25}/>
                    :
                    <Ionicons name="eye-off" color="#f0f0f0" size={25}/>
                }
                
            </TouchableOpacity>
            
        </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({

  planoFundo:{
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  email:{
    marginTop: 0,
    width: '80%',
    fontSize: 18,
    color: '#f0f0f0',
    
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    padding: 10, 
           //Android
           elevation: 0,
           //IOS
           shadowColor: '#000', 
           shadowOffset: {
               width: 1,
               height: 3,
           },
           shadowOpacity: 0.99,
           shadowRadius: 6.00,
  }, 
  senha:{
    marginTop: 10,
    width: '80%',
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 2,
    color: '#f0f0f0',
    
    borderColor: '#fff',
    padding: 10, 
  }, 
  icon:{
    marginTop: 10,
  }, 
  logo:{
    width: 130,
    height: 130,   
  }
});
