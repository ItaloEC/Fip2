// import React, { Component } from "react";
// import { Text, View, ImageBackground, StyleSheet } from "react-native";
// import { MapView } from "expo";
// import { width, height } from "../constants/Layout";

// const ASPECT_RATIO = width / height;
// const LATITUDE = -18.9193508;
// const LONGITUDE = -48.2830592;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// import bg from "../assets/mapa1.jpg";

// export default class MapScreen extends Component {
//   static navigationOptions = {
//     header: null
//   };
//   state = {
//     region: {
//       latitude: LATITUDE,
//       longitude: LONGITUDE,
//       latitudeDelta: LATITUDE_DELTA,
//       longitudeDelta: LONGITUDE_DELTA
//     },
//     markers: mks
//   };

//   render() {
//     return (
//       <View>
//         <ImageBackground source={bg} style={styles.container}>
//           <MapView style={styles.container} initialRegion={this.state.region} provider={this.props.provider}>
//             <MapView.Marker
//               title={"Central de Pousadas Domiciliares"}
//               description={"teste"}
//               coordinate={{
//                 latitude: -4.4269925,
//                 longitude: -41.4586721
//               }}
//             />
//             <MapView.Marker
//               title={"Central de Pousadas Domiciliares"}
//               description={"teste"}
//               coordinate={{
//                 latitude: -4.42699,
//                 longitude: -41.4589
//               }}
//             />
//           </MapView>
//         </ImageBackground>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     alignItems: "center",
//     flexDirection: "column"
//   },
//   scrollview: {
//     alignItems: "center",
//     paddingVertical: 40
//   },
//   map: {
//     width: width,
//     height: height * 0.6,
//     marginTop: height * 0.3
//   },
//   cobridor: {
//     height: "10%",
//     width: width,
//     marginTop: height * 0.3,
//     flexDirection: "row"
//     // backgroundColor: "#fff"
//   },
//   cobridorBotao: {
//     // height: "10%",
//     width: width / 2,
//     marginTop: height * 0.3
//   },
//   guia: {
//     width: width,
//     height: height * 0.6,
//     marginTop: height * 0.4,
//     resizeMode: "contain"
//   }
// });

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
