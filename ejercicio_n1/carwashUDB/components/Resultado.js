import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resultado = ({ nombreCliente, precio, propina, impuestos, pagoFinal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen del Servicio</Text>
      <Text style={styles.label}>Cliente:</Text>
      <Text style={styles.text}>{nombreCliente}</Text>
      <Text style={styles.label}>Precio del Servicio:</Text>
      <Text style={styles.text}>${precio.toFixed(2)}</Text>
      <Text style={styles.label}>Propina (5%):</Text>
      <Text style={styles.text}>${propina.toFixed(2)}</Text>
      <Text style={styles.label}>Impuestos (13%):</Text>
      <Text style={styles.text}>${impuestos.toFixed(2)}</Text>
      <Text style={styles.label}>Pago Final:</Text>
      <Text style={styles.text}>${pagoFinal.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1976d3',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Resultado;
