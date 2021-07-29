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
          backgroundColor: "#e4bac2",
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
              Interested in Becoming Pregnant
            </Text>

            <Image
              style={{
                alignSelf: "flex-start",
                justifyContent: "center",
                width: 400,
                height: 170,
                flexWrap: "wrap",
              }}
              source={require("../../../assets/precon.png")}
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
              Your preconception health
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
              In planning pregnancy, an important concept to keep in mind is preconception health. Preconception health refers to the health of women and men during their reproductive years. When thinking about reproductive health and plans for conceiving a child, individuals should consider their partner’s health, family history of genetic conditions, pre-existing medical conditions and medications, previous pregnancies, and age when trying to conceive.

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
              What helps and hinders chances of conception?
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
              Tracking a woman’s ovulation cycle can help determine days of highest fertility and increase chances of conceiving.
               Ovulation is the process of a mature egg being released from the ovary. The egg can be fertilized for approximately
                12 to 24 hours. A woman’s ovulation cycle accompanies symptoms such as a slight increase in body temperature and 
                change in vaginal secretions. {"\n"}{"\n"} Actions that can hinder chances of conception include smoking, drinking alcohol, 
                strenuous exercise, and drinking excessive amounts of caffeine. In general, smoking poses negative effects on a person’s overall 
                health and fertility. Drinking alcohol might also decrease fertility. More than five hours a week of exercise is associated with 
                decreased ovulation. Drinking more than 200 milligrams of caffeine a day (that’s about two 5-oz cups of coffee) may reduce fertility.


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
              Your general health and nutrition
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
              When planning for pregnancy, consume a healthy diet and exercise for at least 150 minutes a week. 
              Maintaining the recommended body weight based on body mass index (BMI) is important as individuals 
              who are overweight or underweight may be at risk for serious health problems. Additionally, taking 
              400 micrograms of folic acid a day can help prevent birth defects in the baby’s brain and spine.

              
              
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
              Suggested Vaccines for Conception
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
              }}
            >
              Rubella: 
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
              
            Rubella is an infection that can cause birth defects and can potentially be fatal for the baby.
             If the mother is infected with rubella, she is at risk for a miscarriage or stillbrith. Congenital
              Rubella Syndrome occurs when the developing baby is infected with the disease due to the mother 
              being infected. Babies with this syndrome are at risk to develop birth defects such as deafness, 
              cataracts, heart defects, intellectual disabilities, liver and spleen damage, low birth weight, 
              and skin rash. Less common birth defects include glaucoma, brain damage, thyroid and other hormone 
              problems, and inflammation of the lungs.
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
                Hepatitis B:

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
                
                Hepatitis B is a liver infection that can pass to the baby if the mother is infected. 
                An infected person can spread the infection to another through blood, semen, or other 
                bodily fluids. Modes of transmission include sexual contact and sharing needles or syringes. 
                The infection can either be a short-term or chronic illness. An infected mother can infect her
                 baby and the infant can contract chronic HBV infection.

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
                Chickenpox:
                


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
                Chickenpox is a highly contagious viral infection that can cause complications for the mother 
                and baby if the mother contracts the infection. The most common symptom of chickenpox includes 
                itchy, blister-like rash. If the mother contracts chickenpox, she might also get pneumonia. 
                Complications to the baby include congenital varicella syndrome, which develops during the first 
                20 weeks of pregnancy and can lead to birth defects.


            </Text>
          
          </FadeInView>
        </ScrollView>
      </View>
    );
  }
}
