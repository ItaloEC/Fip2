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
                
                <View style={styles.viewDeCima} />
            

                <ScrollView style={styles.container}>
                    <View style={styles.containerBotoes}>
                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => this.props.navigation.navigate("OpalaChallengeScreen")}
                        >
                            <Image source={opalaIcon} style={styles.icons} />
                            <Text style={styles.textoBotao}>Desafio Das Opalas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botoesRole}
                            onPress={() => {
                                this.props.navigation.navigate("ChallengeScreen");
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
        height: "30%"
    },


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
        height: 200,
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "space-around"
    },
    icons: {
        width: 120,
        height: 120,
        resizeMode: "contain"
    }
});
