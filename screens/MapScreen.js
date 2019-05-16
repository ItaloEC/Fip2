import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";

import MapKml from '../utils/MapKml'

export default class MapScreen extends Component {
    static navigationOptions = {
        header: null,
    };




    render() {


        return (
            <MapKml/>

        );
    }
}
