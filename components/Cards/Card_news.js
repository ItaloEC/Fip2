import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";


export default class Card_news extends React.PureComponent {

    render() {
        return (
            <TouchableOpacity style={styles.card}>
                <Image style={styles.cardImage} source={{uri: this.props.item.acf.imagem}}  />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitleText}>{this.props.item.acf.nome} </Text>
                    <Text style={styles.cardText}>{this.props.item.acf.descricao}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  card: {
      
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      height: 'auto',
      backgroundColor: '#ffffff',
      marginTop: 10,
      marginLeft: '2%',
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
      width: '96%',
      height:'42%',
      marginLeft: '2%',
      marginTop: 10,
      marginBottom: 10
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
      marginLeft: '2%',
      alignSelf: 'flex-start',
  },
  cardTitleText:{
      padding: 3,
      fontSize: 20,
      color: '#000',
      marginLeft: '2%',
      fontWeight: 'bold'
  },
  cardContent: {
      marginLeft:10,
      marginTop:10,
  },
});