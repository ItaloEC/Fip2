import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from "react-native";

import {Ionicons} from '@expo/vector-icons';

import {width, height} from '../constants/Layout'

import background from '../assets/backgroud.png';
import programacao from '../assets/icons/taage_icon_programacao.png';
import mapa from '../assets/icons/taage_icon_mapa.png';
import ondecomer from '../assets/icons/taage_icon_ondeficar.png';
import ondeficar from '../assets/icons/taage_icon_ondecomer.png';
import servicos from '../assets/icons/taage_icon_servicos.png';
import info from '../assets/icons/taage_icon_informacoes.png';
import noticias from '../assets/icons/taage_icon_noticias.png';
import desafio from '../assets/icons/taage_icon_desafioserradosmatores.png';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    static navigationOptions = {
        header: null,
    };


    render(props) {
        return (

            <ImageBackground
                style={styles.container}
                source={background}
            >

                    <View style={styles.viewDeCima}></View>
                    <View style={styles.segundaView}></View>

                <ScrollView style={styles.container}>
                    <View style={styles.containerBotoes}>
                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate('Programming')}>
                            <Image
                                source={programacao}
                                style={styles.icons}
                            ></Image>
                            <Text style={styles.textoBotao}>Programação</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate("Links")}>
                            <Image
                                source={mapa}
                                style={styles.icons}
                            ></Image>
                            <Text style={styles.textoBotao}>Mapa do FIP2</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.containerBotoes}>
                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate('WhereEat')}>
                            <Image
                                source={ondecomer}
                                style={styles.icons}
                            ></Image>
                            <Text style={styles.textoBotao}>Onde Comer</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate('WhereSleep')}>
                            <Image
                                source={ondeficar}
                                style={styles.icons}
                            ></Image>
                            <Text style={styles.textoBotao}>Onde Ficar</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.containerBotoes}>
                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate('Services')}>
                            <Image
                                source={servicos}
                                style={styles.icons}
                            ></Image>
                            <Text style={styles.textoBotao}>Serviços</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate('Information')}>
                            <Image
                                source={info}
                                style={styles.icons}
                            ></Image>
                            <Text style={styles.textoBotao}>Informações</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.containerBotoes}>
                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate('News')}>
                            <Image
                                source={noticias}
                                style={styles.icons}
                            ></Image>
                            <Text style={styles.textoBotao}>Notícias</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate('Challenge')}>
                            <Image
                                source={desafio}
                                style={styles.icons}
                            ></Image>
                            <Text style={styles.textoBotao}>Desafio Serra dos Matoes</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
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
    segundaView: {
        // backgroundColor: '#ffff00',
        height: 130,
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
    textoBotao: {
        fontSize: 20,
        color: '#052702',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containerBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 6,
    },
    icons: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    }
});
