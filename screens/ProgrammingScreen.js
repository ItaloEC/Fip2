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
                {
                    id:1,
                    cardTitle: "Palco Gritador \n - QUINTA 20/06/2019",
                    atracao1:"> 18h30 - Janela Lateral",
                    atracao2:"> 19h40 - Deepmoon",
                    atracao3:"> 20h50 -Leone Rodrigues",
                    atracao4:"> 22:00 - Radiola Elétrica"
                },
                {
                    id:2,
                    cardTitle: "Palco Gritador \n - SEXTA 21/06/2019",
                    atracao1:"> 18h30 - Jonas Memória",
                    atracao2:"> 19h40 - Demodê",
                    atracao3:"> 20h50 - Caju Pinga Fogo",
                    atracao4:"> 22:00 - Danilo Ruddah",
                    atracao5:"> 22h50 - Fullreaggae"
                },
                {
                    id:3,
                    cardTitle: "Palco Gritador \n - SÁBADO 22/06/2019",
                    atracao1:"> 18h30 - Bluedozze",
                    atracao2:"> 19h40 - Fronteiras  Blues",
                    atracao3:"> 20h50 -  Bulldog Jack",
                    atracao4:"> 22:00 -  Neardentais"
                },
                {
                    id:4,
                    cardTitle: "Praça do jazz \n- DOMINGO 21/06/2019",
                    atracao1:"> 17h00 - Wellington Torres",
                    atracao2:"> 19h00 Lula Galvão Trio,\n com Di Stefano & Paulo Dantas",
                    atracao3:"> 20h00 Jam \n& convidados com  BMW2"
                },
                {
                    id:5,
                    cardTitle: "Praça do jazz \n- SÁBADO  22/06/2019",
                    atracao1:"> 17h00 Club do jazz",
                    atracao2:"> 19h00 Maurício Einhorn \n& Natan Gomes com \n participação de Gustavo Baião",
                    atracao3:"> 20h00 Jam \n& convidados com Ivan Silva"
                },
                {
                    id:6,
                    cardTitle: "TABLADO  \n- CARLOS CORDEIRO  \n- QUINTA 20/06/2019 \n- TARDE",
                    atracao1:"> Raissa Braga (voz e  violão)",
                    atracao2:"> JP dos Teclados",
                    atracao3:"> Ronie dos Santos \n(youtuber, dançarino, humorista)",
                    atracao4:"> Grupo de Dança \n“Daniel e os meninos dançarinos”"
                },
                {
                    id:7,
                    cardTitle: "TABLADO \n- CARLOS CORDEIRO \n- SEXTA 21/06/2019 \n- MANHÃ",
                    atracao1:"> Grupo de dança “Let´s Dance”",
                    atracao2:"> Aristides Benício (voz e violão)",
                    atracao3:"> Escola de música  “Alfa Violão”",
                },
                {
                    id:8,
                    cardTitle: "TABLADO \n- CARLOS CORDEIRO \n- SEXTA 21/06/2019 \n- TARDE",
                    atracao1:"> Raimundo Carneiro  (Acordeón)",
                    atracao2:"> Banda Encantos  \n(Comunidade Católica Shalom)",
                    atracao3:"> Academia de Ballet \n“Viva Feliz” – Prof Layla Thuany"
                },
                {
                    id:9,
                    cardTitle: "TABLADO \n- CARLOS CORDEIRO \n- SÁBADO 22/06/2019 \n- MANHÃ",
                    atracao1:"> James Brito – cantor",
                    atracao2:"> Ballet Arte da Dança",
                    atracao3:"> Grupo musical “Soarte música”"
                },
                {
                    id:10,
                    cardTitle: "TABLADO \n- CARLOS CORDEIRO \n- SÁBADO 22/06/2019 \n- TARDE",
                    atracao1:"> Os Blacks – \nGrupo Musical de Chorinho",
                    atracao2:"> Zilda Pereira \n(coreografa e dançarina)",
                    atracao3:"> Grupo musical “Calango Joy”"
                },
                {
                    id:11,
                    cardTitle: "TABLADO \n- CARLOS CORDEIRO \n- DOMINGO 23/06/2019 \n- MANHÃ",
                    atracao1:"> Baby do Forró"
                },
                {
                    id:12,
                    cardTitle: "Palco Principal \n- QUINTA 20/06/2019",
                    atracao1:"> Adriana Calcanhoto",
                    atracao2:"> Tony Garrido"
                },
                {
                    id:13,
                    cardTitle: "Palco Principal \n- SEXTA 21/06/2019",
                    atracao1:"> Zeca Baleiro",
                },
                {
                    id:13,
                    cardTitle: "Palco Principal \n- SÁBADO 22/06/2019",
                    atracao1:"> Melin",
                    atracao2:"> Biquini Cavadao"
                },
                {
                    id:14,
                    cardTitle: "Palco Principal \n- DOMINGO 23/06/2019",
                    atracao1:"> Paulo Ricardo"
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