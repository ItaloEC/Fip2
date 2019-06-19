import React, {Component} from "react";
import {ImageBackground, ActivityIndicator, FlatList, StyleSheet, View, Image, Text} from "react-native";
import Card_services from '../components/Cards/Card_artesao';
import {width, height} from '../constants/Layout'
import background from '../assets/backgroud.png';
import feira from '../assets/images/feira.jpeg';
import restaurante from '../assets/images/restaurante.jpeg';
import { ScrollView } from "react-native-gesture-handler";


export default class ArtesaoScreen extends Component {

    constructor(){
        super();
        this.state = {
            dataFeira: [
                {id:1,  cardTitle: "CELIA ARTESÃ- Box 04", subtitle: "SHOPPING DO ARTESÃO- TÉRREO",   endereco:"Org. Nonato e Celia"},
                {id:2,  cardTitle: "JOALHERIA HALLEY JOIAS E RELÓGIOS- Box 06", subtitle: "SHOPPING DO ARTESÃO- TÉRREO", endereco:"Org. Fernanda"},
                {id:3,  cardTitle: "ASSOCIAÇÃO TAPERA DOS VITAL- Box 07", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Associação Tapera dos Vital"},
                {id:4,  cardTitle: "UCHOA TEADO- Box 08", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Antonio Uchoa"},
                {id:5,  cardTitle: "MARIA ALVES ARTESÃ- Box 09", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Maria Alves"},
                {id:6,  cardTitle: "GONÇALO ARTESANATO- Box 10", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Aparecida e Gonçala"},
                {id:7,  cardTitle: "ISABEL ARTESANATO- Box 11", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Isabel"},
                {id:8,  cardTitle: "VERA ARTESANATO- Box 14", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Vera e Tereza"},
                {id:9,  cardTitle: "REPARO- Box 15", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Isabel"},
                {id:10,  cardTitle: "MARIA ARTESANATO- Box 16", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Maria Deusa"},
                {id:11,  cardTitle: "FRANCINETE ARTESANATO- Box 17", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Francinete e Rai"},
                {id:12,  cardTitle: "XIQUE-XIQUE- Box 18", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Associação Xique-Xique"},
                {id:13,  cardTitle: "ASSOCIAÇÃO DOS ARTESÃO DE PEDRO II- Box 19", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Associação dos Artesão de Pedro II"},
                {id:14,  cardTitle: "TEREZA ARTESANATO- Box 20", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Tereza"},
                {id:15,  cardTitle: "IMPACTO JOIAS- Box 21", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Ribamar"},
                {id:16,  cardTitle: "ARTS PEDRAS- Box 22", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Ariadene paixão e Lurdes Paixão"},
                {id:17,  cardTitle: "NATIVA JOIAS- Box 23", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Denis"},
                {id:18,  cardTitle: "ARTES PIAUI JOIAS- Box 24", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Betinho"},
                {id:19,  cardTitle: "IMPERIO DA MODA E JOIAS- Box 25", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Elizabete e Toinho da opala"},
                {id:20,  cardTitle: "RARÍSSIMA OPALA- Box 26", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Manoel"},
                {id:21,  cardTitle: "CLEIDE ARTESANATO- Box 27", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Cleide"},
                {id:22,  cardTitle: "COOPERATIVA DOS GARIMPEIROS- Box 28", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Associação dos garimpeiros"},
                {id:23,  cardTitle: "MARIA ARTESANATO- Box 31", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. maria"},
                {id:24,  cardTitle: "ASSOCIAÇÃO ROÇA- Box 35", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Associação da roça"},
                {id:25,  cardTitle: "CHAVEIRO NUNES- Box 36", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Nunes"},
                {id:26,  cardTitle: "NENÉ ARTESANATO- Box 40", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Maria Lina"},
                {id:27,  cardTitle: "REDES CONFIANÇA- Box 41", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Antonino"},
                {id:28,  cardTitle: "G.G ARTESANATO- Box 42", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Deise"},
                {id:29,  cardTitle: "CERAMICA MARIA BONITA- Box 48", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Ulissis"},
                {id:30,  cardTitle: "MAMI ARTESANATO- Box 49", subtitle: "MERCADO DO ARTESÃO- TÉRREO", endereco:"Org. Maria Inês"},
            ],
            dataRestaurantes:[
                {id:31,  cardTitle: "Restaurante 100%", subtitle: "MERCADO DO ARTESÃO – PRAÇA DE ALIMENTAÇÃO", endereco:"Elisandra Costa Lima ( Lia)"},
                {id:32,  cardTitle: "Tempero Novo", subtitle: "MERCADO DO ARTESÃO – PRAÇA DE ALIMENTAÇÃO", endereco:"Francisco Gilberto da Silva ( Gilberto)"},
                {id:33,  cardTitle: "Primeira Mesa", subtitle: "MERCADO DO ARTESÃO – PRAÇA DE ALIMENTAÇÃO", endereco:"Etevaldo dos Santos ( Etevaldo)"},
                {id:34,  cardTitle: "Restaurante Serve Bem", subtitle: "MERCADO DO ARTESÃO – PRAÇA DE ALIMENTAÇÃO", endereco:"(índio)"},
                {id:35,  cardTitle: "Restaurante bom Sabor", subtitle: "MERCADO DO ARTESÃO – PRAÇA DE ALIMENTAÇÃO", endereco:"Maria Elenilda"},
                {id:36,  cardTitle: "Restaurante Marujo", subtitle: "MERCADO DO ARTESÃO – PRAÇA DE ALIMENTAÇÃO", endereco:"Marcio Ronielli (Marujo)"},
                {id:37,  cardTitle: "Lanchonete o Bell", subtitle: "MERCADO DO ARTESÃO – PRAÇA DE ALIMENTAÇÃO", endereco:"Bell"},
                {id:38,  cardTitle: "Restaurante Dona Luzia", subtitle: "MERCADO DO ARTESÃO – PRAÇA DE ALIMENTAÇÃO", endereco:"Zezinho"},
                {id:39,  cardTitle: "Restaurante da Rosário", subtitle: "MERCADO DO ARTESÃO – PRAÇA DE ALIMENTAÇÃO", endereco:"Rosário"}
            ]

        }
    }

    static navigationOptions = {
        header: null,
    };


    render() {
        // if(this.state.data.length === 0) {
        //     return(
        //         <View style={styles.loader}>
        //             <ActivityIndicator/>
        //         </View>
        //     );
        // }
        return (
            <ImageBackground style={styles.container} source={background}>
                <View style={styles.viewDeCima}></View>
                <View style={styles.container}>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} >
                <Image
                    source={feira}
                    style={styles.imagem}
                />
                <Text style={{fontSize: 40, textAlign: 'center', fontWeight: 'bold', color: "#052702"}}>Feira:</Text>
                    <FlatList
                        style={styles.flatList}
                        data={this.state.dataFeira}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <Card_services item={item}/>}
                    />
                <Image
                    source={restaurante}
                    style={styles.imagem}
                />
                <Text  style={{fontSize: 40, textAlign: 'center', fontWeight: 'bold', color: "#052702"}}>Restaurantes:</Text>
                    <FlatList
                        style={styles.flatList}
                        data={this.state.dataRestaurantes}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <Card_services item={item}/>}
                    />
                  </ScrollView>  
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
        height: '25%',
    },
    scroll: {
        height: '100%',
        width: width,
        position: 'absolute'
    },
    loader: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatList:{
        paddingBottom: 10,
    },
    imagem: {
        height: 250,
        width: '100%',
        resizeMode: 'contain',
        marginLeft: 5,
    }

});