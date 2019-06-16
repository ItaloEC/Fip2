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
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/casa_do_chef.jpg",
            contato:"(86) 3271-1872 / 99576-3163 / 99576-2164"},

            {id:1,
              cardTitle: "POUSADA LUAR DO SERTÃO",
              endereco: "RUA SORIANO PEDRO SOUSA, 344 - BAIRRO SABOIÁ",
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/luar_do_sertao.jpg",
              contato:"(86) 3271-1872/99576-3163 / 99576-2164 "},
            
            {id:2,
            cardTitle: "MARZUK FLAT HOTEL",
            endereco: "Av. Coronel Cordeiro, 331 Centro",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/marzuk.jpg",
            contato: "(86) 3271-2679/ (86) 99989-0199"},
            
            {id:3,
            cardTitle: "HOTEL OPALA",
            endereco:"Av. José Lourenço Mourão, 813 – Vila Operária",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/hotel_opala.jpg",
            contato: "(86) 3271-1160/ 99470-9413"},
            
            {id:5,
            cardTitle: "POUSADA RÚSTICA",
            endereco:"Rua Pedro Ivo, 282 – Santa Fé",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/pousadarustica.jpeg",
            contato: "(86) 99421-4668",},
            
            {id:6,
            cardTitle:"POUSADA NEBLINA",
            endereco:"Av. Coronel Cordeiro, 325 – Centro",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/pousada_neblina.jpg",
            contato:"(86) 99954-6553 (whatsapp) / (86) 98167-7888"},
            
            {id:7,
            cardTitle: "HOTEL TALISMÃ - SHOPPING MINERVINA",
            endereco: "Av. Coronel Cordeiro, 312 – Centro",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/hoteltalisma.jpg",
            contato: "(86) 99831-1095",},
            
            {id: 8,
            cardTitle:"ESTAÇÃO POUSADA RESIDENCE",
            endereco:"Rua Neném Galvão, 55 ",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/pousadaresidence.jpg",
            contato: "(86) 99431-7681 (whatsapp)"},

            {id: 11,
            cardTitle:"POUSADA IRMÃOS BACANA",
            endereco:"Lajinha – Aeroporto",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "(86) 99458-2578"},
            
            {id: 10,
            cardTitle: "POUSADA RIACHO",
            endereco: "Rua Lauro Cordeiro, 246",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "(86) 99989-3164/ 8123-2220"},
            
            {id: 11,
            cardTitle:"POUSADA IMPERIAL",
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
