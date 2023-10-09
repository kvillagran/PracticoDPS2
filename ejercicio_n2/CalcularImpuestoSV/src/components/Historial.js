import React, { useEffect, useState } from 'react';
import { View, Text,ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Historial = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    obtenerRegistros();
  }, []); 

  useEffect(() => {
    obtenerRegistros();
  }, [registros]); 
  const obtenerRegistros = async () => {
    try {
      const registrosActuales = await AsyncStorage.getItem('registros');
      if (registrosActuales) {
        const registrosParseados = JSON.parse(registrosActuales);
        setRegistros(registrosParseados);
      }
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  };

  const eliminarRegistro = async (index) => {
    try {
      const registrosActuales = await AsyncStorage.getItem('registros');
      if (registrosActuales) {
        const registrosParseados = JSON.parse(registrosActuales);
        registrosParseados.splice(index, 1); 
        await AsyncStorage.setItem('registros', JSON.stringify(registrosParseados));
        setRegistros(registrosParseados); 
      }
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
    }
  };

  return (
    <ScrollView>
      <View style={{alignItems:'center'}}>
      <Text style={{fontSize:20}}>Historial de registros:</Text>
      </View>
      {registros.map((registro, index) => (
        <View key={index} style={styles.contenedor}>
          <Text style={styles.txt} >Nombres: {registro.nombres}</Text>
          <Text style={styles.txt}>Apellidos: {registro.apellidos}</Text>
          <Text style={styles.txt}>Saldo: ${registro.saldo}</Text>
          <Text style={styles.txt}>Impuesto Sobre la Renta (ISR): ${registro.impuesto.toFixed(2)}</Text>
          <Text style={styles.txt}>Porcentaje Aplicado: {registro.porcentaje}%</Text>
          <View style={styles.contboton}>
          <TouchableOpacity onPress={() => eliminarRegistro(index)} style={styles.button}>
          <Text style={{fontSize:18}}>Eliminar</Text>
        </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    marginTop:15
  },
  txt: {
    fontSize: 18,
    marginLeft:10
  },
  button: {
    backgroundColor: "#FF6969",
    width: 170,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  contboton:{
    marginTop:15,
    marginBottom:15,
    alignItems:'center'
  }
});

export default Historial;