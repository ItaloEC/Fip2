import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import Programming from './screens/ProgrammingScreen';

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    render() {
        return (
            <Programming/>
        );
    }
}

