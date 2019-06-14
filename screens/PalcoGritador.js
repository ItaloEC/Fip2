import React, {Component} from "react";
import {
    ImageBackground,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text, ScrollView
} from "react-native";
import Card_programming from '../components/Cards/Card_programming_palcos';
import {width, height} from '../constants/Layout'
import background from '../assets/progBackground.png';


export default class PalcoGritador extends Component {

    constructor(){
        super();
        this.state = {
            data: [{
                id:1,
                cardTitle: "Palco Gritador - QUINTA 20/06/2019",
                subtitle: "Praça Domingos Mourão Filho (Matriz)",
                atracao1:"> 19h00 - Janela Lateral",
                atracao2:"> 20h00 - Deepmoon",
                atracao3:"> 21h00 - Leone Rodrigues",
                atracao4:"> 22h00 - Deepmoon",
                atracao5:"> 23h00 - Radiola Elétrica"
            },
                {
                    id:2,
                    cardTitle: "Palco Gritador - SEXTA 21/06/2019",
                    subtitle: "Praça Domingos Mourão Filho (Matriz)",
                    atracao1:"> 18h30 - Jonas Memória",
                    atracao2:"> 19h30 - Demodê",
                    atracao3:"> 20h30 - Caju Pinga Fogo",
                    atracao4:"> 21h30 - Danilo Ruddah",
                    atracao5:"> 22h30 - Fullreaggae"
                },
                {
                    id:3,
                    cardTitle: "Palco Gritador - SÁBADO 22/06/2019",
                    subtitle: "Praça Domingos Mourão Filho (Matriz)",
                    atracao1:"> 18h30 - Bluedozze",
                    atracao2:"> 20h00 - Fronteiras  Blues",
                    atracao3:"> 21h30 - Bulldog Jack",
                    atracao4:"> 22h30 - Neardentais"
                }]

        }
    }

    static navigationOptions = {
        header: null,
    };


    render() {
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
        height: "30%",
    },
    loader: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 6,

    },
    botoesRole: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 10,
        width: 150,
        height: 150,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'space-around',
    },
    viewDeBaixo: {
        marginTop: "10%"
    },
    icons: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    }
});