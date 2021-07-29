/*THIS PAGE IS MISSING PRENATAL CARE*/
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
              Second Trimester 
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
              What is the second trimester?
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
              The second trimester encompasses the 13th through 28th weeks of pregnancy. 
              During this period, morning sickness symptoms generally diminish and women 
              often begin to feel more prepared for the challenges of pregnancy. The fetus 
              has developed all major organ systems and will continue to grow. This trimester 
              is characterized by rapid and noticeable changes, and pregnant mothers should 
               to schedule prenatal visits and bring up any concerns to their healthcare provider. 
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
              Symptoms in the Second Trimester
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
              During this trimester, nausea and fatigue related symptoms generally diminish. 
              The fetus is also undergoing rapid growth and may cause stretch marks and body aches 
              in the back, abdomen, buttocks, and thighs. Some expecting mothers may experience a 
              continuation of heartburn, indigestion, constipation, increased appetite, leukorrhea, 
              and frequent urination.
              {"\n"}{"\n"}
              An exciting symptom, occurring around 18 to 20 weeks, is feeling fetal movement (called quickening)
              like small kicks or movement of the fetus. 

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
              Possible Complications During Pregnancy
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#674b80",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
              }} 
            > 
              A. Hyperemesis Gravidarum (HG): 
              
              
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
              Severe nausea that typically occurs during the first trimester 
              and may continue into the second trimester. Vomiting and reduced appetite causes weight loss and 
              dehydration. HG is significantly more severe than typical morning sickness and results in loss of 
              5% or more of a woman’s pre-pregnancy weight. While this only occurs in about 5 to 2% of pregnancies, if you have
               concerns about experiencing abnormal nausea symptoms at all, always share and discuss with your doctor for possible 
               nausea medication and at home treatment. 
              
              
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#674b80",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
              }}
            >


              B. Gestational Diabetes: 
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
             
            Gestational diabetes mellitus (GDM) is a type of diabetes that occurs during 
             due to changes in hormone levels. This may cause the fetus to grow larger than normal,
              which can complicate a natural delivery and require a Caesarean section. Women who are 
              overweight or have a history of GDM  in previous pregnancies are at higher risk of developing
               it. GDM can be both prevented and treated with a healthy diet and regular exercise, although 
               some women may require medications to control blood sugar levels. Gestational Diabetes during your
                pregnancy is very rare as it only affects 2 to 10% of pregnancies in the United States every year. 
                This is unlikely to occur during your pregnancy, but your healthcare provider can answer any
                 questions or concerns you may have. 

            </Text>
           
          </FadeInView>
        </ScrollView>
      </View>
    );
  }
}