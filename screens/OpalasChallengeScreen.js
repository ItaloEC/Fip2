import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Text,
    WebView,
    ImageBackground, ActivityIndicator, FlatList, Button, Linking,
} from "react-native";

import { width, height } from '../constants/Layout'

import background from '../assets/images/opalas.jpg';
import Card from "../components/Cards/Card_Opala";

export default class OpalasChallengeScreen extends Component {
    constructor(){
        super();
        this.state = {
            data: [
                {id:1, cardTitle: "Desafio das Opalas foi um misto de superação, belas paisagens e no final os atletas brilharam como campeões piauienses de MTB Maratona", texto:"          A terceira edição do Desafio das Opalas, a maior aventura oficial do mountain bike nacional aconteceu nos dias 1º e 2° de junho colorindo um pouco mais paisagens de milhões de anos, uma prova técnica com alto grau de dificuldade para os atletas, especialmente para os inscritos nas categorias oficiais da Confederação Brasileira de Ciclismo – CBC, com cerca de 98km de disputa e altimetria total de 1.600 metros do nível do mar.\n          Esse foi o cenário que os 190 ciclistas inscritos no 3º Desafio das Opalas enfrentaram no domingo (02.06.2019). A prova largou do Parque Nacional de Sete Cidades, que fica no entorno do município de Piripiri, no norte do Piauí, com chegada no Morro do Gritador, na cidade de Pedro II, sede do Festival de Inverno de Pedro II, consolidado como maior festival cultural do estado do Piauí, onde este ano realizará sua Décima Sexta edição.\n          A competição valeu pelo Campeonato Piauiense de Mountain Bike Maratona – prova única, 5ª etapa do Campeonato Piauiense de Mountain Bike Maratona e ranking nacional – classe XCM1 da CBC.\n          Essa foi a primeira competição oficial de uma entidade federativa a percorrer trilhas dentro de algumas das cidades que compõem o parque, marcado por sua exuberância, mistérios e muitas belezas naturais, como riachos, olhos d´água, cachoeiras e a fauna e flora peculiares.", img:''}
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
                        renderItem={({item}) => <Card item={item}/>}
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
        height: '31%',
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