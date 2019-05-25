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
                {id:1,hashtag:"#ORGANIZADOR",  cardTitle: "Lorem Ipsum Lorem Ipsum",   texto:" Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",url:"WWW.PEDROII.PI.GOV.BR", img:"https://confiramais.com.br/wp-content/uploads/2015/05/Festival-de-Inverno-de-Pedr.jpg"},
                {id:2,hashtag:"#PATROCINADOR",  cardTitle: "Light Group",   texto:"A Light Group Gestão Energética promove soluções inovadoras com tecnologias sustentáveis para a modernização e eficientização dos parques de iluminação pública.",url:"https://lightgroup.com.br", img:'https://lightgroup.com.br/luminus//assets/images/logo_light.png'}
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