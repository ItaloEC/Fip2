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
                {id:1,  cardTitle: "BANCO DO BRASIL",   endereco:"Av. Coronel Cordeiro, Centro", telefone:""},
                {id:2,  cardTitle: "BRADESCO",   endereco:"Av. Coronel Cordeiro, Centro", telefone:""},
                {id:3,  cardTitle: "CAIXA ECONOMICA FEDERAL",   endereco:"Rua Domingos Mourão, Centro", telefone:""},
                {id:4,  cardTitle: "BANCO OPALA",   endereco:"Mercado do Artesão", telefone:""},
                {id:5,  cardTitle: "HOSPITAL JOSEFINA GETIRANA NETA",   endereco:"R. Antônio Benígno da Silva, 400", telefone:"(86) 3271-2371"},
                {id:6,  cardTitle: "HOSPITAL SANTA CRUZ",   endereco:"R. Boa Vista, 300", telefone:"(86) 3271-1311"},
                {id:7,  cardTitle: "PRONTO FARMA",   endereco:"Av Coronel Cordeiro, 513, Vila Operária", telefone:"(86) 3271-2375"},
                {id:8,  cardTitle: "FARMAFRAN 24 HORAS",   endereco:"Av Cordeiro, 476 - Centro", telefone:"3271-2375 / (86) 9 9443-0435"},
                {id:9,  cardTitle: "OFICINA MECÂNICA - ZE CLAUDIO",   endereco:"Rua Tertuliano Brandão Filho, Centro", telefone:"(86) 99983 3028"},
                {id:10,  cardTitle: "BORRACHARIA DO MEDEIROS",   endereco:"Rua Irmãos Pereira, Centro", telefone:"(86) 99462 8683"},
                {id:11,  cardTitle: "Delegacia de Polícia",   endereco:"Av. José Lourenço Mourão, 100", telefone:"(86) 3271 2575"},
                {id:12,  cardTitle: "Superintendência de trânsito municipal (STRANS)",   endereco:"Terminal rodoviário, Av Loureço (box 02)", telefone:""},
                {id:13,  cardTitle: "ACONTUR - Associação de Guias de Turismo e Condutores de Visitantes de Pedro II.",endereco:"Localizado na Praça da Feira do Artesanato - Centro Histórico. ", telefone:"Tel: (86) 99418 0785  99992 2791"},
                {id:14,  cardTitle: "CHAVEIRO NUNES", endereco:"MERCADO DO ARTESÃO, BOX 36, PEDRO II - PI", telefone:"86 99539-0075 86 98181-8241\n chaveironunes10@gmail.com"}
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
        height: '30%',
    },
    loader: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatList:{
        backgroundColor: '#607145',
        paddingBottom: 10,
    }

});