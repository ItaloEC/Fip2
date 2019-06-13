import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import window from '../../constants/Layout';


export default class Card_news extends React.PureComponent {

    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.cardImage} source={{uri: this.props.item.acf.imagem}}  />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitleText}>{this.props.item.acf.nome} </Text>
                    <Text style={styles.cardText}>{this.props.item.acf.descricao}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  card: {
      
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    //   height: 400,
      width: window.window.width - 5,
      backgroundColor: '#ffffff',
      marginTop: 10,
//width:'96%',
//height: 320,
      borderRadius:5,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 1,
      shadowOffset: {
          width:12,
          height:12
      },
      elevation: 2
  },
  cardImage:{
      width: window.window.width - 20,
      height: 300,
      marginLeft: '2%',
      marginTop: 10,
      marginBottom: 10,
      resizeMode: 'contain',
      borderRadius: 10
  },
  cardTextHashtag:{
      padding: 2,
      fontSize: 12,
      color: '#000',
      fontWeight: 'bold',
      marginLeft: '2%'
  },
  cardText:{
      padding: 2,
      fontSize: 12,
      color: '#000',
      alignSelf: 'flex-start',
      textAlign: 'auto'
  },
  cardTitleText:{
      padding: 3,
      fontSize: 20,
      color: '#000',
      marginLeft: '2%',
      fontWeight: 'bold',
      textAlign: 'center'
  },
  cardContent: {
      marginLeft:10,
      marginTop:10,
  },
});