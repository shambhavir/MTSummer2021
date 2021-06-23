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

export default class LocationServices extends React.Component {
  
  render() {
    return (
      <View
        style={styles.container}
      >
        
      </View>

    );
  }
}
