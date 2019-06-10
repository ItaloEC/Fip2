import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { Dimensions} from "react-native";

const screen = Dimensions.get("window");

export default class MapaDesenho extends Component {
    render() {
        const images = [{ url: "http://lightgroup.com.br/luminus/assets/images/estabelecimentos/mapa_festival.jpg" }];
        return (
            <View style={styles.guia}>
                <ImageViewer
                    imageUrls={images}
                    enableImageZoom
                    transparent={true}
                    backgroundColor={"#fff"}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    guia: {
        width: screen.width,
        height: screen.height * 0.6,
        // marginTop: screen.height * 0.3,
        alignSelf: "flex-end"
    }
});
