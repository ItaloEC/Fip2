import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import window from "../../constants/Layout";
import opalas from "../../assets/images/desafioopalas.jpeg";


export default class Card_sebrae extends React.PureComponent {

    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.cardImage} source={{uri: this.props.item.img}}  />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitleText}>{this.props.item.cardTitle} </Text>
                    <Text style={styles.cardText}>{this.props.item.texto}</Text>
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
        width: window.window.width - 5,
        backgroundColor: '#ffffff',
        marginTop: 10,
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
    cardText:{
        padding: 15,
        fontSize: 12,
        color: '#000',
        alignSelf: 'flex-start',
        textAlign: 'justify'
    },
    cardTitleText:{
        padding: 3,
        fontSize: 16,
        color: '#000',
        marginLeft: '2%',
        fontWeight: 'bold',
        textAlign: 'justify'
    },
});

