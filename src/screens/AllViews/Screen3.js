/*general pregnancy health*/
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
import { Card } from "react-native-elements";
const user = firebase.auth().currentUser;
import styles from "./styles";
var infostorage = [];
infostorage[0] = "this is some data 1";
infostorage[1] = "this is some data 2";
infostorage[2] = "this is some data 3";
export default class Resource1 extends React.Component {
  onpress1 = () => {
    this.props.navigation.navigate("preconception", { user });
    //this.componentDidsMount2
  };
  onpress2 = () => {
    this.props.navigation.navigate("pregnancy", { user });
    //this.componentDidsMount2
  };
  onpress3 = () => {
    this.props.navigation.navigate("postpregnancy", { user });
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
                Interested in Becoming{"\n"}Pregnant?
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
              Preconception health + how to prepare
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
                Health During{"\n"}Pregnancy
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
              There are many factors that will affect your pregnancy such as your nutrition, mental and physical health, 
              and your sleep schedule. It is important to follow a routine or schedule to ensure a smooth pregnancy.  
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
                Post Pregnancy Care
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
              After giving birth, you will be very busy with your new family member! However, it is important that
              you take care of your mental health and body while nurturing your baby.  
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

          
        </ScrollView>
      </View>
    );
  }
}
