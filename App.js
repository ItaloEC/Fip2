import React from 'react';
import { createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ProgrammingScreen from './screens/ProgrammingScreen';
import MapScreen from './screens/MapScreen';
import Sponsors from './screens/SponsorsScreen'
import TouristRoutesScreen from './screens/TouristRoutesScreen';
import ServicesScreen from './screens/ServicesScreen';
import WhereEatScreen from './screens/WhereEatScreen';
import WhereSleepScreen from './screens/WhereSleepScreen';
import WhereBuyScreen from './screens/WhereBuyScreen';
import NewsScreen from './screens/NewsScreen';
import tablado from './screens/Tablado';
import pracajazz from './screens/PracaJazz';
import gritador from './screens/PalcoGritador';
import principal from './screens/PalcoPricipal'
import ChooseChallengeScreen from "./screens/ChooseChallengeScreen";
import OpalaChallengeScreen from "./screens/OpalasChallengeScreen";
import ChallengeScreen from "./screens/ChallengeScreen";
import Splash2 from "./screens/Splash2";
import SebraeScreen from "./screens/SebraeScreen";
import ArtesaoScreen from "./screens/ArtesaoScreen";

const AppNavigator = createStackNavigator({

    'Main':  {
      screen: Splash2
    },
    'HomeScreen':  {
      screen: HomeScreen
    },
    
    'Programming': {
      screen: ProgrammingScreen
    },

    'TouristRoutes': {
      screen: TouristRoutesScreen
    },

    'ChooseChallenge' : {
      screen: ChooseChallengeScreen
    },

    'Services' : {
        screen: ServicesScreen
    },

    'Sponsors' : {
        screen: Sponsors
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

    'pracajazz' : {
      screen: pracajazz
    },

    'gritador' : {
        screen: gritador
    },

    'principal' : {
        screen: principal
    },

    'tablado' : {
        screen: tablado
    },

    'Map' : {
        screen: MapScreen
    },
    'OpalaChallengeScreen' : {
        screen : OpalaChallengeScreen
    },
    'ChallengeScreen' : {
        screen : ChallengeScreen
    },
    'SebraeScreen' : {
        screen : SebraeScreen
    },
    'ArtesaoScreen' : {
        screen : ArtesaoScreen
    }

});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;





