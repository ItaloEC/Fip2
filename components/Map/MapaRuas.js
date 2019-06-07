const mks = [
    {
        key: 1,
        Name: "Restaurante Boomerang",
        Description: "Av. Cel. Cordeiro, 312<br>(86) 3271-1648",
        coordinate: { longitude: -41.4506919, latitude: -4.4322174 }
    },
    {
        key: 2,
        Name: "ATTA Cozinha e Bar",
        Description: "Rua Lauro Cordeiro, 835 - Boa Esperança<br>86 98108-8416",
        coordinate: { longitude: -41.4515412, latitude: -4.4218791 }
    },
    {
        key: 3,
        Name: "Clube Vipassana",
        Description: "Rua João Alves Pereira, 664<br>86 9974-6726",
        coordinate: { longitude: -41.4529053, latitude: -4.4448684 }
    },
    {
        key: 4,
        Name: "Tornêro Churrascaria",
        Description:
            "Av. José Lourenço Mourão, 767 <br>86 3271-1378 | 9.9557-8735 | 9.9903-9017",
        coordinate: { longitude: -41.4485991, latitude: -4.436016 }
    },
    {
        key: 5,
        Name: "Dino Sushi",
        Description: "Av. José Lourenço Mourão, 638<br>86 9.9435-7938",
        coordinate: { longitude: -41.4481833, latitude: -4.4366015 }
    },
    {
        key: 6,
        Name: "Sushi P2",
        Description: "86 9.9835-4254 | 9.9565-0520",
        coordinate: { longitude: -41.4540651, latitude: -4.4202022 }
    },
    {
        key: 7,
        Name: "Bica Lanches",
        Description: "86 9.9840-4288 | 9.9532|9832",
        coordinate: { longitude: -41.4599408, latitude: -4.4277689 }
    },
    {
        key: 8,
        Name: "Braz Sushi",
        Description: "9.9827-9.9924-8922",
        coordinate: { longitude: -41.4512785, latitude: -4.432498 }
    },
    {
        key: 9,
        Name: "Bonelle Sorveteri",
        Description: "86 9.8193-728",
        coordinate: { longitude: -41.4506919, latitude: -4.4322174 }
    },
    {
        key: 10,
        Name: "Sinta Sabor Pastelaria",
        Description: "86 9.9411-9320",
        coordinate: { longitude: -41.4469995, latitude: -4.4381228 }
    },
    {
        key: 11,
        Name: "Sorveteria Quick",
        Description: "86 9.8867",
        coordinate: { longitude: -41.4518841, latitude: -4.4233071 }
    },
    {
        key: 12,
        Name: "Rancho do Dino",
        Description: "86 9.9900-9825",
        coordinate: { longitude: -41.438148, latitude: -4.3757972 }
    },
    {
        key: 13,
        Name: "Melhor na Brasa",
        Description: "86 9.9514-0543",
        coordinate: { longitude: -41.4506831, latitude: -4.4332959 }
    },
    {
        key: 14,
        Name: "Lanchonete Rock Bar",
        Description: "86 9.9907-2939",
        coordinate: { longitude: -41.455418, latitude: -4.4308021 }
    },
    {
        key: 15,
        Name: "Galeria Colonial, Café e CIA",
        Description: "86 9.8139-1266",
        coordinate: { longitude: -41.4591883, latitude: -4.4265966 }
    },
    {
        key: 16,
        Name: "Mercado do artesão",
        Description:
            "Loja 25 - Impacto Jóias Ribamar (86 9.8857-4912)<br>Loja 28 - Artes Piauí Jóias (86 9. 9972-9465)<br>Loja 22 - Ar'ts Pedras (86 9.8153-1515)<br>Loja 1 e 2 - Raríssima Opala Jóias (86 9.9455-9998)<br>Halley Jóias e Relógios (86 99559=9242 )",
        coordinate: { longitude: -41.4578935, latitude: -4.4278764 }
    },
    {
        key: 17,
        Name: "DRI Fortunita",
        Description: "86 9.3271-1490 | 9.9987-7481",
        coordinate: { longitude: -41.4558843, latitude: -4.4222689 }
    },
    {
        key: 18,
        Name: "Design Jóias",
        Description: "86 9.9468-2441 | 9.9559-5943",
        coordinate: { longitude: -41.4582114, latitude: -4.4263556 }
    },
    {
        key: 19,
        Name: "PJ - Pedra Jóia",
        Description: "86 9.9467-2441 | 9.9952-0276",
        coordinate: { longitude: -41.4482998, latitude: -4.4331752 }
    },
    {
        key: 20,
        Name: "Lino Jóias e Consertos",
        Description: "",
        coordinate: { longitude: -41.4526892, latitude: -4.4288313 }
    },
    {
        key: 21,
        Name: "Estilo Jóias",
        Description: "86 9.9484-9362 | 9.9862-2553",
        coordinate: { longitude: -41.4529484, latitude: -4.4289076 }
    },
    {
        key: 22,
        Name: "Praça Domingos Mourão Filho, 483",
        Description: "",
        coordinate: { longitude: -41.452916, latitude: -4.428915 }
    },
    {
        key: 23,
        Name: "P2 JÓIAS",
        Description: "86 9.9509-1520 | 9.9942-4437",
        coordinate: { longitude: -41.4528387, latitude: -4.4288847 }
    },
    {
        key: 24,
        Name: "Ateliê de Jóias Artesanais",
        Description: "86 9.9967-4861",
        coordinate: { longitude: -41.4475947, latitude: -4.4373454 }
    },
    {
        key: 25,
        Name: "Associação dos Artesões de Pedro II",
        Description: "86 9.9975-6049",
        coordinate: { longitude: -41.4583786, latitude: -4.4263744 }
    },
    {
        key: 26,
        Name: 'Centro de artesanato "irmãs cordeiros" - SUDARPI-PI',
        Description: "",
        coordinate: { longitude: -41.4487938, latitude: -4.4357757 }
    },
    {
        key: 27,
        Name: "Oficina de Artes e Arquitetura/J.Batista",
        Description: "86 3271-1536",
        coordinate: { longitude: -41.4538928, latitude: -4.4256211 }
    },
    {
        key: 28,
        Name: "Oficina de Arte Ray Neto",
        Description: "86 9.8888-6160",
        coordinate: { longitude: -41.4451658, latitude: -4.441608 }
    },
    {
        key: 29,
        Name: "Pousada Riacho",
        Description: "86 9.9989-3164",
        coordinate: { longitude: -41.4546461, latitude: -4.4291019 }
    },
    {
        key: 30,
        Name: "Central de Pousadas Domiciliares",
        Description: "",
        coordinate: { longitude: -41.4586721, latitude: -4.4269925 }
    }
];

import React from "react";

const screen = Dimensions.get("window");
import { Text, Dimensions, TouchableOpacity, StyleSheet } from "react-native";

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = -4.403626;
const LONGITUDE = -41.451737;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import { Constants, MapView } from "expo";

// import { Container } from './styles';

export default class MapaRuas extends React.Component {
    state = {
        markers: mks,
    }

    render() {
        return (
            <MapView
                provider={this.props.provider}
                style={styles.map}
                initialRegion={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }}
            >
                {this.state.markers.map(marker => (
                    <MapView.Marker
                        key={marker.key}
                        title={marker.Name}
                        description={marker.Description}
                        coordinate={marker.coordinate}
                    />
                ))}
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewDeBaixo: {
        flex: 7,
        marginTop: screen.height * 0.2,
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    viewDeCima: {
        flex: 3
    },
    map: {
        width: screen.width,
        height: screen.height * 0.6,
        // marginTop: screen.height * 0.3,
        alignSelf: "flex-end"
    },
    button: {
        flex: 1,
        backgroundColor: "#f00"
    },
    buttonContainer: {
        flexDirection: "row",
        width: screen.width,
        height: screen.height * 0.1,
        marginTop: screen.height * 0.2,
        backgroundColor: "#00f"
    }
});

