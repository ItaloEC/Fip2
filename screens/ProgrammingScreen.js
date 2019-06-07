import React, {Component} from "react";
import {
    ImageBackground,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text
} from "react-native";
import {width, height} from '../constants/Layout'
import background from '../assets/progBackground.png';
import guitar from '../assets/icons/guitar.png';
import microphone from'../assets/icons/microphone.png';
import note from '../assets/icons/note.png';
import saxofone from '../assets/icons/saxophone.png'


export default class ProgrammingScreen extends Component {

    constructor(){
        super();
    }

    static navigationOptions = {
        header: null,
    };


    render() {
        return (
            <ImageBackground style={styles.container} source={background}>
                <View style={styles.viewDeCima}></View>
                <View style={styles.viewDeBaixo}></View>
                <View style={styles.containerBotoes}>
                        <TouchableOpacity style={styles.botoesRole}
                          onPress={() => this.props.navigation.navigate("principal")}>
                            <Image source={guitar} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Palco da Opala</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botoesRole}
                          onPress={() => this.props.navigation.navigate("gritador")}>
                            <Image source={microphone} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Palco Blues</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBotoes}>
                        <TouchableOpacity style={styles.botoesRole}
                          onPress={() => this.props.navigation.navigate("pracajazz")}>
                            <Image source={saxofone} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Palco do Jazz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botoesRole}
                          onPress={() => this.props.navigation.navigate("tablado")}>
                            <Image source={note} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Tablado</Text>
                        </TouchableOpacity>
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
        height: 150,
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
        width: 90,
        height: 90,
        resizeMode: 'contain',
    }
});