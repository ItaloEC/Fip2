import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, ImageBackground} from 'react-native';
import Card_where_eat from '../components/Cards/Card_where_eat';
import { width, height } from '../constants/Layout'
import background from '../assets/whereSleepBackground.png';


export default class WhereSleepScreen extends React.Component {
  constructor(){
    super();
    this.state = {
        data: [
          {id:1,
            cardTitle: "POUSADA CASA DO CHEF",
            endereco: "AV. José Lourenço Mourão, 116 – Vila Operária.",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/casadocheff.jpeg",
            contato:"(86) 3271-2523 / 99402-2294 / 99840-4875"},
            
            {id:2,
            cardTitle: "MARZUK FLAT HOTEL",
            endereco: "Av. Coronel Cordeiro, 331 Centro",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "(86) 3271-2679/ (86) 99989-0199"},
            
            {id:3,
            cardTitle: "HOTEL OPALA",
            endereco:"Av. José Lourenço Mourão, 813 – Vila Operária",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "(86) 3271-1160/ 99470-9413",},
            
            {id:4,
            cardTitle: "DRI FORNITURA",
            endereco: "Rua Agostinho Pinheiro, 882- centro",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "Fone: 3271-1490/ 99987481. Email: drifornitura@hotmail.com",},
            
            {id:5,
            cardTitle: "POUSADA RÚSTICA",
            endereco:"Rua Pedro Ivo, 282 – Santa Fé",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/pousadarustica.jpeg",
            contato: "(86) 99421-4668",},
            
            {id:6,
            cardTitle:"POUSADA NEBLINA",
            endereco:"Av. Coronel Cordeiro, 325 – Centro",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato:"(86) 99954-6553 (whatsapp) / (86) 98167-7888"},
            
            {id:7,
            cardTitle: "HOTEL TALISMÃ - SHOPPING MINERVINA",
            endereco: "Av. Coronel Cordeiro, 312 – Centro",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "(86) 99831-1095",},
            
            {id: 8,
            cardTitle:"ESTAÇÃO POUSADA RESIDENCE",
            endereco:"Rua Neném Galvão, 55 ",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "(86) 99431-7681 (whatsapp)",},
            
            {id: 9,
            cardTitle: "POUSADA IRMÃOS BACANA",
            endereco: "Lajinha – Aeroporto",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "(86) 99448-3314",},
            
            {id: 10,
            cardTitle: "POUSADA RIACHO",
            endereco: "Rua Lauro Cordeiro, 246",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "(86) 99989-3164",},
            
            {id: 11,
            cardTitle:"MOTEL POUSADA IMPERIAL",
            endereco:"Povoado Santana",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "fone: (86) 99421 3000",},
            
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
    height: '30%',
  }
});
