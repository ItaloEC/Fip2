import React from 'react';
import { createAppContainer, createStackNavigator} from 'react-navigation';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProgrammingScreen from './screens/ProgrammingScreen';
import MapScreen from './screens/MapScreen';
import Information from './screens/InformationScreen';
import Services from './screens/ServicesScreen';
import Sponsors from './screens/SponsorsScreen'
import InformationScreen from './screens/InformationScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import ServicesScreen from './screens/ServicesScreen';
import WhereEatScreen from './screens/WhereEatScreen';
import WhereSleepScreen from './screens/WhereSleepScreen';
import WhereBuyScreen from './screens/WhereBuyScreen';
import NewsScreen from './screens/NewsScreen';

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
    
    'WhereEat' : {
      screen: WhereEatScreen
    },

    'WhereSleep' : {
       screen: WhereSleepScreen
    },
    
    'WhereBuy' : {
      screen: WhereBuyScreen
    },

    'News' : {
      screen: NewsScreen
    },

});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;





