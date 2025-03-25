import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>BigFood Delivery</Text>
      <StatusBar style="auto" />
    
      <ScrollView style={styles.scrollview}>
        <View style={styles.scrolling}>
          <Text style={styles.text}>Seu app para sua fome.</Text>
          <br/>
          <View style={styles.cabeca}>
            <View style={styles.item}>
              <Image 
                source={require('./assets/fotos/refrigerante.jpg')} 
                style={styles.image}
              />
              <Text style={styles.text}>Refrigerante</Text>
            </View>

            <View style={styles.item}>
              <Image 
                source={require('./assets/fotos/pizza.jpg')} 
                style={styles.image}
              />
              <Text style={styles.text}>Pizza</Text>
            </View>

            <View style={styles.item}>
              <Image 
                source={require('./assets/fotos/hamburguer.png')} 
                style={styles.image}
              />
              <Text style={styles.text}>Hamburguer</Text>
            </View>

            <View style={styles.item}>
              <Image 
                source={require('./assets/fotos/cachorro-quente.jpg')}
                style={styles.image}
              />
              <Text style={styles.text}>Cachorro Quente</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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

  scrollview: {
    backgroundColor: 'pink',
  },

  scrolling: {
    backgroundColor: 'black',
    padding: 20,
  },

  cabeca: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',  // Permite que os itens se movam para a linha seguinte se não caberem
    justifyContent: 'space-around',  // Distribui os itens com espaçamento entre eles
  },

  item: {
    alignItems: 'center', // Alinha os itens (imagem e texto) ao centro
    marginBottom: 20, // Adiciona um espaçamento entre os itens
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 5
  },

  text: {
    color: 'white',  // Cor do texto
    marginTop: 8,    // Espaço entre a imagem e o texto
  }
});
