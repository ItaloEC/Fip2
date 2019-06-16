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
import icon_palcoopala from '../assets/icons/icon_palcoopala.png';
import icon_palcobluess from'../assets/icons/icon_palcobluess.png';
import icon_palcotablado from '../assets/icons/icon_palcotablado.png';
import icon_palcojazz from '../assets/icons/icon_palcojazz.png'


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
                            <Image source={icon_palcoopala} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Palco Opala</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botoesRole}
                          onPress={() => this.props.navigation.navigate("gritador")}>
                            <Image source={icon_palcobluess} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Palco Regional & Blues</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBotoes}>
                        <TouchableOpacity style={styles.botoesRole}
                          onPress={() => this.props.navigation.navigate("pracajazz")}>
                            <Image source={icon_palcojazz} style={styles.icons}></Image>
                            <Text style={styles.textoBotao}>Palco Jazz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botoesRole}
                          onPress={() => this.props.navigation.navigate("tablado")}>
                            <Image source={icon_palcotablado} style={styles.icons}></Image>
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
    textoBotao: {
        fontSize: 12,
        color: '#052702',
        fontWeight: 'bold',
        textAlign: 'center',
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