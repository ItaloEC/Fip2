import React, { Component } from "react";

import {
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import { width, height } from "../constants/Layout";
import background from "../assets/ecomatoes.jpg";
import opalaIcon from "../assets/desafio_opala.jpg";
import matoesIcon from "../assets/desafio_matoes.jpg";

export default class ChooseChallenge extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    render(props) {
        return (
            <ImageBackground style={styles.container} source={background}>
                {/* <Modal isVisible={this.state.isModalVisible}>
                <View>
                    <Text>Escolha um mapa:</Text>
                    <View>
                        <TouchableOpacity  onPress={() => {this.props.navigation.navigate("FestivalMapScreen")}}>
                            <Text>Festival</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("MapScreen")}}>
                            <Text>Ruas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal> */}

                <View style={styles.viewDeCima} />
                {/* <View style={styles.segundaView} /> */}

                <ScrollView style={styles.container}>
                    <View style={styles.containerBotoes}>
                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate("Programming")}
                        >
                            <Image source={opalaIcon} style={styles.icons} />
                            <Text style={styles.textoBotao}>Desafio Da Opala</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => {
                                this.props.navigation.navigate("Map");
                            }}
                        >
                            <Image source={matoesIcon} style={styles.icons} />
                            <Text style={styles.textoBotao}>Desafio Serra Dos Matões</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        // justifyContent: "center",
    },
    backgroundImage: {
        width: width,
        height: height,
        resizeMode: "contain"
    },
    viewDeCima: {
        // backgroundColor: '#008000',
        height: "30%"
    },
//   segundaView: {
//     // backgroundColor: '#ffff00',
//     height: 130
//   },

    textoBotao: {
        fontSize: 20,
        color: "#052702",
        fontWeight: "bold",
        textAlign: "auto",
        flexWrap: "wrap"
    },

    containerBotoes: {
        flexDirection: "column",
        justifyContent: "space-around",
        flex: 1
    },
    botoesRole: {
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: 10,
        width: width,
        height: 250,
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "space-around"
    },
    icons: {
        width: 200,
        height: 200,
        resizeMode: "contain"
    }
});
