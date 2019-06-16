import React, {Component} from "react";
import {ImageBackground, ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import Card from '../components/Cards/Card_sponsors_and_partners';
import {width, height} from '../constants/Layout'
import background from '../assets/patroBackground.png';


export default class SponsorsScreen extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {id:1,hashtag:"#REALIZADORES",  cardTitle: "Governo do Estado do Piauí",   texto:"Insta/Facebook: @governodopiaui",url:"http://www.pi.gov.br/", img:"https://lightgroup.com.br/luminus/assets/images/sponsor/governo.png"},
                {id:2,hashtag:"#REALIZADORES",  cardTitle: "Prefeitura Municipal de Pedro II",   texto:"Insta/Facebook: @governodopiaui",url:"https://www.festivalpedro2.com.br/ \nhttps://www.pedroii.pi.gov.br/", img:"https://lightgroup.com.br/luminus/assets/images/sponsor/Logo_PII.png"},
                {id:3,hashtag:"#REALIZADORES",  cardTitle: "Secretaria de Estado do Turismo do Piauí – SETUR",   texto:"",url:"http://www.turismo.pi.gov.br/", img:"https://lightgroup.com.br/luminus/assets/images/sponsor/download.png"},
                {id:4,hashtag:"#REALIZADORES",  cardTitle: "Secretaria de Estado de Cultura do Piauí – SECULT",   texto:"",url:"http://www.cultura.pi.gov.br/", img:"https://lightgroup.com.br/luminus/assets/images/sponsor/secult_piaui.jpg"},
                {id:5,hashtag:"#REALIZADORES",  cardTitle: "Sebrae",   texto:"Insta/Facebook: @sebrae/@sebraepi",url:"http://www.sebrae.com.br/", img:"https://lightgroup.com.br/luminus/assets/images/sponsor/sebrae.jpg"},
                {id:6,hashtag:"#APOIO",  cardTitle: "Light Group",   texto:"A Light Group Gestão Energética promove soluções inovadoras com tecnologias sustentáveis para a modernização e eficientização dos parques de iluminação pública.",url:"https://lightgroup.com.br", img:'https://lightgroup.com.br/luminus/assets/images/sponsor/LIGHTLogo_Horizontal.png'},
                {id:7,hashtag:"#APOIO",  cardTitle: "SESC",   texto:"Insta/Facebook: @sescpi",url:"http://www.sesc.com.br/ \nhttp://www.pi.sesc.com.br/", img:'https://lightgroup.com.br/luminus/assets/images/sponsor/logo_sesc.png'},
                {id:8,hashtag:"#APOIO",  cardTitle: "SENAC",   texto:"Insta/Facebook: @senacpiaui",url:"http://www.senac.br/ \nhttps://www.pi.senac.br/", img:'https://lightgroup.com.br/luminus/assets/images/sponsor/logo_senac.png'},
                {id:9,hashtag:"#APOIO",  cardTitle: "JUPI Alimentos",   texto:"Insta/Facebook: @jupioficial/@jupi.alimentos",url:"", img:'https://lightgroup.com.br/luminus/assets/images/sponsor/LOGO_JUPI_FIM-01.jpg'},
                {id:10,hashtag:"#APOIO",  cardTitle: "Café Santa Clara",   texto:"Insta/Facebook: @cafe_santaclara",url:"http://www.cafesantaclara.com.br/", img:'https://lightgroup.com.br/luminus/assets/images/sponsor/santa_clara.jpg'},
                {id:11,hashtag:"#APOIO",  cardTitle: "KAISER",   texto:"Insta/Facebook: @CervejaKaiser",url:"http://kaiser.com.br/", img:'https://lightgroup.com.br/luminus/assets/images/sponsor/kaiser.jpg'}
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