import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    FlatList,
    ActivityIndicator, Button, Linking
} from 'react-native';
//import Card from '../components/Cards/Card_sponsors_and_partners';
import {width, height} from '../constants/Layout';
import background from '../assets/noticias.jpg';
//import Card from '../components/Cards/Card_news';
import Card from '../components/Cards/Card_challenge';

export default class NewsScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            data: [
                    {
                            cardTitle:"Pesquisa de Avaliação sobre o FESTIVAL DE INVERNO DE PEDRO II - 2019",
                            img:"https://www.festivalpedro2.com.br/wp-content/uploads/2019/06/00logofip2-e1559905570596.png",
                            texto:"A cada ano, o Festival de Inverno de Pedro II vem se renovando em busca de ampliar cada vez mais a qualidade das atrações culturais e passeios que a cidade oferece. Há 16 anos, a cidade de Pedro II tem se organizado  para oferecer aos seus visitantes as melhores experiências através do Turismo, contribuindo assim economicamente com o desenvolvimento da cidade. A Superintendência CEPRO (SEPLAN) objetiva, com esta pesquisa, levantar dados econômicos e sociais gerados durante o Festival para disponibiliza-los às empresarias, gestores e sociedade em geral, possibilitando, através da mesma, mensurar estatisticamente os impactos econômico  gerados para a cidade durante o Festival."
                        }
                ]
        }
    }

    componentDidMount () {

        return fetch('http://fip2.lightgroup.com.br/wp-json/wp/v2/posts')
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
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <Card item={item}/>}
                    />
                    <Button style={styles.button}
                        onPress={()=> Linking.openURL('https://forms.gle/QPXiuy5HSmcyEXYBA')}
                        title="Participe"
                        color="#42593a"
                    />
                </View>
            </ImageBackground>
            );
        }

        
    }
}

/**
 * 
 * 
 */
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
        height: '30%',
    },
    loader: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '60%'
    }

});