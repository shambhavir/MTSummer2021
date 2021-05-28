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
export default class Page2 extends React.Component {
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
          backgroundColor: "#a0829b",
        }}
      >
        <ScrollView>
          <FadeInView>
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
              Caring for Newborns in the Age of COVID-19
            </Text>

            <Image
              style={{
                alignSelf: "flex-start",
                justifyContent: "center",
                width: 400,
                height: 170,
                flexWrap: "wrap",
              }}
              source={require("../../../assets/newborn.png")}
            ></Image>

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
              Caring for Newborns{"\n"}as a COVID-19 Positive Mother
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
              Current studies suggest that newborns contracting COVID-19 from
              their mothers while they were pregnant is not very common. Most
              newborns that tested positive for COVID-19 were either
              asymptomatic or had mild to no symptoms with fewer reports of
              newborns having severe symptoms.
            </Text>
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
              Taking Precautions in{"\n"}the Hospital Room
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
              }}
            >
              It’s important to discuss with your healthcare provider the risks
              and benefits of staying in the same room as your newborn as a
              COVID-19 positive mother. While the risk of passing COVID-19 to
              the newborn remains, sharing the hospital room with your newborn
              provides the advantage of being able to breastfeed and form the
              mother-baby bond. Several steps can be taken to reduce the risk of
              spreading the virus to your newborn:
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontStyle: "italic",
              }}
            >
              1. Wash your hands with soap and water for at least 20 seconds
              when handling the newborn
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontStyle: "italic",
              }}
            >
              2. Wear a mask within six feet of the newborn
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontStyle: "italic",
              }}
            >
              3. Try to keep at least six feet away from the newborn as much as
              possible
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontStyle: "italic",
              }}
            >
              4. Discuss other options with your healthcare to ensure your
              newborn’s safety (physical barrier, incubator, etc)
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
              Actions to take at Home After Testing Positive for COVID-19
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
              If you have tested positive for COVID-19, isolate yourself from
              the household and take precaution for the entire isolation period.
              Wear a mask in shared spaces and maintain at least six feet of
              distance between healthy household members and the newborn. 
              
              
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

If
              possible, have a healthy caretaker take care of the newborn. The
              caretaker should also take precaution by washing their hands
              before caring for the newborn, wearing a mask within six feet, and
              maintaining distance when possible. If you tested positive for
              COVID-19 and experienced symptoms, the isolation period will end
              after ten days after you first had symptoms, you’ve experienced 24
              hours with no fever without medication, and you’re experiencing
              significantly improved symptoms. 
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
If you were asymptomatic, the
              isolation period ends 10 days after your initial COVID-19 positive
              test. Once your isolation period is over, it is unlikely that you
              will pass the virus to the newborn or other family members.
              Continue to wash your hands when handling the newborn, however,
              isolation period precautions are no longer necessary.
            </Text>
            <Text   style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#674b80",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
                fontStyle:"italic"

               
              }}>Found this snippet useful? Favorite it!</Text>
              <View style={{justiftyContent:"center", alignItems:"center"}}>
            <AntDesign name="hearto" size={28} style={{color: "#674b80", paddingHorizontal: 40, paddingVertical: 8}} onPress={this.updateInfo1} />
            <Text>{'\n'}</Text>
            </View> 
          </FadeInView>
        </ScrollView>
      </View>
    );
  }
}
