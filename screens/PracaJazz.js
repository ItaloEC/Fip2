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


export default class PracaJazz extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {
                    id:1,
                    cardTitle: "Praça do jazz - SEXTA-FEIRA 21/06/2019",
                    subtitle: "Praça Dep. Milton Brandão (Recanto)",
                    atracao1:"> 17h00 - Wellington Torres",
                    atracao2:"> 19h00 Lula Galvão Trio,\n com Di Stefano & Paulo Dantas",
                    atracao3:"> 20h00 Jam \n& convidados com  BMW2"
                },
                {
                    id:2,
                    cardTitle: "Praça do jazz - SÁBADO  22/06/2019",
                    subtitle: "Praça Dep. Milton Brandão (Recanto)",
                    atracao1:"> 17h00 Club do jazz",
                    atracao2:"> 19h00 Maurício Einhorn \n& Natan Gomes com \n participação de Gustavo Baião",
                    atracao3:"> 20h00 Jam \n& convidados com Ivan Silva"
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