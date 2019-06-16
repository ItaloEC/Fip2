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


export default class Tablado extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {
                    id:1,
                    cardTitle: "TABLADO - CARLOS CORDEIRO - QUINTA 20/06/2019 \n- TARDE",
                    subtitle: "Praça Domingos Mourão Filho (Matriz)",
                    atracao1:"> Raissa Braga (voz e  violão)",
                    atracao2:"> JP dos Teclados",
                    atracao3:"> Ronie dos Santos (youtuber, dançarino, humorista)",
                    atracao4:"> Grupo de Dança “Daniel e os meninos dançarinos”"
                },
                {
                    id:2,
                    cardTitle: "TABLADO - CARLOS CORDEIRO - SEXTA 21/06/2019 \n- MANHÃ",
                    subtitle: "Praça Domingos Mourão Filho (Matriz)",
                    atracao1:"> Grupo de dança “Let´s Dance”",
                    atracao2:"> Aristides Benício (voz e violão)",
                    atracao3:"> Escola de música  “Alfa Violão”",
                },
                {
                    id:3,
                    cardTitle: "TABLADO - CARLOS CORDEIRO - SEXTA 21/06/2019 \n- TARDE",
                    subtitle: "Praça Domingos Mourão Filho (Matriz)",
                    atracao1:"> Raimundo Carneiro  (Acordeón)",
                    atracao2:"> Banda Encantos  \n(Comunidade Católica Shalom)",
                    atracao3:"> Academia de Ballet \n“Viva Feliz” – Prof Layla Thuany"
                },
                {
                    id:4,
                    cardTitle: "TABLADO - CARLOS CORDEIRO - SÁBADO 22/06/2019 \n- MANHÃ",
                    subtitle: "Praça Domingos Mourão Filho (Matriz)",
                    atracao1:"> James Brito – cantor",
                    atracao2:"> Ballet Arte da Dança",
                    atracao3:"> Grupo musical “Soarte música”"
                },
                {
                    id:5,
                    cardTitle: "TABLADO - CARLOS CORDEIRO - SÁBADO 22/06/2019 \n- TARDE",
                    subtitle: "Praça Domingos Mourão Filho (Matriz)",
                    atracao1:"> Os Blacks – \nGrupo Musical de Chorinho",
                    atracao2:"> Zilda Pereira \n(coreografa e dançarina)",
                    atracao3:"> Orquestra Sanfônica Dom Abel Alonso Nunes",
                    atracao4:"> Grupo musical “Calango Joy”"
                },
                {
                    id:6,
                    cardTitle: "TABLADO - CARLOS CORDEIRO - DOMINGO 23/06/2019 \n- MANHÃ",
                    subtitle: "Praça Domingos Mourão Filho (Matriz)",
                    atracao1:"> Baby do Forró"
                }
            ]

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