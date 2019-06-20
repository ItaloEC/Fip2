import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, ImageBackground} from 'react-native';
import Card_where_eat from '../components/Cards/Card_where_eat';
import { width, height } from '../constants/Layout'
import background from '../assets/whereEatBackground.png';


export default class WhereEatScreen extends React.Component {
  constructor(){
    super();
    this.state = {
        data: [

            {id:5,  cardTitle: "RESTAURANTE MEU BOTECO",   endereco:"R. Projetada, 10, 41, Pedro II - PI, 64255-000",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/meu_boteco.jpeg", contato:"Fone: (86) 99514-8158"},
             
            {id:5,  cardTitle: "PIZZARIA BOM SABOR",   endereco:"Rua landre Sales 186 –  Boa esperança",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/bom_sabor.jpeg", contato:"Fone: 9  94520551"},

            {id:47,  cardTitle: "Hamburgueria e Petiscaria Recanto do Sabor", endereco:"Comunidade Serra dos Matões - 12km", img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/recantodosabor.jpeg", 
            contato:"Fone: (86) 98824 1244 (whatsapp)"},

            {id:11,  cardTitle: "CHURRASCARIA O GAÚCHO",   endereco:"Av. Coronel Cordeiro, 263 – Centro.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/gaucho.jpg", contato:"Fone: (86) 9 9942-1215"},

            {id:22,  cardTitle: "BARBARELLA", endereco:"Rua Corinto Andrade, Centro.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/barbarela.jpeg", contato:"Fone: (86) 9 9515 7696"},

            {id:36,  cardTitle: "RANCHO DO DINO", endereco:"Comunidade Caranguejo – Serra dos Matões.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/rancho_dino.png", contato:"Fone: (86) 9 9900 9825 / 9 8133-8623"},

            {id:23,  cardTitle: "BAR LÁ KONDÊ E PIZZARIA", endereco:"Rua Corinto Andrade - Centro",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/laconde.jpeg", contato:"Fone: (86) 9 9956-6928"},

            {id:26,  cardTitle: "BECO DA PICANHA", endereco:"Rua Travessa João Mendes, 226 – Centro",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/becodapicanha.jpeg", contato:"Fone: (86) 9 9816 4487/ 99551-1130"},

            {id:28,  cardTitle: "DOM BISTRO", endereco:"Condomínio Vila das Flores",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/bistro.jpeg", contato:"Fone: (86) 9 9587 8491"},

            {id:40,  cardTitle: "BALNEÁRIO DAS SERRAS", endereco:"Povoado Carnaúbas - Serra dos Matões.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/balneario.jpeg", contato:"Fone: (86) 98164-2616(whatsapp)"},

            {id:44,  cardTitle: "Espaço Matões ART&PUB", endereco:"Rua João Militão, Comunidade Serra dos Matões - 12km.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/art_pub.jpg", 
            contato:"@espaco_artepub Fone:(86) 98101 8507 (whatsapp)"},

            {id:45,  cardTitle: "SUPERBURGER HAMBURGUER ARTESANAL DELIVERY", endereco:"Rua Soriano Pedro de Sousa 235 - Bairro Saborá", img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/super_burguer.jpg", 
            contato:"Fone:(86) 99408 7661 (whatsapp)"},

            {id:48,  cardTitle: "GALERIA COLONIAL CAFÉ E CIA", endereco:"Rua Tertuliano Filho,373- Centro Histórico", img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/galeria_colonial.jpg", contato:"Fone: (86)98139-1266- SALA 05"},
            
            {id:4,  cardTitle: "ATTA COZINHA E BAR",   endereco:"Rua Lauro Cordeiro, 835 – Boa Esperança",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/atta_cozinha_bar.jpg", contato:"Fone: (86) 98108-8416"},

            {id:10,  cardTitle: "CHURRASCARIA O CLEMENTE",   endereco:"Av. Coronel Cordeiro, Centro.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/churrascaria_clemente.jpeg", contato:"Fone: 9 9925 5580/ 9 95042583"},
            
            {id:5,  cardTitle: "CLUBE E CHURRASCARIA RUFINU´S",   endereco:"Barra dos Medeiros – Areia Branca",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: 9 8192 2816 / 9 9967 2536 / 9 9502 5500"},

            {id:8,  cardTitle: "PREDILECTA CAFETERIA E DOCERIA",   endereco:"AV. JOSÉ LOURENÇO MOURÃO, 201 - VILA OPERÁRIA",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: 9 9498-0976"},
           
            {id:1,  cardTitle: "RESTAURANTE E PIZZARIA ESTAÇÃO VILLA",   endereco:" Av. Jose Lourenço Mourão, Vila Operária.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 9431 7681"},
            
            {id:2,  cardTitle: "RESTAURANTE BOOMERANG - SHOPING MINERVINA",   endereco:"Av. Coronel Cordeiro, 312- Centro.", img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 3271 1648/9 99550-5391"},
            
            {id:8,  cardTitle: "CLUBE VIPASSANA",   endereco:"Rua João Alves Pereira, 664",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: 9 9974 6726"},
            
            {id:9,  cardTitle: "GERMANO RESTAURANTE",   endereco:"Tucuns dos Pedro - Zona Rural",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: 9 9547 2175"},
            
            
            
            {id:12,  cardTitle: "TORNÊRO CHURRASCARIA",   endereco:"AV. José Lourenço Mourão, 767- Vila Operária.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 9406 0668"},
            
            {id:13,  cardTitle: "PIZARRIA E CHURRASCARIA SABOR DA HORA",   endereco:"Av. José Lourenço Mourão, 718 - Centro",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 3271 1378 / 9 9557 8735"},
            
            {id:14,  cardTitle: "PIZZARIA MELHOR DO TRIGO",   endereco:"Rua José Gomes Filho, 64 – Chapadinha.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"(86) 9 9568 1692 / 9 9967 5034 / 99430-4982 / 9967-5034"},
            
            {id:15,  cardTitle: "QUIOSQUE CAJUEIRO", endereco:"Av. José Lourenço Mourão, Vila Operária.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 9420 4807"},
            
            {id:16,  cardTitle: "ARRUMADINHO E CIA", endereco:"Praça da Bonelle, Av. José Lourenço Mourão, 401-Centro",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone:"},
            
            {id:17,  cardTitle: "DINO SUSHI", endereco:"Av José Lourenço Mourão, 638 – Vila Operária.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 9495 7938"},
            
            {id:18,  cardTitle: "SUSHI P2", endereco:"Rua Corinto Andrade, 700 - Centro.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86)9 9835 4254 / 9 9565-0520 Facebook: sushi p2"},
            
            {id:19,  cardTitle: "BRAZ SUSHI", endereco:"AV. Jose Lourenço Mourão, 405 – Vila Operaria.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: 9 9827 9017 / 9 9924 8922"},
            
            {id:20,  cardTitle: "BICA LANCHES", endereco:"Av. Coronel Cordeiro, 25- Centro.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone:(86) 9 9840 4288 / 9 9532 9832"},
            
            {id:21,  cardTitle: "LAS VEGAS BAR", endereco:"Rua Lauro Cordeiro, 750- Centro (Boa Esperança).",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone:(86) 9 9824 8186"},
            
            {id:24,  cardTitle: "SKINOOS BAR", endereco:"Av. José Lourenço Mourão, Vila Operária",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 8152 9153"},
            
            {id:25,  cardTitle: "BAR DA BONELLE", endereco:"Praça da Bonelle – Centro",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 9419 0795"},
            
            
            
            {id:27,  cardTitle: "GRITADOR RESTAURANTE", endereco:"Mirante do Gritador - Serra dos Matões",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 8147-8339"},
            
            
            
            {id:29,  cardTitle: "BONELLE SORVETERIA", endereco:"AV. Coronel Cordeiro, 312 – Centro",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 8193 7283"},
            
            {id:30,  cardTitle: "SINTA SABOR PASTELARIA", endereco:"AV. José Lourenço Mourão, 430 - Vila Operária",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 9411 9320"},
            
            {id:31,  cardTitle: "PADARIA PÃO DO SANTO", endereco:"Rua João Benício, 450 – Centro",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 9489 8927"},
            
            {id:32,  cardTitle: "PÃO DA VILA", endereco:"AV. José Lourenço Mourão - Vila Operária.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 9495 3249"},
            
            {id:33,  cardTitle: "SORVETERIA QUICK", endereco:"Rua Lauro Cordeiro, 760 – Centro (Boa Esperança).",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 8867 4145"},
            
            {id:34,  cardTitle: "FÊNIX CHURRASCARIA", endereco:"Rua José Gomes Filho, 1407 - Areia Branca",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 9445 3029"},
            
            {id:35,  cardTitle: "REGIS GRILL", endereco:"Rua Auto Freire, 127 – Chapadinha.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 8115 6290"},
            
            {id:38,  cardTitle: "CHURRASCARIA AR LIVRE", endereco:"Rua Epifânio Getirana, 192 – Santa Fé.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"(86) 9 9448 3307 / 9 9815 1110 "},
            
            {id:39,  cardTitle: "FACEBAR, PIZARRIA E PASTELARIA", endereco:"AV. José Lourenço Mourão - Vila Operária.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"(86) 9 9466 9022 / 9 9833 7936"},
            
            
            
            {id:41,  cardTitle: "BALNEÁRIO UMBURANA", endereco:"Rua Estrela Azul, 55 – Santa Fé",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: 99965-7717 / 99520-9071"},
            
            {id:42,  cardTitle: "LANCHONETE ROCK BAR", endereco:"Rua Sotero Nogueira Lima, 130, Centro.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone(86) 99907-2939"},
            
            {id:43,  cardTitle: "MOTO ROCK DRINKS", endereco:"Av. José Lourenço Mourão",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 99470 4090"},


            {id:46,  cardTitle: "LARICA OPEN Cozinha ALTERNATIVA", endereco:"Rua Travessa João Mendes, 556 Centro",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", 
            contato:"Fone\Whatsapp (86) 98129 3212"},

        ]




    }
  }
  /** Retira a barra toolbar superior */
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={background}>
        <View style={styles.viewDeCima}></View>
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => <Card_where_eat item={item}/>}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ margin: 4}} />}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5e6f45',
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
  }
});
