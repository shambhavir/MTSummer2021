/*Screen1 is the subheadigs for the main topic of Pregnancy and You*/
/*  this is MOTHERS TOUCH UPDATE FOLDER NOT THE MTOFFICIAL HEHE
import React from 'react'
import { Text, View } from 'react-native'

export default function Screen1(props) {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}*/

/*og screen1*/
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
    this.props.navigation.navigate("firstTrimester");
    //this.componentDidsMount2
  };
  onpress2 = () => {
    this.props.navigation.navigate("secondTrimester");
    //this.componentDidsMount2
  };
  onpress3 = () => {
    this.props.navigation.navigate("thirdTrimester");
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
              height: 360,
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
                First Trimester
              </Text>
              
            </View>
            <Card.Divider style={{ backgroundColor: "white" }} />
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#F8F4FF",
                paddingVertical: 11,
                paddingHorizontal: 13,
              }}
            >
              Your pregnancy's first trimester is one of the most important stages for fetal development. Find out everything you need to know on fetal development. 
            </Text>

            <View style={{ flexDirection: "row" }}>
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
            <Card.Image
                style={{ width: 300, height: 120, flexWrap: "wrap" }}
                source={require("../../../assets/updatedmask.png")}
              ></Card.Image></View>
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
                Second Trimester
              </Text>
              
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
              The second trimester is the second stage of your pregnancy. Two-thirds of the way there! 
            </Text>
            <Text>{'\n'}</Text>
            <View style={{ flexDirection: "row" }}>
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
            <Card.Image
                style={{ width: 300, height: 130, flexWrap: "wrap" }}
                source={require("../../../assets/st.png")}
              ></Card.Image>
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
                Third Trimester
              </Text>
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
              The third trimester of pregnancy begins around week 27 and is the last stage. Prepare to welcome your newest family member!
            </Text>
            <Text>{'\n'}</Text>

            <View style={{ flexDirection: "row" }}>

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
            <Card.Image
                style={{ width: 300, height: 130, flexWrap: "wrap" }}
                source={require("../../../assets/hn.png")}
              ></Card.Image>
            </View>
          </Card>

          
        </ScrollView>
      </View>
    );
  }
}
