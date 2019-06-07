import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, ImageBackground} from 'react-native';
import Card_where_eat from '../components/Cards/Card_where_eat';
import { width, height } from '../constants/Layout'
import background from '../assets/whereEatBackground.png';


export default class WhereEatScreen extends React.Component {
  constructor(){
    super();
    this.state = {
        data: [
            {id:1,  cardTitle: "RESTAURANTE E PIZZARIA ESTAÇÃO VILA",   endereco:" Av. Jose Lourenço Mourão, Vila Operária.",img:"http://zucco.com.br/wp-content/uploads/2017/04/restaurante-04.jpg", contato:"Fone: (88)99999-9999"},
            {id:2,  cardTitle: "Ouvidoria Municipal",   endereco:" Rua das Andorinhas, Centro (Proximo ao Parque Azul).",img:"http://zucco.com.br/wp-content/uploads/2017/04/restaurante-04.jpg", contato:"Fone: (88)99999-9999"},
            {id:2,  cardTitle: "Ouvidoria Municipal",   endereco:" Rua das Andorinhas, Centro (Proximo ao Parque Azul).",img:"http://zucco.com.br/wp-content/uploads/2017/04/restaurante-04.jpg", contato:"Fone: (88)99999-9999"}
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
