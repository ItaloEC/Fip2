import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
const tela =  require('../assets/images/splash2.jpg');
// import FirstScreen from './FirstScreen';

export default class Splash2 extends Component {

    // constructor(props){
    //    super(props);
    // }

    static navigationOptions = {
      header: null,
  };

    componentDidMount(){
      setTimeout((() => {this.props.navigation.navigate('HomeScreen')}), 2000);
    }

    render() {
    return (
      <ImageBackground
          source={tela}
          style={{flex: 1}}
      />
    )
  }
}


// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
// import HomeScreen from './HomeScreen';

// class FirstScreen extends React.Component {

//    state = {
//         tela: false,
//    }


//     componentDidMount(){
//       this.timeoutHandle = setTimeout( () => {this.chamarHome}, 2000 );
//     }
//     chamarHome(){
//         this.setState({tela: true});
//     }

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => {
//             this.props.navigation.navigate({ routeName: 'HomeScreen' })

//           }}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   First: {
//     screen: FirstScreen,
//   },
//   HomeScreen: {
//     screen: HomeScreen,
//   },
//   Details: {
//     screen: DetailsScreen,
//   },
// }, {
//     initialRouteName: 'First',
// });

// export default createAppContainer(AppNavigator);
