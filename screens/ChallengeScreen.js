import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Text,
    WebView,
    ImageBackground,
} from "react-native";

import { width, height } from '../constants/Layout'

import background from '../assets/background_challenges.png';

// Desafio de matões
export default class ChallengeScreen extends Component {

    static navigationOptions = {
        header: null,
    };
    render() {

        return (

            <ImageBackground
                style={styles.container}
                source={background}
            >

                <View style={styles.viewDeCima}></View>
                <View style={styles.segundaView}></View>

                <ScrollView style={styles.ScrollView}>
                    <View style={styles.componentView}>
                        <Image source={require('../assets/images/challenge.png')} style={{ height: 150, width: width, flex: 1, resizeMode: 'contain' }} />

                        <Text style={{ textAlign: 'justify', color: '#42593a', fontSize: 20}}>
                            A 7º Edição do DESAFIO SERRA DOS MATÕES-MIRANTES, será realizada no sábado dia 22 de JULHO de 2019 no Municipio de Pedro II - PI
                        </Text>

                        <Text style={{ textAlign: 'justify', alignSelf: 'stretch' }}>


                            Corrida de trail run (corrida em trilhas) de 21 km pela Serra dos
                            Matões
                            Briefing da Prova (reunião com os atletas): dia 21 de junho no
                            Condomínio Serra dos Matões, às 17:00h com uma palestra do técnico
                            da seleção brasileira de corridas em trilhas, Sidney Togumi.
                            Largada da prova: dia 22 de junho às 14:15 horas na arena do evento no
                            Mirante do Gritador.
                            Chegada da prova: dia 22 de junho a partir das 17:00 horas na Arena do
                            evento no Mirante do Gritador
                            Premiação na arena às 20:00 horas.
                            
                            Obs RELEVANTE: O trecho de acesso à comunidade Caranguejo a partir do
                            Mirante do Gritador, vai ter seu trânsito controlado e interditado em
                            determinados momentos no dia 22 de junho das 13:45 h às 20:00 h, por
                            conta da passagens do atletas e desenrolar do evento.
                            
                            AÇÕES DO EVENTO:
                            
                            * Ambiental:
                            - Compensação de Carbono
                            - Proteção às Nascentes através de palestras educativas a serem
                            realizadas nas Comunidades Trombas e Caranguejo.
                            
                            * Assistência à saúde: Com a realização de consultas
                            oftalmológicas  e entrega de 100 unidades de óculos (armação e
                            lente) paras as comunidades rurais da Serra dos Matões. Local da
                            ação: Colégio da Comunidade São João.
                            
                            * Fomento à Educação: Com a entrega de materiais escolares às
                            crianças do colégio rural da Comunidade do São João.
                            
                            ESPAÇO MATÕES, ART/PUB
                            
                            Espaço de gastronomia e cultura em frente ao Condomínio Serra dos Matões.
              </Text>

                    </View>
                </ScrollView>

            </ImageBackground>
        );

    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    componentView: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'stretch',
        borderRadius: 10,
    },

    ScrollView: {
        height: height - 90,
        backgroundColor: "#fff",
        alignSelf: 'stretch',
    },

    Text: {
        textAlign: 'justify',
    },

    backgroundImage: {
        width: width,
        height: height,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
    },

    viewDeCima: {
        height: 150,
    },
    segundaView: {
        height: 40,
    }
});