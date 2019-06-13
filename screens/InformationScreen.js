import React, {Component} from "react";
import {ImageBackground, ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import Card_programacao from '../components/Cards/Card_information';
import {width, height} from '../constants/Layout'
import background from '../assets/InfoBackground.png';


export default class InformationScreen extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {
                    id:1,
                    cardTitle: "APRESENTAÇÃO DA CIDADE",
                    texto:"O relógio gira diferente em Pedro II, a suíça piauiense; tem momentos que são para ficarem mesmo gravados na retina, como se o tempo parasse um instante para contemplarmos a Arte no ritmo da Natureza . Situada a 750 metros de altitude, os cenários bucólicos, engenhosos e únicos, daqueles de se tirar o fôlego, são até meio que um lugar comum, ao mirar Pedro II por seus diversos ângulos: a cidade é bela em todas as suas nuances, cada olhar é uma fotografia que o destino nos presenteia com sua peculiar dose de satisfação. Paisagens paradisíacas, cachoeiras, minas de opala, arquitetura colonial, artesanato em pedras semipreciosas, bordados e tecelagem, além de uma gente simpática que não mede esforços nem sorrisos para agradar. E como se não bastassem tantos atributos, Pedro II ainda hospeda o melhor e maior festival de musica da região: Festival de Inverno Pedro II.",
                    img:'https://lightgroup.com.br/luminus/assets/images/info/MUSEU%20P2%2002.JPG'
                },
                {
                    id:2,
                    cardTitle: "HISTÓRICO DO EVENTO",
                    texto:"FESTIVAL DE INVERNO DE PEDRO II: MUSICA EM ALTO E BOM SOM. A 16a edição do Festival de Inverno de Pedro II, evento já consolidado como maior festival cultural do Piauí, traz públicos dos mais diversos e plurais na verdadeira arte do encontro e reencontro: sempre novo, rejuvenescido e melhorado. A cidade inteira se prepara, com toda sua população engajada, mobilizada em torno do que fazer de melhor para dar seu quinhão de contribuição ao grandioso evento, mostrando ao mundo um pouco do que só Pedro II é capaz de mostrar, entre aventuras, mistérios e descobertas encantadoras entre serra e sertão. O Festival de Inverno de Pedro II conta com diversos shows que se distribuem em quatro palcos: Palco Blues O Gritador, Opala Bonelle, Palco praça do Jazz, e Tablado Carlos Cordeiro, e emocionam milhares de pessoas. Passaram pela cidade nomes consagrados do Jazz, Blues, Pop, Rock e da MPB que, além de chancelarem com seus acordes, qualidade e bom gosto, consolidaram o evento que, hoje, já faz parte do calendário musical do estado e do páis. GRANDES NOMES QUE PASSSARAM PELO EVENTO Em 16 anos de Festival de Inverno, Pedro II foi palco da boa música Brasileira e Internacional, recebendo artitas consagrados que deixaram suas marcas na linha do tempo deste grandioso evento.",
                    img:'http://lightgroup.com.br/luminus/assets/images/estabelecimentos/historico_evento.png'
                },
                {
                    id:3,
                    cardTitle: "OPALA",
                    texto:"Opala, pedra Nobre considerada semi-preciosa, muito utilizada na arte da joalheria por sua estrutura única, onde uma só pedra pode produzir até 200 cores. Encontrada em quantidades significativas apenas em dois lugares do mundo, Austrália e Pedro II Piauí, a Opala traz em quem contempla esta pedra, uma misticidade e beleza única. Pedro II além de ter uma das duas maiores jazidas de opala do mundo conta também com uma diversidade de serviço de artesanato e joalheria com um mercado versátil e ecologicamente aprovado.",
                    img:'https://lightgroup.com.br/luminus/assets/images/info/pedra%20opala.jpg'
                },
                {
                    id:4,
                    cardTitle: "MIRANTE DO GRITADOR",
                    texto:"A cerca de 10 Km do centro da cidade e a 720 metros de altura, no alto da Serra dos Matões, o Mirante do Gritador além de uma vista única dos vales que contemplam todo o município de Pedro II e cidades vizinhas, possui características bem peculiares como a de produzir ecos e devolver objetos leves lançados em seus desfiladieros. Ou seja, um passeio imperdível.",
                    img:'https://lightgroup.com.br/luminus/assets/images/info/GRITADOR%2001.JPG'
                },
                {
                    id:5,
                    cardTitle: "CASARIO",
                    texto:"Localizadas no centro da cidade, as casas coloniais dão colorido e um certo charme ao passeio. O Casario de Pedro II, preservado, nos revela o respeito da população com sua história e com sua vocação turística.",
                    img:'https://lightgroup.com.br/luminus/assets/images/info/CENTRO%20HISTORICO%2002.JPG'
                },
                {
                    id:6,
                    cardTitle: "BURITIZINHO",
                    texto:"Engenho onde, além de se dedicar com a culinária local, temos a oportunidade de conhecer todo o processo da produção de rapadura artezanal.",
                    img:'http://lightgroup.com.br/luminus/assets/images/estabelecimentos/buritizinho.jpeg'
                },
                {
                    id:7,
                    cardTitle: "MUSEU DA ROÇA",
                    texto:"A iniciativa consegue nos recontar o cotidiano da vida rural e do trabalho nas minas de opala da região com todos os seus encantos. Além de abrigar um jardim com plantas ornamentais e exó ́ticas, o espaço também nos oferece bar, restaurante, piscina com água natural e até um redódomo, onde é possível contemplar alguns objetos do acervo a céu aberto deitado em uma rede.",
                    img:'https://lightgroup.com.br/luminus/assets/images/info/MUSEU%20DA%20RO%c3%87A%2002.JPG'
                },
                {
                    id:8,
                    cardTitle: "MINAS DE OPALA",
                    texto:"Passeio onde podemos ver garimpeiros trabalhando e selecionando cascalhos da pedra semipreciosa, que é encontrada com alta qualidade somente em dois lugares do planeta: na Austrália e em Pedro II, no Piauí. Depois, a opala, rainha das cores, se transforma pelas mãoes de artesãos e joalheiros em peças de rara e grande valor artístico.",
                    img:'http://lightgroup.com.br/luminus/assets/images/estabelecimentos/minas_de_opala.jpeg'
                },
                {
                    id:9,
                    cardTitle: "CACHOEIRAS DO SALTO LISO E URUBU REI",
                    texto:"Salto liso - A 14 Km de Pedro II, no povoado Mangabeira, a Cachoeira do Salto Liso é um convite a um banho bem refrescante. Além da queda d'água de 26m, um lago fechado entre paredões rochosos aguarda o mergulho do visitante. E quem gosta da aventura também pode radicalizar e praticar rapel. Urubu-Rei - Seus 76 metros de queda d'água a tornam uma das maiores do Piauí. Mas, para chegar lá, é necessário espírito de aventura já que o acessoexige caminhadas em mata densa, de onde é possível avistar paisagens paradisíacas. Para quem curte aventura e ecologia, esta cacheira é um presente que fica cerca de 30 Km do centro urbano.",
                    img:'https://lightgroup.com.br/luminus/assets/images/info/Cachoeira_de_Salto_Liso.jpg'
                },
 
                {
                    id:10,
                    cardTitle: "ESPAÇO CRIANÇA",
                    texto:"Tema: A NATUREZA, O IMAGINÁRIO E O BRINCAR. Data: 21/06/2019(sexta-feira) Das 16h às 18h, Local: Praça Pe. Raimundo Jose Vieira (Cruzeiro) Realização: Secretaria Municipal de Educação de Pedro II. As crianças poderão desfrutar de apresentações teatrais, música, dança,desenhos, jogos, leitura, artes plásticas e shows de mágica. ",
                    img:'https://lightgroup.com.br/luminus/assets/images/estabelecimentos/espacodacrianca.jpg'
                },
                {
                    id:11,
                    cardTitle: "XI FEIRA DA FARTURA",
                    texto:"Tema: VALORIZANDO A AGRICULTURA FAMILIAR Data: 21/06/2019 (sexta-feira) Local: Praça Pe. Raimundo José Vieira (Cruzeiro)  Horário: 06h às 12h Realização: CENTRO DE FORMAÇÃO MANDACARU DE PEDRO II Apoio: Sindicato dos trabalhadores e trabalhadoras Rurais de Pedro II. Já é tradição no município a Feira da Fartura. Este evento fomenta a comercialização dos produtos gerados na agricultura familiar.",
                    img:'https://lightgroup.com.br/luminus/assets/images/estabelecimentos/feiradafartura.jpg'
                },
                {
                    id:12,
                    cardTitle: "EXPOSIÇÃO 30 ANOS DE FOTOGRAFIA - PAULO BARROS",
                    texto:"Local: Memorial Tertuliano Brandão Filho - Centro Histórico. De 10h às 20h Paulo Barros traz do fotojornalismo a sensibilidade para perceber o momento, o instante, a captura das situações e expressões transformadas em mensagens. Não é fotografo de estúdio, programado, mas do mundo, imprevisível - das suas formas, cores, movimentos e personagens. Talvez por isso seja plural, aborda qualquer tema que desperta sua alma poética. (Bonifacio Candido Neto)",
                    img:'https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg'
                },
                {
                    id:13,
                    cardTitle: "ESPAÇO JUVENTUDE do Festival de Inverno de Pedro II",
                    texto:"Local: Museu da Opala (Clube 11 de Agosto) -  Centro Histórico, Data: 20 a 22/06/2019 De 14h às 20h Design de sobrancelha, Maquiagem, Laços e Panfletagem educativa. Praça Antonino Martins (Praça da Juventude) - Vila Operaria. De 09h as 11h30min. Oficinas de Teatro, Dança, Grafite. Realização: Secretaria Municipal da Juventude de Pedro II e Coordenadoria da Juventude do Estado do Piauí. ",
                    img:'https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg'
                },
                {
                    id:14,
                    cardTitle: "FEIRA DE ARTESANATO -  Coordenada pelo SEBRAE",
                    texto:"Local: Praça Domingos Mourão Filho (Matriz) De 8h às 22h Há 16 anos em parceria com o SEBRAE, a Feira de Artesanato atrai milhares de turistas e movimenta a economia local. O povo empreendedor de Pedro II tem oportunidade de explorar novos mercados oferecendo o que a cidade tem de melhor no artesanato  com a Tecelagem, Cerâmica e as mais belas jóias de Opala de Pedro II. Em 2019, são diversas novidades como a criação de uma jóia especifica para o Festival, além de oficinas vivas e TalkShow que traz uma excelente programação sobre empreendedorismo e comportamento do Empreendedor.",
                    img:'https://lightgroup.com.br/luminus/assets/images/estabelecimentos/feiradeartesanato.jpg'
                },
                {
                    id:15,
                    cardTitle: "Sítios Arqueológicos",
                    texto:"Pedro II possui mais de 200 painéis de sítios arqueológicos catalogados, sendo que quatro deles possuem estrutura para receber turistas: Serra do Quinto, Buriti Grande dos Aquiles, Torre 1 e Torre 2. As figuras de animais, homens e abstratas são resultado da ocupação humana de anos. É necessária a presença de guia.",
                    img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/SITIO%20ARQUEOLOGICO.JPG"
                }
                


            ]
        }
    }

    static navigationOptions = {
        header: null,
    };


    render() {
        if(this.state.data.length === 0) {
            return(
                <View style={styles.loader}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return (
            <ImageBackground style={styles.container} source={background}>
                <View style={styles.viewDeCima}></View>
                <View style={styles.container}>
                    <FlatList
                        style={styles.flatList}
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <Card_programacao item={item}/>}
                    />
                </View>

            </ImageBackground>
        );
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
        height: '28%',
    },
    loader: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatList:{
        backgroundColor: '#607145'
    }

});