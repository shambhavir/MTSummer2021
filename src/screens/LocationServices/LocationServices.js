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
import MapView from 'react-native-maps';

const user = firebase.auth().currentUser;


export default class LocationServices extends React.Component {
  
  render() {
    return (
      <View
        style={styles.container}
      >
        <MapView style={{flex:1}}
  region={{latitude: 38.890316999999996,
  longitude: -77.1542221,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005}}/>
      </View>

    );
  }
}
