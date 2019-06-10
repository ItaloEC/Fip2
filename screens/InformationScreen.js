import React, {Component} from "react";
import {ImageBackground, ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import Card_programacao from '../components/Cards/Card_information';
import {width, height} from '../constants/Layout'
import background from '../assets/InfoBackground.png';


export default class InformationScreen extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {id:1,  cardTitle: "Ouvidoria Municipal",   endereco:" Rua das Andorinhas, Centro (Proximo ao Parque Azul).", rede:"instagram.com/ouvidoria", rede2:"facebook.com/louvidoria",telefone:"(86) 99999 9999"},
                {id:2,  cardTitle: "Ouvidoria Municipal",   endereco:" Rua das Andorinhas, Centro (Proximo ao Parque Azul).", rede:"instagram.com/ouvidoria", rede2:"facebook.com/louvidoria",telefone:"(86) 99999 9999"},
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
                        renderItem={({item}) => <Card_programacao item={item}/>}
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