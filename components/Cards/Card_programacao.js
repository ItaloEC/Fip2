import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import background from '../../assets/ze.png';

export default class Card_programacao extends React.PureComponent {

    render() {
        return (
            <TouchableOpacity style={styles.card}>
                <Image style={styles.cardImage} source={background}/>
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitleText}>{this.props.item.cardTitle} </Text>
                    <Text style={styles.cardText}>{this.props.item.atracao1}</Text>
                    <Text style={styles.cardText}>{this.props.item.atracao2}</Text>
                    <Text style={styles.cardText}>{this.props.item.atracao3}</Text>
                    <Text style={styles.cardText}>{this.props.item.atracao4}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height:180,
        flexDirection:'row',
        backgroundColor: '#e8e8e8',
        marginTop: 10,
        marginLeft: '2%',
        width:'96%',
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
        width: '50%',
        height:'90%',
        marginLeft: '2%',
        marginTop: 10,
        marginBottom: 10
    },
    cardText:{
        padding: 2,
        fontSize: 11,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: '2%'
    },
    cardTitleText:{
        padding: 2,
        fontSize: 15,
        color: '#000',
        marginLeft: '2%',
        fontWeight: 'bold'
    },
    cardContent: {
        marginLeft:10,
        marginTop:10
    },
});