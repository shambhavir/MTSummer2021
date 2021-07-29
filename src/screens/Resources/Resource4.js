import * as React from "react";
import {
  ImageBackground,
  Button,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal
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
import { Ionicons } from '@expo/vector-icons';


const user = firebase.auth().currentUser;
import styles from "./styles";
var infostorage = [];
infostorage[0] = "this is some data 1";
infostorage[1] = "this is some data 2";
infostorage[2] = "this is some data 3";


export default class Resource4 extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      isVisible: false
    };
  }
  onLinkPress1 = () => {
    this.props.navigation.navigate("Screen1");
  }
  onLinkPress2 = () => {
    this.props.navigation.navigate("Screen2");
  }
  onLinkPress3 = () => {
    this.props.navigation.navigate("Screen3");
  }
  displayModal(show) {
    this.setState({ isVisible: show })
  }
  /*onLinkPress4 = () => {
    this.props.navigation.navigate("Screen4");
  }*/
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Modal
            animationType={"slide"}
            transparent
            visible={this.state.isVisible}
            presentationStyle="overFullScreen"
            style={{ borderRadius: 20 }}
            justifyContent={'flex-end'}
          >
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>

            <Card containerStyle={{
              flex: 1.3,
              backgroundColor: "#caf7e3",
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.9,
              shadowRadius: 7.49,
              width: 380,
              height: 1000,

              elevation: 12,
            }}>

              <View style={{
                justifyContent: 'center',
                alignItems: 'center',

              }}>

                {/* <Card.Image
                style={{ paddingVertical: 3, paddingHorizontal: 2, width: 220, height: 200 }}
                source={require("../../../assets/updatedmtlogo.png")}
              ></Card.Image>
             */}
              </View>
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 15,
                  color: "#674b80",
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  fontWeight: "bold",
                }}
              >
                Women’s Health Institute: Mother’s Touch App Team
            </Text>
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 12,
                  color: "#674b80",
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                }}
              >
                The Mother’s Touch is a maternal health education app powered by a team of thirty diverse Rutgers undergraduate meeting. Each member on the team contributes her own special skills and talents from finding research content to coding this application. Most importantly, our team members share unique cultural backgrounds creating an open environment where we can fuse many perspectives on maternal health and COVID-19.

            </Text>
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 15,
                  color: "#674b80",
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  fontWeight: "bold",
                }}
              >
                Our Mission
            </Text>
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 12,
                  color: "#674b80",
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                }}
              >
                To empower mothers, pregnant individuals, and those interested in conceiving through an interactive educational app that supplies information in a simple way!

            </Text>
            </Card>
            <TouchableOpacity
              style={{
                padding: 25,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              activeOpacity={1}
              onPressOut={() => { this.setState({ isVisible: false }) }}
            ></TouchableOpacity>
          </Modal>
          <Text style={{
            fontFamily: "System",
            fontSize: 50,
            color: "#e4bad4",
            fontWeight: "bold",
            paddingVertical: 3,
            paddingHorizontal: 19,
          }}>Explore</Text>

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
              height: 180,

              elevation: 12,
            }}

          >
            {/* <View style={styles.innerContainer}> */}
            <View style={{
              flexDirection: "row"

            }}>
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 25,
                  color: "#F8F4FF",
                  paddingVertical: 8,
                  paddingHorizontal: 13,
                  fontWeight: "bold",

                }}
                onPress={this.onLinkPress1}
              >
                Stages of{'\n'}Pregnancy{"\n"}and You
                </Text>
              <Card.Image
                style={{ paddingVertical: 8, paddingHorizontal: 4, width: 270, height: 130 }}
                source={require("../../../assets/secondpic.png")}
              ></Card.Image>
            </View>
            {/* <View
                style={{ flexDirection: "row", alignContent: "stretch" }}
              >
               
              </View> */}
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
              height: 180,

              elevation: 12,
            }}
          >
            <View style={styles.innerContainer}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 25,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                    fontWeight: "bold",
                  }}
                  onPress={this.onLinkPress2}
                >
                  COVID-19 and{"\n"}Pregnant{'\n'}Women
                </Text>
                <Card.Image
                  style={{ width: 180, height: 120, flexWrap: "wrap" }}
                  source={require("../../../assets/doc.png")}
                ></Card.Image>
              </View>
              <View style={{ flex: 1, height: 100, width: 1000 }}></View>
            </View>
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
              height: 180,

              elevation: 12,
            }}
          >
            <View style={styles.innerContainer}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 25,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                    fontWeight: "bold",
                  }}
                  onPress={this.onLinkPress3}

                >
                  Your General{'\n'}Health
                </Text>
                <Card.Image
                  style={{ width: 220, height: 120, flexWrap: "wrap" }}
                  source={require("../../../assets/third.png")}
                ></Card.Image>
              </View>
              <View style={{ flex: 1, height: 100, width: 1000 }}></View>
            </View>
          </Card>
          <Text>{'\n'}</Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 70,
              bottom: 0.03,
              left: 165,
              height: 70,
              backgroundColor: '#febdc6',
              borderRadius: 100,
            }}
            onPress={() => {
              this.displayModal(true);
            }}
          >
            <Ionicons name="help-circle-outline" size={32} color="white"
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
