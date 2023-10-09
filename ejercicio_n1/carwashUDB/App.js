import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

const App = () => {
  const [nombreCliente, setNombreCliente] = useState('');
  const [precio, setPrecio] = useState(0);
  const [propina, setPropina] = useState(0);
  const [impuestos, setImpuestos] = useState(0);
  const [pagoFinal, setPagoFinal] = useState(0);

  const calcularTotal = (nombreCliente, tipoVehiculo, tipoServicio) => {
    const precios = {
      'lavado basico': { motocicleta: 2, 'carro sedan': 3, camioneta: 4, microbus: 5, bus: 6 },
      'lavado premium': { motocicleta: 2.5, 'carro sedan': 3.5, camioneta: 4.5, microbus: 5.5, bus: 6.5 },
      'lavado VIP': { motocicleta: 3, 'carro sedan': 4, camioneta: 5, microbus: 6, bus: 7 },
      polarizados: { motocicleta: 0, 'carro sedan': 25, camioneta: 35, microbus: 45, bus: 60 },
    };

    const precioServicio = precios[tipoServicio][tipoVehiculo] || 0;
    const propinaCalculada = precioServicio * 0.05;
    const impuestosCalculados = precioServicio * 0.13;
    const pagoTotal = precioServicio + propinaCalculada + impuestosCalculados;

    setNombreCliente(nombreCliente);
    setPrecio(precioServicio);
    setPropina(propinaCalculada);
    setImpuestos(impuestosCalculados);
    setPagoFinal(pagoTotal);
  };

  return (
    <View style={styles.container}>
      <Formulario calcularTotal={calcularTotal} />
      <Resultado
        nombreCliente={nombreCliente}
        precio={precio}
        propina={propina}
        impuestos={impuestos}
        pagoFinal={pagoFinal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1976d3',
    padding: 20,
  },
});

export default App;