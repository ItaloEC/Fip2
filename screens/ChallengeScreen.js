import React, {Component} from "react";
import {ImageBackground, ActivityIndicator, FlatList, StyleSheet, View,Button, Linking} from "react-native";
import Card from '../components/Cards/Card_challenge';
import {width, height} from '../constants/Layout'
import background from '../assets/background_challenges.png';


export default class ChallengeScreen extends Component {
    constructor(){
        super();
        this.state = {
            data: [
                {id:1,hashtag:"#VemPraSerra", cardTitle: "A 7º Edição do DESAFIO SERRA DOS MATÕES-MIRANTES, será realizada no sábado dia 22 de JULHO de 2019 no Municipio de Pedro II - PI", texto:"Corrida de trail run (corrida em trilhas) de 21 km pela Serra dos Matões Briefing da Prova (reunião com os atletas): dia 21 de junho no Condomínio Serra dos Matões, às 17:00h com uma palestra do técnico da seleção brasileira de corridas em trilhas, Sidney Togumi. Largada da prova: dia 22 de junho às 14:15 horas na arena do evento no Mirante do Gritador. Chegada da prova: dia 22 de junho a partir das 17:00 horas na Arena do evento no Mirante do Gritador Premiação na arena às 20:00 horas. Obs RELEVANTE: O trecho de acesso à comunidade Caranguejo a partir do Mirante do Gritador, vai ter seu trânsito controlado e interditado em determinados momentos no dia 22 de junho das 13:45 h às 20:00 h, por conta da passagens do atletas e desenrolar do evento.", img:'https://xcrono.com.br/site/wp-content/uploads/2019/01/Cover_FB_02.png'}
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
                    <Button
                    onPress={()=> Linking.openURL('https://www.festivalpedro2.com.br/desafio-dos-matoes/')}
                    title="Saiba Mais"
                    color="#42593a"
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