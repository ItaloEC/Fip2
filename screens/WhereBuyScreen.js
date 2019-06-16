import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, ImageBackground} from 'react-native';
import Card_where_eat from '../components/Cards/Card_where_eat';
import { width, height } from '../constants/Layout'
import background from '../assets/whereBuyBackground.png';


export default class WhereBuyScreen extends React.Component {
  constructor(){
    super();
    this.state = {
        data: [
            {id:36,  cardTitle: "SURLENE ALMEIDA JÓIAS", endereco:"Rua Padre Vieira, 144.", img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/surlene_almeida.jpg", contato:"Fone: (86) 9 9924 0302"},

            {id:3,  cardTitle: "OPALAS PEDRO II", endereco:"Av. Cel Cordeiro, 672 - Centro.", img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/opalas_pedroii.png", contato:"Fone: (86) 98831-7190 / opalaspedroii.com"},

            {id:15,  cardTitle: "ESTYLUS JÓIAS", endereco:" Rua Domingos da Silva Mourão, 485 - Centro.", img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/estylus_joias.jpg", contato:"Fone: (86) 981744338/ 999217392"},

            {id: 15,
            cardTitle: 'HALLEY JÓIAS E RELÓGIOS',
            endereco:  'Mercado do Artesão Box 6',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/halley_joiais.jpeg",
            contato:'Fone: 86 99418 0260. Email: samuelcastro452hotmail.com'},

            {id: 20,
            cardTitle:'MERCADO DO ARTESÃO',
            endereco:'Rua Manoel Nogueira Lima',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/mercado.jpg",
            contato:'Aberto 6h ás 18h'},

            {id:1,
            cardTitle: "FEIRA DE ARTESANATO DO SEBRAE",
            endereco: "Pça Domingos Mourão Filho - Centro Histórico - FUNCIONA todos os dias do Festival de 8h as 22h.",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: ""},
              
            {id:2,
            cardTitle: "IMPACTO JÓIAS RIBAMAR",
            endereco: "Rua Manoel nogueira Lima, Loja 25- Mercado do Artesão.",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "Fone: (86) 9 8857- 4912.  Email: Ribamar-arte@hotmail.com"},
              
            {id:3,
            cardTitle: "ARTES PIAUÍ JÓIAS ",
            endereco:"Rua Tertuliano Filho, N°255- Centro.  Filial: Mercado do Artesão- loja 28",
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: "Fone: 9 9972 9465/ 99483 033.  Email: betinhodaopalap2@hotmail.com"},
            
            {id: 16, 
            cardTitle:'JÓIAS CRIARTES',
            endereco:'Av. Jose Lourenço Mourão s/n ',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato:'Fone: 9 9472 2875/ 9 8149 6879'},
            
            {id: 17,
            cardTitle: 'ATELIÊ DE PRATA JÓIAS ARTESANAIS',
            endereco:'Av.Jose Lourenço Mourão, 598 Centro',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: 'Fone: 9 9967 4861. Email: ourivespi@ig.com.br'},
            
            {id: 18,
            cardTitle:'RARISSIMA OPALA JÓIAS',
            endereco:'Loja 1 Mercado do Atesão Loja 2 Praça da Bonelle Rua João Benício da Silva, 209',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: 'Fone: 99455 9998/ 99436 1149/ 99977-0770'},
            
            {id: 19,
            cardTitle:'ATELIÊ JÓIA DA TERRA',
            endereco:'Av. Jose Louremço Mourão, 871- Vila Operaria ',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato:'Fone: 9 9964 2174. Email: ateliejoiadaterra@hotmail.com'},

            {id:36,  cardTitle: "RANCHO DO DINO", endereco:"Comunidade Caranguejo – Serra dos Matões.",img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg", contato:"Fone: (86) 9 9900 9825 / 9 8133-8623"},
            
            
            
            {id: 21,
            cardTitle:'XIQUE XIQUE TECELAGEM ARTESANAL',
            endereco:'RUA PROJETADA, 35-SANTA FÉ',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato:'FONE: (86) 3271-2720'},
            
            {id: 22,
            cardTitle:'ASSOCIAÇÃO DOS ARTESÕES DE PEDRO II- APP',
            endereco:'RUA AGOSTINHO PINHEIRO, 366',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: 'FONE:(86)3271-1635 (86) 99975-6049'},
            
            {id: 23,
            cardTitle:'CENTRO DE ARTESANATO IRMÃS CORDEIROS -SUDARPI PII',
            endereco:'AV. José Lourenço Mourão, 827',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato:''},
            
            {id: 24,
            cardTitle:'CENTRO DE FORMAÇÃO MANDACARU',
            endereco:'RUA MOSENHOR UCHOA, 270',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato: 'FONE:(86) 3271-1473'},
            
            {id: 25,
            cardTitle:'LIVRARIA CRUVIANA',
            endereco:'Rua Corinto Andrade, 1140 - Santa Fé',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato:'Fone 86 99431 9122 '},
            
            {id: 26,
            cardTitle:'TOCA DAS LENDAS - ESPAÇO CULTURA',
            endereco:'Rua Epifanio Getirana - Santa Fé',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato:'Fone 86 99431 9122'},
            
            {id: 27,
            cardTitle:'OFICINAS DE ARTES E ARQUITETURA/J.BATISTA',
            endereco:'RUA DES. HAMILTON MOURÃO',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato:'648-CENTRO FONE:(86)3271-1536'},
            
            {id: 28,
            cardTitle:'OFICINA DE ARTE RAY NETO',
            endereco:'RUA PROJETADA 58, N/45',
            img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
            contato:'FONE: 98888-6160'},

            {id:4,
              cardTitle: "DRI FORNITURA",
              endereco: "Rua Agostinho Pinheiro, 882- centro",
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
              contato: "Fone: 3271-1490/ 99987481. Email: drifornitura@hotmail.com"},
              
              {id:5,
              cardTitle: "OPALA JÓIAS CORES DA TERRA",
              endereco:"Rua Tertuliano Brandão filho, 256 centro",
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
              contato: "Fone: 99419 0934 Email: opalas_joias@hotmail.com"},
              
              {id:6,
              cardTitle:"JÓIAS E GEMAS",
              endereco:"Rua Tertuliano Filho, Centro",
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
              contato: "99402 6776"},
              
              {id:7,
              cardTitle: "OI.TI JÓIAS ARTESANAIS",
              endereco: "Av. Coronel Cordeiro 580, centro",
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
              contato: "Fone: 3271 2208/ 99952 0936. Email: oi.ti@uol.com.br"},
              
              {id: 8,
              cardTitle:"AL & JÓIAS",
              endereco:"Rua Agostinho Pinheiro, 388- Centro, Praça da Matriz",
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
              contato: "Fone: 9 9465 1135/3671-1771. Email: www.aljoias.net.br"},
              
              {id: 9,
              cardTitle: "DESIGN JÓIAS",
              endereco: "Rua Domingos Mourão filho 483, Praça Matriz",
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
              contato: "Fone: 99568 1685/ 99559 5943. "},
              
              {id: 10,
              cardTitle: "PJ –PEDRA JÓIA",
              endereco: "Av. Coronel Cordeiro, 592, Centro",
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
              contato: "Fone: 99467 2441/99952 0276. Email: pedrajoia2ig.com.br"},
              
              {id: 11,
              cardTitle:"LINO JÓIAS E CONSERTOS",
              endereco:"Rua Domingos Mourão Filho,",
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
              contato: "466- Centro"},
              
              {id: 12, 
              cardTitle:"ESTILOS JÓIAS ",
              endereco:"Rua Domingos da silva mourão, 487, Centro",
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
              contato:"Fone: 99484 9362/ 999423-2952.  Email: theresteixeira2hotmail.com"},
              
              {id: 13,
              cardTitle:'P2 JÓIAS',
              endereco:'Rua Domingos Mourão Filho, 483, Centro',
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
              contato: 'Fone: 99509 1520.'},
              
              {id: 14, 
              cardTitle:'AR´TS PEDRAS',
              endereco:'Mercado do Artesão- Box 22',
              img:"https://lightgroup.com.br/luminus/assets/images/estabelecimentos/padrao.jpeg",
              contato:'Proprietário: Maria das Lurdes paixão. Fone : 9 81531515'},
            
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
