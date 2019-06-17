import React, { Component } from "react";

import {
    View,
    ImageBackground,
    StyleSheet,
    ScrollView, ActivityIndicator, FlatList
} from "react-native";
import { width, height } from "../constants/Layout";
import background from "../assets/sebrae.png";
import Card from "../components/Cards/Card_sebrae";

export default class SebraeScreen extends Component {
    constructor(){
        super();
        this.state = {
            data: [
                {
                    id:1,
                    cardTitle: "Inovações ao Festival de Inverno 2019 aquecem comércio e trocas culturais",
                    texto:"     O Estande do Sebrae irá representar as fases de Criação de uma Joia, para o turista poder ver todo o processo, desde a pedra bruta, passando pela lapidação, até a ourivesaria. Isso valoriza o artesanato de Pedro II.\n     Além disso, oficina viva de Escultura e Tecelagem. Parceria com o projeto “Conheça o Piauí”, que levará para o Festival uma parede de Rapel para os Turistas, além de um óculos VR de realidade virtual que permitirá o turista a visitar as cachoeiras de Pedro II em 360°.\n     Inclusão de TalkShow ao turista na praça de Artesanato. Com os temas: “Desafios do artesanato piauiense”, “Mesa Piauí - A gastronomia piauiense em destaque”, “Como ganhar dinheiro usando a internet”, “Seu negócio digital”.\n     Ponto alto do ano 2018 com a Criação da Joia “Clave de Fá”, esse ano temos a criação de 3 joias para movimentar as vendas nos estandes, a Joia “Gritamor” (em trocadilho com Gritador - Ponto turístico do município).",
                    img:'http://lightgroup.com.br/luminus/assets/images/outras/feira.jpg'
                },
                {
                    id:2,
                    cardTitle: "Consultorias Sebrae enobrecem e qualificam os serviços em Pedro II",
                    texto:"     • 50 horas de Consultoria para meios de Hospedagem - “Cama - Café”;\n     • 70 horas de Consultoria para os Restaurantes (engenharia de cardápio, Criação de pratos, etc);\n     • 40 horas de consultora de “café da manhã” - Padarias, Pousadas, Hotéis oferecendo uma melhor experiência para o turista.",
                    img:'http://lightgroup.com.br/luminus/assets/images/outras/chefe.jpg'
                },
                {
                    id:3,
                    cardTitle: "",
                    texto:"     Nasce uma nova jóia! Criada especialmente para o Festival de Inverno 2019, com o nome Gritador Gritamor.\n     Uma ação de mercado desenvolvida pelo SEBRAE, através do Designer Áureo Tupinambá Júnior juntamente com joalheiros de Pedro II.",
                    img:'http://lightgroup.com.br/luminus/assets/images/outras/joia.jpg'
                }
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
