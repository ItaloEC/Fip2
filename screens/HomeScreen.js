import React, {Component} from "react";
import { AppState, StyleSheet, Text, View, ScrollView,  Image, ImageBackground,  TouchableOpacity,
} from "react-native";
import { Notifications, Permissions } from "expo";

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

    state = {
        token: "",
        data: null,
        origin: null
    };

    askPermissions = async () => {
        const { status: existingStatus } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== "granted") {
            return false;
        }
        return true;
    };

    sendNotificationImmediately = async () => {
        let notificationId = await Notifications.presentLocalNotificationAsync({
            title: "Teste de Notificação",
            body: "Bem vindo ao FIP2"
        });
    };

    constructor(props) {
        super(props);
    }
    
    static navigationOptions = {
        header: null,
    };


    render(props) {
    this.askPermissions();
    this.sendNotificationImmediately();
        return (

            <ImageBackground style={styles.container} source={background}>
                    <View style={styles.viewDeCima}></View>
                    <View style={styles.segundaView}></View>

                <ScrollView style={styles.container}>
                    <View style={styles.containerBotoes}>
                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate('Programming')}>
                            <Image source={programacao} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Programação</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate("Links")}>
                            <Image source={mapa} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Mapa do FIP2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBotoes}>
                        <TouchableOpacity style={styles.botoesRole} onPress={() => this.props.navigation.navigate("Links")}>
                            <Image source={ondecomer} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Onde Comer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botoesRole} onPress={() => this.props.navigation.navigate("Links")}>
                            <Image source={ondeficar} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Onde Ficar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBotoes}>
                        <TouchableOpacity style={styles.botoesRole} onPress={() => this.props.navigation.navigate('Services')}>
                            <Image source={servicos} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Serviços</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botoesRole} onPress={() => this.props.navigation.navigate('Information')}>
                            <Image source={info} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Informações</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBotoes}>
                        <TouchableOpacity style={styles.botoesRole} onPress={() => this.props.navigation.navigate("Links")}>
                            <Image source={noticias} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Notícias</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botoesRole} onPress={() => this.props.navigation.navigate('Challenge')}>
                            <Image source={desafio} style={styles.icons}></Image>
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
