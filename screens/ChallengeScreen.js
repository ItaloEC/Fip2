import React, {Component} from "react";
import {
    StyleSheet,
    View,    
    ScrollView,
    Image,
    Text,
    WebView,
    ImageBackground,
} from "react-native";

import {width, height} from '../constants/Layout'

import background from '../assets/background_challenges.png';

// Desafio de matões
export default class ChallengeScreen extends Component {

  static navigationOptions = {
      header: null,
  };
  render() {
      
      return (
        
          <ImageBackground
              style={styles.container}
              source={background}
          >

          <View style={styles.viewDeCima}></View>
          <View style={styles.segundaView}></View>
          <ScrollView style={styles.ScrollView}>
          <WebView
              originWhitelist={['*']}
              source={{html: '<h1 style="color:#ff0000">Hello world</h1>'}}
              style={{backgroundColor:"#fff"}}
          />


            {/*<View style={styles.componentView}>
              <Image source={require('../assets/images/challenge.png')} style= {{height: 150, width: width, flex: 1, resizeMode: 'contain'}}/>

              <Text style={{textAlign: 'justify',color:'#42593a',backgroundColor: "#fff"}}>
                  DESAFIO SERRA DOS MATÕES-MIRANTES
              </Text>

            

              </View>*/} 
          </ScrollView>
          
          </ImageBackground>
      );

  }
  
}

const styles = StyleSheet.create({
  
  container: {
      flex: 1,
  },

  componentView: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    borderRadius: 10,
    backgroundColor: "#42593a",
  },

  ScrollView: {
      height: height - 90,
      backgroundColor: "#42593a",
      alignSelf: 'stretch',
  },

  Text: {
    textAlign: 'justify',
  },

  backgroundImage: {
      width: width,
      height: height,
      resizeMode: 'contain',
      justifyContent: 'flex-end',
  },

  viewDeCima: {
      height: 150,
  },

  segundaView: {
      height: 40,
  }
});
