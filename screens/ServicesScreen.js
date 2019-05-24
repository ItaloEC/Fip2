import React, {Component} from "react";
import {ImageBackground, ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import Card_services from '../components/Cards/Card_services';
import {width, height} from '../constants/Layout'
import background from '../assets/servBackground.png';


export default class ServicesScreen extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {id:1,  cardTitle: "PRONTO SOCORRO",   endereco:" Rua das Andorinhas, Centro (Proximo ao Parque Azul).",telefone:"(86) 99999 9999"},
                {id:2,  cardTitle: "PRONTO SOCORRO",   endereco:" Rua das Andorinhas, Centro (Proximo ao Parque Azul).",telefone:"(86) 99999 9999"},
            ]
        }
    }

    static navigationOptions = {
        header: null,
    };


    render() {
        if(this.state.data.length === 0) {
            return(
                <View style={styles.loader}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return (
            <ImageBackground style={styles.container} source={background}>
                <View style={styles.viewDeCima}></View>
                <View style={styles.container}>
                    <FlatList
                        style={styles.flatList}
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <Card_services item={item}/>}
                    />
                </View>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
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
    },
    loader: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatList:{
        backgroundColor: '#607145'
    }

});