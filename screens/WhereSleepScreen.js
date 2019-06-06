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
            {id:1,  cardTitle: "POUSADA CASA DO CHEF",   endereco:"AV. José Lourenço Mourão, 116, Vila Operária.",img:"https://www3.hilton.com/resources/media/hi/NYCMLHH/en_US/img/shared/full_page_image_gallery/main/HH_juniorsuite_10_1270x560_FitToBoxSmallDimension_Center.jpg", contato:"Fone: (86) 3271-2523 / 99402-2294 / 99840-4875"},
            {id:2,  cardTitle: "MARZUK FLAT HOTEL",   endereco:"Av. Coronel Cordeiro, 331, Centro",img:"https://www3.hilton.com/resources/media/hi/NYCMLHH/en_US/img/shared/full_page_image_gallery/main/HH_juniorsuite_10_1270x560_FitToBoxSmallDimension_Center.jpg", contato:"Fone: (86) 3271-2679/ (86) 99989-0199"},
            {id:3,  cardTitle: "HOTEL OPALA",   endereco:"Av. José Lourenço Mourão, 813, Vila Operária.",img:"https://www3.hilton.com/resources/media/hi/NYCMLHH/en_US/img/shared/full_page_image_gallery/main/HH_juniorsuite_10_1270x560_FitToBoxSmallDimension_Center.jpg", contato:"Fone: (86) 3271-1160/ 99470-9413"},
            {id:4,  cardTitle: "HOTEL OPALA",   endereco:"Av. José Lourenço Mourão, 813, Vila Operária.",img:"https://www3.hilton.com/resources/media/hi/NYCMLHH/en_US/img/shared/full_page_image_gallery/main/HH_juniorsuite_10_1270x560_FitToBoxSmallDimension_Center.jpg", contato:"Fone: (86) 3271-1160/ 99470-9413"},
            {id:5,  cardTitle: "HOTEL OPALA",   endereco:"Av. José Lourenço Mourão, 813, Vila Operária.",img:"https://www3.hilton.com/resources/media/hi/NYCMLHH/en_US/img/shared/full_page_image_gallery/main/HH_juniorsuite_10_1270x560_FitToBoxSmallDimension_Center.jpg", contato:"Fone: (86) 3271-1160/ 99470-9413"},
            {id:6,  cardTitle: "HOTEL OPALA",   endereco:"Av. José Lourenço Mourão, 813, Vila Operária.",img:"https://www3.hilton.com/resources/media/hi/NYCMLHH/en_US/img/shared/full_page_image_gallery/main/HH_juniorsuite_10_1270x560_FitToBoxSmallDimension_Center.jpg", contato:"Fone: (86) 3271-1160/ 99470-9413"}
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
