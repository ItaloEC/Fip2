import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import Information from './screens/InformationScreen';
import Services from './screens/ServicesScreen';


export default class App extends React.Component {
    
    state = {
        isLoadingComplete: false,
    };

    // Loading custom fonts of native base cross-platform UI components for React Native
    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

    render() {
        return (
            <Services/>
        );
    }
}

