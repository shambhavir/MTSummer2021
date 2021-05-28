import React, { useRef, useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-elements";

const user = firebase.auth().currentUser;
var infostorage = [];
infostorage[0] = "Page1";
import {
  Animated,
  Button,
  Image,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
export default class Page1 extends React.Component {
  updateInfo1 = () => {
    const keys = [];
    const userRef = firebase.database().ref("users");
    const uidRef = firebase
      .database()
      .ref("users/" + firebase.auth().currentUser.uid);
    const favRef = firebase
      .database()
      .ref(
        "users/" + firebase.auth().currentUser.uid + "/" + "FavoritesResource1"
      );
    const path = favRef.toString();
    favRef.push({
      testpush: infostorage[0],
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#c197d2",
        }}
      >
        <ScrollView>
        <Text
              style={{
                fontFamily: "System",
                fontSize: 30,
                color: "#674b80",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
              }}
            >
              Mom's Mental Health{"\n"}During the Pandemic
            </Text>
            <Image
              style={{
                alignSelf: "flex-start",
                justifyContent: "center",
                width: 390,
                height: 180,
                flexWrap: "wrap",
              }}
              source={require("../../../assets/meditate.png")}
            ></Image>
             <Text
              style={{
                fontFamily: "System",
                fontSize: 20,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Pregnancy, Mental Health, and COVID-1
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#F8F4FF",
                paddingVertical: 8,
                paddingHorizontal: 15,
              }}
            >
              The COVID-19 pandemic adds yet another source of stress and anxiety for pregnant women. Telehealth has grown increasingly popular, and this is especially important for pregnant women as daily stress due to the pandemic leads to higher stress and anxiety than non-pregnant women. Stressors can be a variety of things such as increased isolation, difficulty obtaining medical care, and more. 


            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#F8F4FF",
                paddingVertical: 8,
                paddingHorizontal: 15,
              }}
            >
            Additionally, telehealth appointments can be used to lower the chance of exposure and infection for pregnant women. The increasing prevalence of telehealth can help assuage those worries, whether it be for appointments that don't necessarily need to be in-person, or for mental health help. Pregnant women can research the availability and financial costs of telehealth visits by calling their doctor and calling their health insurance company.
            </Text>
             <Text
              style={{
                fontFamily: "System",
                fontSize: 20,
                color: "#674b80",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Taking Care of Your Emotional, Mental, and Social Health
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#674b80",
                paddingVertical: 8,
                paddingHorizontal: 15,
              }}
            >
              Pregnancy and motherhood can already take a toll on a new mother’s emotional wellbeing and the COVID-19 pandemic welcomes strong emotions of its own. If you’re experiencing symptoms of depression after pregnancy, express your concerns to your healthcare provider immediately. 

            </Text>
            <View style={{ justiftyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "System",
              fontSize: 18,
              color: "#674b80",
              paddingVertical: 8,
              paddingHorizontal: 8,
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            Found this snippet useful? Favorite it!
          </Text>
            <AntDesign
              name="hearto"
              size={28}
              style={{
                color: "#674b80",
                paddingHorizontal: 40,
                paddingVertical: 8,
              }}
              onPress={this.updateInfo1}
            />
            <Text>{"\n"}</Text>
          </View>
           
        </ScrollView>
      </View>
    );
  }
}
