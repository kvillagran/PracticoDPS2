import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Formulario = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [saldo, setSaldo] = useState("");
  const [impuesto, setImpuesto] = useState(0);

  const calcularISR = (monto) => {
    if (monto > 2500) {
      return monto * 0.25; 
    } else if (monto >= 1000 && monto <= 2500) {
      return monto * 0.18; 
    } else {
      return monto * 0.07; 
    }
  };

  const guardarDatos = async () => {
    if (nombres && apellidos && saldo) {
      const saldoFloat = parseFloat(saldo);
      const impuestoCalculado = calcularISR(saldoFloat);
      let porcentajeAplicado = 0;

      if (saldoFloat > 2500) {
        porcentajeAplicado = 25;
      } else if (saldoFloat >= 1000 && saldoFloat <= 2500) {
        porcentajeAplicado = 18;
      } else {
        porcentajeAplicado = 7;
      }

      const nuevoRegistro = {
        nombres,
        apellidos,
        saldo: saldoFloat,
        impuesto: impuestoCalculado,
        porcentaje: porcentajeAplicado,
      };

      try {
        const registrosActuales =
          (await AsyncStorage.getItem("registros")) || "[]";
        const registros = JSON.parse(registrosActuales);
        registros.push(nuevoRegistro);

        await AsyncStorage.setItem("registros", JSON.stringify(registros));

        alert("Datos guardados correctamente");
        setNombres("");
        setApellidos("");
        setSaldo("");
        setImpuesto(impuestoCalculado); 
      } catch (error) {
        console.error("Error al guardar los datos:", error);
      }
    } else {
      alert("Por favor, completa todos los campos");
    }
  };

  return (
    <>
      <View style={styles.contenedorSUP}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Calculadora de Impuestos</Text>
      </View>
      <View style={styles.Formulario}>
        <View style={{marginTop:15}}>
        <Text style={styles.inputxt}> Ingresa tus Nombres:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNombres(text)}
          value={nombres}
          placeholder="Nombres"
        />
        <Text style={styles.inputxt}>Ingresa tus Apellidos:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setApellidos(text)}
          value={apellidos}
          placeholder="Apellidos"
        />
        <Text style={styles.inputxt}>Ingresa tu Salario:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSaldo(text)}
          value={saldo}
          keyboardType="numeric"
          placeholder="Saldo"
        />
        </View>
       <View style={styles.contboton}>
       <TouchableOpacity onPress={guardarDatos} style={styles.button}>
          <Text style={{fontSize:18}}>Guardar</Text>
        </TouchableOpacity>
       </View>
        {impuesto > 0 && (
          <Text style={{marginTop:10, marginLeft:10, fontSize:15, textAlign:'center', fontWeight:'bold'}}>Impuesto Sobre la Renta (ISR): ${impuesto.toFixed(2)}</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedorSUP: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 2,
    borderColor: "#a8a8a8",
  },
  Formulario: {
    backgroundColor: "#fff",
    flex: 8,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#a8a8a8",
  },
  inputxt: {
    fontSize: 18,
    marginLeft:10,
    fontWeight:'bold'
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#a8a8a8",
    borderRadius: 5,
    margin: 10,
    fontSize:18,
    paddingLeft:10
  },
  button: {
    backgroundColor: "#85E6C5",
    width: 170,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  contboton:{
    marginTop:15,
    alignItems:'center'
  }
});

export default Formulario;
