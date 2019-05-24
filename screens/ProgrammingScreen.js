import React, {Component} from "react";
import {ImageBackground, ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import Card_programming from '../components/Cards/Card_programming';
import {width, height} from '../constants/Layout'
import background from '../assets/progBackground.png';


export default class ProgrammingScreen extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {id:1,  cardTitle: "Dia 20 - Quinta-Feira",   atracao1:"> Banda Black Rio (RJ)",atracao2:"> Far From Alaska (RN) ",atracao3:"> Duda Beat (PE) ",atracao4:"> Zé Ramalho (PB) ",           },
                {id:2,  cardTitle: "Dia 21 - Quinta-Feira",   atracao1:"> Banda Black Rio (RJ)",atracao2:"> Far From Alaska (RN) ",atracao3:"> Duda Beat (PE) ",atracao4:"> Zé Ramalho (PB) "},
                {id:3,  cardTitle: "Dia 22 - Quinta-Feira",   atracao1:"> Banda Black Rio (RJ)",atracao2:"> Far From Alaska (RN) ",atracao3:"> Duda Beat (PE) ",atracao4:"> Zé Ramalho (PB) "} ,
                {id:4,  cardTitle: "Dia 23 - Quinta-Feira",   atracao1:"> Banda Black Rio (RJ)",atracao2:"> Far From Alaska (RN) ",atracao3:"> Duda Beat (PE) ",atracao4:"> Zé Ramalho (PB) "} ,
                {id:5,  cardTitle: "Dia 24 - Quinta-Feira",   atracao1:"> Banda Black Rio (RJ)",atracao2:"> Far From Alaska (RN) ",atracao3:"> Duda Beat (PE) ",atracao4:"> Zé Ramalho (PB) "} ,
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
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <Card_programming item={item}/>}
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
        height: 150,
    },
    loader: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});