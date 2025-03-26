import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const currentItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  const nextItems = () => {
    if (currentIndex + itemsPerPage < items.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevItems = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>BigFood Delivery</Text>
      </View>

      {/* Main Content */}
      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* FlatList for Horizontal Scrolling */}
        <FlatList
          horizontal
          data={currentItems}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />

        {/* Navigation (Below Images) */}
        <View style={styles.navigationContainer}>
          <Text style={styles.instructionText}>Aperte para mais opções</Text>

          {/* Navigation Buttons */}
          <View style={styles.navigation}>
            <TouchableOpacity onPress={prevItems} disabled={currentIndex === 0}>
              <Text style={[styles.arrow, currentIndex === 0 && styles.disabled]}>{"<"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={nextItems} disabled={currentIndex + itemsPerPage >= items.length}>
              <Text style={[styles.arrow, currentIndex + itemsPerPage >= items.length && styles.disabled]}>{">"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Promo Section with Local Image */}
        <View style={styles.promocaoContainer}>
          <Image
            source={require('./assets/fotos/promocao.jpg')} // Caminho para a imagem na pasta
            style={styles.promocaoImage}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: statusBarHeight,
  },

  header: {
    backgroundColor: '#019b1e',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 80,
    paddingTop: 20,
    marginBottom: 10,
  },

  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  item: {
    alignItems: 'center',
    marginHorizontal: 10,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },

  text: {
    color: 'black',
    marginTop: 8,
    fontSize: 16,
  },

  navigationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, // Espaço entre as imagens e as setas
  },

  instructionText: {
    fontSize: 16,
    marginBottom: 5, // Pequeno espaço entre o texto de instrução e as setas
    color: '#000',
  },

  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  arrow: {
    fontSize: 40,
    color: '#000',
    marginHorizontal: 20,
    padding: 10,
  },

  disabled: {
    color: '#d3d3d3',
  },

  promocaoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, // Espaço antes da imagem promocional
    padding: 10,
  },

  promocaoImage: {
    height: 200, // Ajustado para que a imagem tenha altura suficiente
    width: 350, // A imagem ocupará toda a largura da tela
    borderRadius: 30
  },
});
