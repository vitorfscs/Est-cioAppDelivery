import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';  // Certifique-se de importar o 'Image'
import Carousel from 'react-native-snap-carousel';  // Biblioteca para carrossel

export default function App() {
  const items = [
    { id: '1', image: require('./assets/fotos/refrigerante.jpg'), name: 'Refrigerante' },
    { id: '2', image: require('./assets/fotos/pizza.jpg'), name: 'Pizza' },
    { id: '3', image: require('./assets/fotos/hamburguer.png'), name: 'Hamburguer' },
    { id: '4', image: require('./assets/fotos/cachorro-quente.jpg'), name: 'Cachorro Quente' },
    { id: '5', image: require('./assets/fotos/batata-frita.jpg'), name: 'Batata-Frita' },
    { id: '6', image: require('./assets/fotos/acai.jpg'), name: 'Açai' },
    { id: '7', image: require('./assets/fotos/esfiha.jpg'), name: 'Esfiha' },
    { id: '8', image: require('./assets/fotos/yaksoba.jpg'), name: 'Yaksoba' },
    { id: '9', image: require('./assets/fotos/sushi.jpg'), name: 'Sushi' },
  ];

  // Pegando a largura da tela
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BigFood Delivery</Text>
      <StatusBar style="auto" />

      {/* Carrossel de imagens */}
      <Carousel
        data={items}
        sliderWidth={windowWidth}
        itemWidth={windowWidth / 2.5} // A largura do item
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={[styles.image, { width: windowWidth / 2.5 }]} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        loop={true} // Habilita a rotação contínua
        autoplay={true} // Ativa o autoplay
        autoplayInterval={3000} // Intervalo do autoplay em milissegundos
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  item: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5, // Espaçamento entre os itens
  },

  image: {
    height: 150, // Ajustando altura das imagens
    borderRadius: 10,
  },

  text: {
    color: 'black',
    marginTop: 8,
    fontSize: 16,
  }
});
