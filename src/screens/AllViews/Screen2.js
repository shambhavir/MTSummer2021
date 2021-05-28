import * as React from "react";
import {
  Button,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  firebase,
  firebaseConfig,
  db,
  getUserDocument,
  realtime,
} from "../../firebase/config";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
// import { Card } from 'react-native-shadow-cards';
import { Card } from "react-native-elements";
const user = firebase.auth().currentUser;
import styles from "./styles";
var infostorage = [];
infostorage[0] = "this is some data 1";
infostorage[1] = "this is some data 2";
infostorage[2] = "this is some data 3";
export default class Screen2 extends React.Component {
  onpress1 = () => {
    this.props.navigation.navigate("Page1", { user });
    //this.componentDidsMount2
  };
  onpress2 = () => {
    this.props.navigation.navigate("Page2", { user });
    //this.componentDidsMount2
  };
  onpress3 = () => {
    this.props.navigation.navigate("Page3", { user });
    //this.componentDidsMount2
  };
  onpress4 = () => {
    this.props.navigation.navigate("Page4", { user });
    //this.componentDidsMount2
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Card
            containerStyle={{
              flex: 1.3,
              backgroundColor: "#e4bad4",
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              width: 375,
              height: 380,
              elevation: 12,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 20,
                  color: "#F8F4FF",
                  paddingVertical: 8,
                  paddingHorizontal: 13,
                  fontWeight: "bold",
                }}
              >
                What are the Risks{"\n"}to Pregnant Women?
              </Text>
              <Card.Image
                style={{ width: 140, height: 59, flexWrap: "wrap" }}
                source={require("../../../assets/belly.png")}
              ></Card.Image>
            </View>
            <Card.Divider style={{ backgroundColor: "white" }} />
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#F8F4FF",
                paddingVertical: 8,
                paddingHorizontal: 13,
              }}
            >
              Pregnant women must remain especially vigilant with regard to
              COVID-19 as multiple studies have found that infected pregnant
              women are potentially at an increased risk for adverse birth
              outcomes.
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 20,
                color: "white",
                paddingVertical: 15,
                paddingHorizontal: 10,
                fontWeight: "bold",
              }}
              onPress={this.onpress1}
            >
              Learn More
            </Text>
          </Card>
          <Card
            containerStyle={{
              flex: 1.3,
              backgroundColor: "#a0829b",
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              width: 375,
              height: 400,
              elevation: 12,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 20,
                  color: "#F8F4FF",
                  paddingVertical: 8,
                  paddingHorizontal: 13,
                  fontWeight: "bold",
                }}
              >
                Carings for Newborns{"\n"}in the Age of COVID-19
              </Text>
              <Card.Image
                style={{ width: 110, height: 59, flexWrap: "wrap" }}
                source={require("../../../assets/babyclothes.png")}
              ></Card.Image>
            </View>
            <Card.Divider style={{ backgroundColor: "white" }} />
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#F8F4FF",
                paddingVertical: 8,
                paddingHorizontal: 13,
              }}
            >
              Current studies suggest that newborns contracting COVID-19 from
              their mothers while they were pregnant is not very common. Most
              newborns that tested positive for COVID-19 were either
              asymptomatic or had mild to no symptoms with fewer reports of
              newborns having severe symptoms
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 20,
                color: "white",
                paddingVertical: 15,
                paddingHorizontal: 10,
                fontWeight: "bold",
              }}
              onPress={this.onpress2}
            >
              Learn More
            </Text>
          </Card>

          <Card
            containerStyle={{
              flex: 1.3,
              backgroundColor: "#e4bac2",
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              width: 375,
              height: 400,
              elevation: 12,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 20,
                  color: "#F8F4FF",
                  paddingVertical: 8,
                  paddingHorizontal: 13,
                  fontWeight: "bold",
                }}
              >
                COVID-19 Vaccinations{"\n"}and Pregnant Women
              </Text>
              <Card.Image
                style={{ width: 110, height: 59, flexWrap: "wrap" }}
                source={require("../../../assets/needle.png")}
              ></Card.Image>
            </View>
            <Card.Divider style={{ backgroundColor: "white" }} />
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#F8F4FF",
                paddingVertical: 8,
                paddingHorizontal: 13,
              }}
            >
              The COVID-19 vaccines have been approved by the FDA and authorized
              for emergency use by the US government. All vaccines have
              undergone very strict testing and abide by regulation standards,
              even more so than some other vaccines that have been approved for
              public use.
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 20,
                color: "white",
                paddingVertical: 15,
                paddingHorizontal: 10,
                fontWeight: "bold",
              }}
              onPress={this.onpress3}
            >
              Learn More
            </Text>
          </Card>

          <Card
            containerStyle={{
              flex: 1.3,
              backgroundColor: "#c197d2",
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              width: 375,
              height: 400,
              elevation: 12,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 20,
                  color: "#F8F4FF",
                  paddingVertical: 8,
                  paddingHorizontal: 13,
                  fontWeight: "bold",
                }}
              >
                Mom's Mental Health{"\n"}During the Pandemic
              </Text>
              <Card.Image
                style={{ width: 140, height: 59, flexWrap: "wrap" }}
                source={require("../../../assets/mh.png")}
              ></Card.Image>
            </View>
            <Card.Divider style={{ backgroundColor: "white" }} />
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#F8F4FF",
                paddingVertical: 8,
                paddingHorizontal: 13,
              }}
            >
              The COVID-19 pandemic adds yet another source of stress and
              anxiety for pregnant women. Telehealth has grown increasingly
              popular, and this is especially important for pregnant women as
              daily stress due to the pandemic leads to higher stress and
              anxiety than non-pregnant women.
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 20,
                color: "white",
                paddingVertical: 15,
                paddingHorizontal: 10,
                fontWeight: "bold",
              }}
              onPress={this.onpress4}
            >
              Learn More
            </Text>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
