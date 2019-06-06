import React from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Image,
    ImageBackground,
    FlatList,
    ActivityIndicator
} from 'react-native';
//import Card from '../components/Cards/Card_sponsors_and_partners';
import {width, height} from '../constants/Layout';
import background from '../assets/patroBackground.png';
import Card from '../components/Cards/Card_news';

export default class NewsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }


    componentDidMount () {

        return fetch('http://192.168.1.7:8080/wp-json/wp/v2/posts')
            .then ( (response)     => response.json() )
            .then ( (responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                })
            })

        .catch((error) => {
            console.log(error)
        });
    }

    render() {
        if(this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else 
        {
            let posts = this.state.dataSource;

            return (
                <ImageBackground style={styles.container} source={background}>
                <View style={styles.viewDeCima}></View>
                <View style={styles.container}>
                    <FlatList
                        style={styles.flatList}
                        data={posts}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <Card item={item}/>}
                    />
                </View>
            </ImageBackground>
            );
        }

        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: width,
        height: height,
        resizeMode: 'contain',
    },
    viewDeCima: {
        // backgroundColor: '#008000',
        height: 150,
    },
    loader: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});