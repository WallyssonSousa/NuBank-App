import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/home/index";
import Principal from "./src/paginas/paginaPrincipal";

import Navegation from "./src/Navegation/Navegation";


function App (){
  return<>
    <SafeAreaView style={styles.tela}>
      <Navegation />
    </SafeAreaView>
    
  </>
}

const styles = StyleSheet.create({
  tela:{
    flex: 1
  }
})

export default App;