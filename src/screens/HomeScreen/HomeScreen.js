import React, { useRef, useEffect, useState } from "react";
import {
  Image,
  Animated,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
//import { Card } from "react-native-shadow-cards";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
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
import {
  TabViewAnimated,
  TabBar,
  SceneMap,
  TabView,
} from "react-native-tab-view";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const user = firebase.auth().currentUser;

var data2 = [];
var infostorage = [];
var infostorage = [];
infostorage[0] = "Nutrition for {'\n'}you and{'\n'}your baby";
infostorage[1] = "this is some data 2";
infostorage[2] = "this is some data 3";

var welcomeMsg = []
// welcomeMsg[0] = "Welcome, New Mom!";
// welcomeMsg[1] = "Welcome, Expecting Mom!"
// welcomeMsg[2] = "Welcome!"
data2[0] = "this is a test";
const win = Dimensions.get("window");
const ratio = win.width / 20;

var welcome = ""
// data1[0] = "this is some data 1"
// data1[1] = "this is some data 2"
// data1[2] = "this is some data 3"

export default class HomeScreen extends React.Component {
  // updateInfo1 = () => {
  //   const favRef = firebase
  //     .database()
  //     .ref("users/" + firebase.auth().currentUser.uid + "/" + "AllFaves");
  //   favRef.push({
  //     testpush: infostorage[0],
  //   });
  // };
  
  state = {
    index: 0,
    routes: [
      {
        key: "first",
        title: "For You",
      },
      {
        key: "second",
        title: "Explore",
      },
    ],
    data1: [],
    test: "",
    test2: false,
    check1: false,

    check2: false,

    check3: false,

    check4: false,

    check5: false,

    check6: false,

    check7: false,

    temp1: false,

    temp2: false,

    temp3: false,
    all: true,

    opacityTest: 0.1,
    buttonColor1: "#bc8fbc",
    buttonColor2: "#bc8fbc",
    buttonColor3: "#bc8fbc",
    buttonColor4: "#bc8fbc",
    welcome2: ""
  };

  onpress2 = () => {
    if (!this.state.check2) {
      this.setState({
        check2: true,
        buttonColor2: "#67C495",
      });
      this.componentDidMount;
      this.props.navigation.navigate("Resource4");
      //this.componentDidsMount2
    } else {
      this.setState({
        check2: false,
        buttonColor2: "#8fbc8f",
      });
    }
  };

  render() {
    return (
      <View
      style={styles.container}
      >
        <ScrollView>
        <Text  style={{
              fontFamily: "System",
              fontSize: 60,
              color: "#e4bad4",
              fontWeight: "bold",
              paddingVertical: 1,
              paddingHorizontal: 15,
            }}>Home</Text>
    {/* <Text>{'\n'}</Text> */}
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

            elevation: 12,
            width: 335,
            height: 620
          }}
        >
          
        
                 {/* <Card.Title style={{ padding: 10, margin: 10, borderRadius: 20, height: 120 }}>
                     <Text >{welcome}</Text>
                 </Card.Title>
         
         */}
          
          <Card.Title
            style={{
              fontFamily: "System",
              fontSize: 40,
              color: "#FFFFFF",
              paddingVertical: 11,
              paddingHorizontal: 10,
            }}
          >
            Welcome Mom!
          </Card.Title>
          <Card.Divider style={{ backgroundColor: "white" }} />

          <Text
            style={{
              fontFamily: "System",
              fontSize: 25,
              color: "#FFFFFF",
              paddingVertical: 1,
              paddingHorizontal: 10,
            }}
          >
            Explore resources that cater to new moms, expecting moms, and anyone who just wants to learn!
          </Text>

          <Card.Image
            style={{ width: 325, height: 200 }}
            source={require("../../../assets/homepageLogo.png")}
          ></Card.Image>
           
            <Text
              style={{
                fontFamily: "System",
                fontSize: 30,
                color: "white",
                paddingVertical: 15,
                paddingHorizontal: 10,
                fontWeight: "bold",
                textAlign:"center"
              }}
              onPress={this.onpress2} 
            >
              Explore
            </Text> 
              </Card>
        <Text>{"\n"}</Text>

        {/* <Card
          containerStyle={{
            flex: 0.85,
            backgroundColor: "#e4bad4",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
          }}
        >
          <Card.Title
            style={{
              fontFamily: "System",
              fontSize: 20,
              color: "#FFFFFF",
              paddingVertical: 7,
              paddingHorizontal: 10,
            }}
          >
           Today's Touch
          </Card.Title>
          <Card.Divider style={{ backgroundColor: "white" }} />
         
         
            <Text  style={{
                fontFamily: "System",
                fontSize: 20,
                color: "#FFFFFF",
               
            }}>Nutrition for you and your baby!</Text>
            <Card.Image
            style={{ width: 325, height: 150, alignContent:'center' }}
            source={require("../../../assets/todaystouch.png")}
          ></Card.Image>
         
        </Card> */}
        </ScrollView>
      </View>
      
    );
  }
}
