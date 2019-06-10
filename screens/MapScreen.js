import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Constants, MapView } from "expo";

import { Text, Dimensions, TouchableOpacity, Platform } from "react-native";

const screen = Dimensions.get("window");

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = -4.403626;
const LONGITUDE = -41.451737;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

import bgRuas from "../assets/mapa1.jpg";
import bgDesenho from "../assets/mapa2.jpg";

import MapaRuas from '../components/Map/MapaRuas';
import MapaDesenho from '../components/Map/MapaDesenho';

const mapaDesenho = () => {
    <View style={styles.guia}>
        <ImageViewer
            imageUrls={images}
            enableImageZoom
            transparent={true}
            backgroundColor={"#fff"}
        />
    </View>;
};

class AnimatedMarkers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coordinate: {
                latitude: LATITUDE,
                longitude: LONGITUDE
            },
            background: bgRuas,
            content: MapaRuas,
        };
    }

    _handleMapRegionChange = mapRegion => {
        this.animate(mapRegion);
    };

    render() {
        return (
            <ImageBackground style={styles.container} source={this.state.background}>
                <View style={styles.viewDeCima} />

                <View style={styles.viewDebaixo}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={
                            () => {
                                this.setState({background: bgDesenho, content: MapaDesenho});
                            }
                        }>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={
                            () => {
                                this.setState({background: bgRuas, content: MapaRuas});
                            }}>
                        </TouchableOpacity>
                    </View>
                    <this.state.content/>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewDeBaixo: {
        flex: 7,
        marginTop: screen.height * 0.2,
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    viewDeCima: {
        flex: 3
    },
    map: {
        width: screen.width,
        height: screen.height * 0.6,
        // marginTop: screen.height * 0.3,
        alignSelf: "flex-end"
    },
    button: {
        flex: 1,
        backgroundColor: "transparent"
    },
    buttonContainer: {
        flexDirection: "row",
        width: screen.width,
        height: screen.height * 0.1,
        marginTop: screen.height * 0.2,
        backgroundColor: "transparent"
    }
});

export default class App extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return <AnimatedMarkers />;
    }
}
