import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, ImageBackground} from 'react-native';
import Card_where_eat from '../components/Cards/Card_where_eat';
import { width, height } from '../constants/Layout'
import background from '../assets/whereBuyBackground.png';


export default class WhereBuyScreen extends React.Component {
  constructor(){
    super();
    this.state = {
        data: [
            {id:1,  cardTitle: "FEIRA DE ARTESANATO DO SEBRAE",   endereco:"Praça Domingos Mourão Filho - Centro Histórico, FUNCIONA todos os dias do Festival de 8h as 22h.",img:"https://cdn.shopify.com/s/files/1/0835/5343/files/IMG100_8906_340a68ad-8202-48b9-bf6e-20f1c828f6c9.jpg?8759349666291523616", contato:""},
            {id:2,  cardTitle: "IMPACTO JÓIAS RIBAMAR",   endereco:"Rua Manoel nogueira Lima, Loja 25- Mercado do Artesão.",img:"https://cdn.shopify.com/s/files/1/0835/5343/files/IMG100_8906_340a68ad-8202-48b9-bf6e-20f1c828f6c9.jpg?8759349666291523616", contato:"(86) 9 8857- 4912. Email: Ribamar-arte@hotmail.com"},
            {id:3,  cardTitle: "ARTES PIAUÍ JÓIAS",   endereco:"Rua Tertuliano Filho, N°255- Centro. Filial: Mercado do Artesão- loja 28.",img:"https://cdn.shopify.com/s/files/1/0835/5343/files/IMG100_8906_340a68ad-8202-48b9-bf6e-20f1c828f6c9.jpg?8759349666291523616", contato:"Fone: 9 9972 9465/ 99483 033. Email:betinhodaopalap2@hotmail.com"}
        ]
    }
  }
  /** Retira a barra toolbar superior */
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={background}>
        <View style={styles.viewDeCima}></View>
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => <Card_where_eat item={item}/>}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ margin: 4}} />}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5e6f45',
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  viewDeCima: {
    // backgroundColor: '#008000',
    height: '28%',
  }
});
