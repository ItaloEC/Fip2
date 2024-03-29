import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";


export default class Card_sponsors_and_partners extends React.PureComponent {

    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.cardImage} source={{uri: this.props.item.img}}  />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTextHashtag}>{this.props.item.hashtag}</Text>
                    <Text style={styles.cardTitleText}>{this.props.item.cardTitle} </Text>
                    <Text style={styles.cardText}>{this.props.item.texto}</Text>
                    <Text style={styles.cardText}>{this.props.item.url}</Text>
                    <Text style={styles.cardText}>{this.props.item.atracao4}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height:320,
        backgroundColor: '#ffffff',
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
        marginLeft: '2%'
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
        marginTop:10
    },
});