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
import Card_programming from '../components/Cards/Card_programming';
import {width, height} from '../constants/Layout'
import background from '../assets/progBackground.png';


export default class PalcoPricipal extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {
                    id:1,
                    cardTitle: "PALCO OPALA \nQUINTA 20/06/2019",
                    subtitle: "Praça Manoel Nogueira Lima\n(BONELLE)",
                    atracao1:"> 21h  Vava Ribeiro",
                    atracao2:"> 23h Adriana Calcanhoto ",
                    atracao3:"> 01h Toni Garrido ",
                    img:'http://lightgroup.com.br/luminus/assets/images/bandas/Dia%2020.png'
                },
                {
                    id:2,
                    cardTitle: "PALCO OPALA \nSEXTA 21/06/2019",
                    subtitle: "Praça Manoel Nogueira Lima\n(BONELLE)",
                    atracao1:"> 21h Retrô",
                    atracao2:"> 23h Zeca Baleiro",
                    atracao3:"> 01h Roraima",
                    img:'http://lightgroup.com.br/luminus/assets/images/bandas/Dia%2021.png'
                },
                {
                    id:3,
                    cardTitle: "PALCO OPALA \nSÁBADO 22/06/2019",
                    subtitle: "Praça Manoel Nogueira Lima\n(BONELLE)",
                    atracao1:"> 21h Melin",
                    atracao2:"> 23h Biquini Cavadão",
		            atracao3:"> 01h Cruviana",
                    img:'http://lightgroup.com.br/luminus/assets/images/bandas/Dia%2022.png'
                },
                {
                    id:4,
                    cardTitle: "PALCO OPALA \nDOMINGO 23/06/2019",
                    subtitle: "Praça Manoel Nogueira Lima\n(BONELLE)",
                    atracao1:"> 20h Bandolins de Bandolins de Oeiras",
                    atracao2:"> 22h Paulo Ricardo",
                    img:'http://lightgroup.com.br/luminus/assets/images/bandas/Dia%2023.png'
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
        height: '30%',
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