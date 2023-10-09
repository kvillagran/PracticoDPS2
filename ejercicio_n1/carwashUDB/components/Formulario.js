import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = ({ calcularTotal }) => {
  const [nombreCliente, setNombreCliente] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState('motocicleta');
  const [tipoServicio, setTipoServicio] = useState('lavado basico');

  return (
    <View style={{ padding: 20 }}>
      <Text style={ styles.txt }>Nombre del Cliente:</Text>
      <TextInput style={ styles.txt }
        placeholder="Nombre del cliente"
        value={nombreCliente}
        onChangeText={(text) => setNombreCliente(text)}
      />

      <Text style={ styles.txt }>Tipo de Vehículo:</Text>
      <Picker style={ styles.txt }
        selectedValue={tipoVehiculo}
        onValueChange={(itemValue) => setTipoVehiculo(itemValue)}
      >
        <Picker.Item label="Motocicleta" value="motocicleta" />
        <Picker.Item label="Carro Sedán" value="carro sedan" />
        <Picker.Item label="Camioneta" value="camioneta" />
        <Picker.Item label="Microbús" value="microbus" />
        <Picker.Item label="Autobús" value="bus" />
      </Picker>

      <Text style={ styles.txt }>Tipo de Servicio:</Text>
      <Picker 
        style={ styles.txt }
        selectedValue={tipoServicio}
        onValueChange={(itemValue) => setTipoServicio(itemValue)}
      >
        <Picker.Item label="Lavado Básico" value="lavado basico" />
        <Picker.Item label="Lavado Premium" value="lavado premium" />
        <Picker.Item label="Lavado VIP" value="lavado VIP" />
        <Picker.Item label="Polarizados" value="polarizados" />
      </Picker>

      <Button title="Calcular Total" onPress={() => calcularTotal(nombreCliente, tipoVehiculo, tipoServicio)} />
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1976d3',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Formulario;
