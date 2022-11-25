import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Principal from "../paginas/paginaPrincipal";
import Index from "../home/index";

const Tab = createBottomTabNavigator();

export default function Navagtion(){
    return<NavigationContainer>
        <Tab.Navigator 
        tabBarOptions={{
            activeTintColor: "#8806c0",
            inativeTintColor: "#8806c0", 
            labelStyle:{
                fontWeight: 700,
                fontSize: 14,
                marginTop: 4,
                marginBottom: 4,
                width: '100%',
                lineHeight: 25,
            }, 
        }}>
            <Tab.Screen name="Home" component={Index} 
                options={{
                    title: 'Tela Inicial',
                    headerStyle:{
                        backgroundColor: "#f0f0f0", 
                        borderBottomColor: "#8806c0",
                        }, 
                    headerTintColor: "#8806c0", 
                             
                }}
            />
            <Tab.Screen name="telaPrincipal" component={Principal} 
                options={{
                    title: 'NuBank', 
                    headerStyle:{
                        backgroundColor: "#f0f0f0", 
                        borderBottomColor: "#8806c0", 
                    }, 
                    headerTintColor: "#8806c0"
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
}

