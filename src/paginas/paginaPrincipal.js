import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import logo from '../../assets/logo.png'; 
import padaria from '../../assets/padaria.png';
import carne from '../../assets/investimento.png';
import legumes from '../../assets/legumes.png';

export default function Principal(){
    return<>

        <View style={styles.topo}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.boasVindas}>Oi, Wallysson</Text>
        </View> 
        <View style={styles.principal}>
            
            <TouchableOpacity style={styles.cartao}>
               <Image source={padaria} style={styles.cd}/> 
               <View style={styles.informacoes}>
                <View>
                    <Text style={styles.nome}>Transferências</Text>
                </View>
               </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartao}>
               <Image source={legumes} style={styles.cd}/> 
               <View style={styles.informacoes}>
                <View>
                    <Text style={styles.nome}>Meus Cartões</Text>
                </View>
               </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cartao}>
               <Image source={carne} style={styles.cd}/> 
               <View style={styles.informacoes}>
                <View>
                    <Text style={styles.nome}>investimento</Text>
                </View>
               </View>
            </TouchableOpacity>

        </View>          
</>
  
}

const styles = StyleSheet.create({
    topo:{
        backgroundColor: '#8806c0',
        padding: 30,
    }, 
    logo:{
        width: 100,
        height: 100,
    }, 
    boasVindas:{
        marginTop: 20, 
        fontSize: 26, 
        lineHeight: 42, 
        fontWeight: 700,
        color: '#f0f0f0'
    }, 
    cartao: { 
        backgroundColor: '#8806c0',
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 6, 
        flexDirection: "row",
        alignItems: "center", 
        borderColor: '#8806c0', 
        borderWidth: 4,
        marginTop: 20,

                // Android
                elevation: 4,

                // IOS 
                shadowColor: '#8806c0', 
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 1.30,
                shadowRadius: 3.62,
        
    },
    principal:{
        alignItems: "center", 
        justifyContent: "center", 
        marginTop: 40,
    }, 
    cd:{
        width: 48, 
        height: 48, 
        borderRadius: 6, 
        marginVertical: 16, 
        marginLeft: 11,
    }, 
    informacoes:{
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginLeft: 8, 
        marginVertical: 16,
        marginLeft: 16, 
        marginRight: 17,
        
    }, 
    nome:{
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "700",
        color: '#f0f0f0'
    }
})