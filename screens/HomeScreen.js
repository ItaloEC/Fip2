import React, { Component } from "react";
import {
  AppState,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import { width, height } from "../constants/Layout";
import background from "../assets/backgroud.png";
import programacao from "../assets/icons/icon_programacao.png";
import mapa from "../assets/icons/icon_mapa.png";
import ondeficar from "../assets/icons/icon_ondeficar.png";
import ondecomer from "../assets/icons/icon_ondecomer.png";
import ondecomprar from "../assets/icons/icon_ondecomprar.png";
import servicos from "../assets/icons/icon_servicos.png";
import rotasturisticas from "../assets/icons/icon_rotas_turisticas.png";
import noticias from "../assets/icons/icon_noticias.png";
import ecomatoes from "../assets/icons/icon_ecomatoes.png";
import patrocinadores from "../assets/icons/icon_patrocinadores.png";
import sebrae from "../assets/icons/icon_sebrae.png";
import feira from "../assets/icons/icon_feira.png";

import { Permissions, Notifications } from "expo";

async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== "granted") {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== "granted") {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  console.log(token);
}

export default class HomeScreen extends Component {
  componentWillMount() {
    registerForPushNotificationsAsync();
  }

  state = {
    token: "",
    data: null,
    origin: null
  };

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  };

  render(props) {
    return (
      <ImageBackground style={styles.container} source={background}>
        <View style={styles.viewDeCima} />
        <View style={styles.segundaView} />

        <ScrollView style={styles.container}>
          <View style={styles.containerBotoes}>
            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("Programming")}
            >
              <Image source={programacao} style={styles.icons} />
              <Text style={styles.textoBotao}>Programação</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("Map")}
            >
              <Image source={mapa} style={styles.icons} />
              <Text style={styles.textoBotao}>Mapa do FIP2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerBotoes}>
            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("WhereEat")}
            >
              <Image source={ondecomer} style={styles.icons} />
              <Text style={styles.textoBotao}>Onde Comer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("WhereSleep")}
            >
              <Image source={ondeficar} style={styles.icons} />
              <Text style={styles.textoBotao}>Onde Ficar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerBotoes}>
            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("News")}
            >
              <Image source={noticias} style={styles.icons} />
              <Text style={styles.textoBotao}>Notícias</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("WhereBuy")}
            >
              <Image source={ondecomprar} style={styles.icons} />
              <Text style={styles.textoBotao}>Onde Comprar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerBotoes}>
            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("Services")}
            >
              <Image source={servicos} style={styles.icons} />
              <Text style={styles.textoBotao}>Serviços</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("ChooseChallenge")}
            >
              <Image source={ecomatoes} style={styles.icons} />
              <Text style={styles.textoBotao}>EcoMatões</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerBotoes}>
            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("Sponsors")}
            >
              <Image source={patrocinadores} style={styles.icons} />
              <Text style={styles.textoBotao}>Patrocinadores</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("TouristRoutes")}
            >
              <Image source={rotasturisticas} style={styles.icons} />
              <Text style={styles.textoBotao}>Rotas Turísticas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerBotoes}>
            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("SebraeScreen")}
            >
              <Image source={sebrae} style={styles.icons} />
              <Text style={styles.textoBotao}>Sebrae</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botoesRole}
              onPress={() => this.props.navigation.navigate("ArtesaoScreen")}
            >
              <Image source={feira} style={styles.icons} />
              <Text style={styles.textoBotao}>Mercado do Artesão</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    width: width,
    height: height,
    resizeMode: "contain"
  },
  viewDeCima: {
    height: "25%"
  },
  botoesRole: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 10,
    width: 150,
    height: 150,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-around"
  },
  textoBotao: {
    fontSize: 16,
    color: "#052702",
    fontWeight: "bold",
    textAlign: "center"
  },
  containerBotoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 6
  },
  icons: {
    width: 70,
    height: 70,
    resizeMode: "contain"
  }
});
