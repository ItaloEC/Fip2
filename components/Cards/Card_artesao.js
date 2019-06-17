import React from "react";
import {StyleSheet, Text, Image, TouchableOpacity, View, FlatList} from "react-native";

export default class Card_artesao extends React.PureComponent {

    render() {
        return (
            <View style={styles.card}>
                <Text style={styles.cardSubTitleText}>{this.props.item.subtitle}</Text>
                <Text style={styles.cardTitleText}>{this.props.item.cardTitle} </Text>
                <Text style={styles.cardText}>{this.props.item.endereco}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height:110,
        backgroundColor: '#e8e8e8',
        marginTop: 20,
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
    cardText:{
        padding: 5,
        fontSize: 15,
        color: '#000',
        marginLeft: '2%'
    },
    cardSubTitleText:{
        padding: 2,
        fontSize: 10,
        color: '#000',
        marginLeft: '2%',
        fontWeight: 'bold'
    },
    cardTitleText:{
        padding: 2,
        fontSize: 20,
        color: '#000',
        marginLeft: '2%',
        fontWeight: 'bold'
    },
    cardContent: {
        marginLeft:10,
        marginTop:10
    },
});