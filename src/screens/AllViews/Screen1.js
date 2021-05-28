import React from 'react'
import {
    Button,
    View,
    SafeAreaView,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import styles from "./styles";
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

export default class Screen1 extends React.Component {
    onpress1 = () => {
        this.props.navigation.navigate("StagePage1", { user });
        //this.componentDidsMount2
      };
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}