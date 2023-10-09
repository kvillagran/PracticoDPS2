import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Historial from "./src/components/Historial";
import Formulario from "./src/components/Formulario";

const TabNavigator = createBottomTabNavigator();

function Tabs () {
return(
  
  <TabNavigator.Navigator
  initialRouteName="Impuesto SV">
    <TabNavigator.Screen 
    name="Impuesto SV" 
    component={Formulario}
    options={{
      tabBarLabel:"Formulario",
      tabBarIcon: ({color, size}) =>(
        <MaterialCommunityIcons name="calculator-variant" size={30} color={"black"} />
      ),
    }}/>
    <TabNavigator.Screen 
    name="Historial" 
    component={Historial}
    options={{
      tabBarLabel:"Historial",
      tabBarIcon: ({color, size}) =>(
        <FontAwesome name="history" size={30} color={"black"} />
      ),
    }}/>
  </TabNavigator.Navigator>
);
}

export default function Navigation (){
  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}