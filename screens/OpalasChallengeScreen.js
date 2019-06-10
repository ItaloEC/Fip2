import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Text,
    WebView,
    ImageBackground,
} from "react-native";

import { width, height } from '../constants/Layout'

import background from '../assets/images/opalas.jpg';

// Desafio de matões
export default class OpalasChallengeScreen extends Component {

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
                    <View style={styles.componentView}>
                        <Image source={require('../assets/images/Desafio_das_Opalas.jpg')} style={{ height: 350, width: width, flex: 1, resizeMode: 'contain' }} />

                        <Text style={{ textAlign: 'justify', color: '#42593a', fontSize: 20}}>
                            EQUIPE TÉCNICA DEFINE TODO ROTEIRO E TRILHAS DO DESAFIO DAS OPALAS: 98 KM DE PERCURSO EM CENÁRIOS DESLUMBRANTES
                        </Text>

                        <Text style={{ textAlign: 'justify', alignSelf: 'stretch' }}>


                            Está cada vez mais perto o Desafio das Opalas. A
                            terceira edição da maior aventura oficial do mountain bike nacional
                            vai colorir um pouco mais paisagens de milhões de anos no norte do
                            Piauí, nos dias 1º e 2 de junho, entre Piripiri e Pedro II, cenários
                            raramente desbravados por uma competição oficial. A competição de
                            mountain bike definirá os campeões piauienses de MTB Maratona –
                            prova única, será ranking nacional de pontuação máxima (XCM1) da
                            Confederação Brasileira de Ciclismo – CBC e ainda etapa do
                            Campeonato Piauiense de Mountain Bike por ranking. Para as categorias
                            oficiais, a disputa terá cerca de 98 km e a Turismo terá 45 km
                            cravados. A competição terá uma altimetria total de 1.600 metros do
                            nível do mar. Os pontos altos, além do Parque Nacional de Sete
                            Cidades, são a Serra dos Matões para boas subidas e a descida do
                            Purgatório, que tem um visual fantástico. A chegada será no Mirante
                            do Gritador, que fica na Serra dos Matões, no município de Pedro II.

                            A largada tanto das categorias oficiais e da Turismo
                            será do Centro de Visitantes, situado dentro do Parque Nacional de Sete
                            Cidades, próximo a Piripiri. Logo na sequência, os atletas
                            enfrentarão de cara 10 km de single-track, que são as trilhas fechadas
                            com muitas áreas verdes e veredinhas, passando por quase todas as
                            ‘cidades’ que compõem o Parque ee pelos conhecidos monumentos
                            naturais rochosos do local, como a Pedra da Tartaruga, o Arco do
                            Triunfo, a Piscina dos Milagres, a Cabeça de D. Pedro I, o Pé do
                            Gigante, entre outras formações que remontam em mais de 400 milhões
                            de anos e comprovam também que o parque, que fica cerca de 200 km de
                            Teresina, já foi mar. Criado em 1961, com uma área de 6.221 hectares,
                            Sete Cidades tem um rico patrimônio arqueológico e uma fauna e flora
                            exuberantes e únicos.

                            “Nosso objetivo com o Desafio das Opalas é apresentar esse cenário
                            único de belezas naturais para atletas do Piauí e de outros estados,
                            como forma de valorização do local e também porque toda aquela
                            região é propícia para a prática do mountain bike, devido a
                            altimetria e por apresentar trilhas incríveis”, destacou o diretor
                            geral do evento, Fernando Correia Lima.

                            Depois de encarar as belezas do parque, os atletas
                            deixarão o cenário pela saída norte em direção à BR-343, a qual
                            será atravessada com o auxílio da Polícia Rodoviária Federal e da
                            polícia de trânsito de Piripiri, adentrando a trilha novamente por
                            outro tipo de paisagens naturais, passando por muitas comunidades, como
                            o Povoado Lage, depois Santa Rita e Nova Brasília para chegar ao Açude
                            Caldeirão, onde finda a prova para a categoria Turismo. “Do Povoado
                            Lage, as categorias se dividem e as oficiais seguem a trilha passando
                            pelos povoados Baixão, Lagoa do São Francisco, Palmeiras do Soares,
                            Purgatório, Angico Branco e Caranguejo, chegando finalmente no Morro do
                            Gritador para o fim da prova e a premiação”, destacou o diretor de
                            prova do evento, Zenardo Maia.

                            Características gerais – Para a categoria Turismo, será uma prova
                            predominantemente plana, com poucas subidas, trilhas de velocidade e a
                            chegada será no restaurante O Machado, às margens do Açude
                            Caldeirão, um importante ponto turístico de Piripiri. Para as
                            categorias oficiais não terá moleza com serras e terrenos íngremes,
                            além de areia, riachos, pedras, afinal os vencedores já serão
                            consagrados campeões piauienses. O 3º Desafio das Opalas tem
                            patrocínio do Governo do Estado do Piauí – Setur; co-patrocínio
                            Unimed/Intermed Teresina e Sebrae; Apoio: Prefeitura Municipal de
                            Piripiri e   de Pedro II, Crisfapi, MR Peças, Bike Xtreme, Evo Bike,
                            Renata Said Acessórios, Ateliê Joia da Terra, Fabi Veras, Tintas
                            Verbras, Quitanda Freitas; parceiro institucional: ICMBios;
                            Realização: Associação Piauiense de Ciclismo – APC; co-produção:
                            X Brasil e supervisão: CBC e FCP.

                            CATEGORIAS:
                            MASCULINO - CICLISMO MARATONA:
                            ELITE/SUB–23: (19 anos acima) – Nasc. em 2000 e anos anteriores ou
                            critério técnico
                            SUB-30: (23 A 29 anos) - Nasc. entre 1996 A 1990
                            MASTER A1 (30 A 34 anos) – Nasc. entre 1989 A 1985
                            MASTER A2 (35 A 39 anos) – Nasc. entre 1984 A 1980
                            MASTER B1 (40 A 44 anos) – Nasc. entre 1979 A 1975
                            MASTER B2 (45 A 49 anos) – Nasc. entre 1974 A 1970
                            MASTER C1 (50 A 54 anos) – Nasc. entre 1969 A 1965
                            OVER 55 (55 anos acima)
                            FEMININO - CICLISMO MARATONA
                            ELITE (19 anos acima) – Nasc. entre 2000 e anos anteriores)
                            MASTER (30 anos acima)
                            MASCULINO – CICLISMO CROSS COUNTRY (Categoria com percurso reduzido)
                            JUNIOR (17 a 18 anos) - Nasc. entre 2002 a 2001
                            JUVENIL ( 15 A 16 anos) – Nasc. entre 2004 a 2003
                            OPEN
                            TURISMO - Masculino e “Feminino
                            DUPLAS

                            CONTATOS: (86) 99988-5050 - MÁRCIA CRISTINA
                            (86) 9449-7197
                        </Text>

                    </View>
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
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'stretch',
        borderRadius: 10,
    },

    ScrollView: {
        height: height * 0.3,
        backgroundColor: "#fff",
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
        height: "30%",
    },
    segundaView: {
        height: 40,
    }
});