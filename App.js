import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import Information from './screens/InformationScreen';
import Services from './screens/ServicesScreen';
import Sponsors from './screens/SponsorsScreen'


export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    render() {
        return (
            <Sponsors/>
        );
    }
}

