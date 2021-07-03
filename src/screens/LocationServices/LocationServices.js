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
import Expo from "expo"; 
import MapView from 'react-native-maps';
import { Location } from 'expo-location';
//import * as Permissions from 'expo-permissions';

const user = firebase.auth().currentUser;


export default class LocationServices extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      mapRegion: null, 
      location: {},
      hasLocationPermissions: false, 
      locationResult: null, 
      errorMessage: ''
    };
  }
  componentDidMount() {
    this._getLocation(); 
  }
  // _handleMapRegionChange = mapRegion => {
  //   console.log(mapRegion); 
  //   this.setState({mapRegion}); 
  // }; 

  _getLocation = async () => {
    const { status } = await Location.requestPermissionsAsync(); 
    if (status != 'granted') {
      //console.log('PERMISSION NOT GRANTED');
      this.setState({
        locationResult: 'PERMISSION NOT GRANTED'
      }); 
    }
    const userLocation = await Location.getCurrentPositionAsync(); 
    this.setState({
      location: userLocation
    })
    console.log(userLocation)
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <Text>{JSON.stringify(this.state.location)}</Text>
        <MapView style={{ flex: 1 }}
          region={{
            latitude: 38.890316999999996,
            longitude: -77.1542221,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }} />
      </View>
      
    );
  }
}