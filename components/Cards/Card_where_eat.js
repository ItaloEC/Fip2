import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions } from "react-native";

export default class Card_where_eat extends React.PureComponent {

    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.cardImage} source={{uri: this.props.item.img}}/> 
                <Text style={styles.text1}>{this.props.item.cardTitle}</Text>
                <Text style={styles.text}>Endereço:</Text>
                <Text style={styles.text2}>{this.props.item.endereco}</Text>
                <Text style={styles.text}>Contatos:</Text>
                <Text style={styles.text3}>{this.props.item.contato}</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: '#67784e',
        height: 420,
        width: Dimensions.get('screen').width - 19,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
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

    text: {
       marginTop:20,
       fontSize:18,
       color:'#fff',
    },
    text1: {
        color:'#fff',
        fontSize: 20,
    },
    text2: {
        color:'#fff',
        fontSize:18,
     
    },
     text3: {
        color:'#fff',
        fontSize:18,
     },
     cardImage:{
        width: '96%',
        height:'42%',
        marginLeft: '2%',
        marginTop: 10,
        marginBottom: 10,
        resizeMode: 'contain',
    }
});

