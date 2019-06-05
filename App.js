import React from 'react';
import { createAppContainer, createStackNavigator} from 'react-navigation';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProgrammingScreen from './screens/ProgrammingScreen';
import MapScreen from './screens/MapScreen';
import Information from './screens/InformationScreen';
import Services from './screens/ServicesScreen';
import Challenge from './screens/challengeTeste';
import Sponsors from './screens/SponsorsScreen'
import InformationScreen from './screens/InformationScreen';
import ChallengeScreen from './screens/challengeTeste';
import ServicesScreen from './screens/ServicesScreen';

const AppNavigator = createStackNavigator({
    'Main': {
      screen: HomeScreen
    },
    
    'Programming': {
      screen: ProgrammingScreen
    },

    'Information': {
      screen: InformationScreen
    },

    'Challenge' : {
        screen: ChallengeScreen
    },

    'Services' : {
        screen: ServicesScreen
    },

    'Sponsors' : {
        screen: Sponsors
    }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;





