import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    render() {
        return (
            <MapScreen/>
        );
    }
}

