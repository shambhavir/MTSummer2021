/*need to redo this page*/
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
              Third Trimester {"\n"}General Information
            </Text>

            <Image
              style={{
                alignSelf: "flex-start",
                justifyContent: "center",
                width: 400,
                height: 180,
                flexWrap: "wrap",
              }}
              source={require("../../../assets/covid5.png")}
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
              What is the Third Trimester?{"\n"}
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
              The third trimester of pregnancy begins around week 27 until the end of the pregnancy, or months 7-9. At this time, your healthcare provider may suggest screening for any health conditions and may conduct prenatal tests. A few symptoms experienced during this trimester are Braxton Hicks contractions, backaches, shortness of breath, varicose veins, and frequent urination. Maintaining recommended body weight and consuming enough calories is important at this stage. The baby continues to develop and may assume the head-down position for birth.
            </Text>

            <Card
              containerStyle={{
                flex: 1.3,
                backgroundColor: "#674b80",
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,
                width: 375,
                height: 700,
                elevation: 12,
              }}
            >
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 20,
                  color: "white",
                  paddingVertical: 8,
                  paddingHorizontal: 13,
                  fontWeight: "bold",
                }}
              >
                Symptoms

                </Text>
              <View style={{ flexDirection: "center" }}>

                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
                  Individuals may experience Braxton Hicks contractions, backaches, shortness of breath, heartburn, frequent urination, and tender breasts. In particular, Braxton Hicks contractions are irregular and become more frequent and stronger as the pregnancy comes to an end.{'\n'}{'\n'}They may also experience spider veins that appear as red-purplish veins that will fade after delivery, varicose veins that are swollen veins on legs, or hemorrhoids that appear on the rectal area. For swollen vein relief, elevate legs, include fiber in diet, and drink fluids. To relieve pain from hemorrhoids, soak in a warm tub or use witch hazel pads.

                </Text>
              </View>
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
                height: 500,
                elevation: 12,
              }}
            >
              <View style={{ flexDirection: "center" }}>
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
                  Visiting your Healthcare Provider

                </Text>


                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
                  Regular visits with your healthcare provider and prenatal checkups are suggested to ensure your health and your baby’s health. A few screenings your healthcare provider may recommend include screenings for gestational diabetes, iron deficiency anemia, and Group B strep. The screenings will provide additional information about your health and steps to take depending on your condition.
                </Text>

              </View>


            </Card>

            <Card
              containerStyle={{
                flex: 1.3,
                backgroundColor: "#674b80",
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,
                width: 375,
                height: 900,
                elevation: 12,
              }}
            >
              <View style={{ flexDirection: "center" }}>
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
                  Health Conditions 

                </Text>
               
              
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
                 
                Gestational diabetes is a type of diabetes that can develop during pregnancy. Similar to other types of diabetes, gestational diabetes causes high blood sugar, which can impact both the mother’s health and the baby’s health.{'\n'}{'\n'}If the mother has gestational diabetes, she is at risk of getting Type 2 diabetes in the future. Eating healthy foods, staying active, and maintaining recommended weight during pregnancy may reduce risk of developing gestational diabetes.

                </Text>
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
                 
                 Iron deficiency anemia occurs when the body’s red blood cells do not provide enough oxygen to the body’s tissues. Symptoms include fatigue and shortness of breath. Complications that can arise during pregnancy are premature births and low birth weight in babies. Iron deficiency anemia can be prevented by taking iron supplements and eating iron rich foods.

                </Text>
              </View>


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
                height: 1600,
                elevation: 12,
              }}
            >
              <View style={{ flexDirection: "center" }}>
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
                 Prenatal Tests


                </Text>


                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
                 The Biophysical Profile (BPP) is taken during the third trimester and includes an ultrasound and a nonstress test to monitor the baby’s health. Using these tests, the health care provider can monitor the baby’s breathing, movement, muscle tone, heart rate, and amount of amniotic fluid.
                </Text>
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
              The Glucose Challenge Screening is taken at 26 to 28 weeks of the pregnancy to determine if the mother is at risk for gestational diabetes. During this test, the mother consumes a special sugary drink and a blood sample is taken an hour later.{'\n'}{'\n'}The health care provider taking the test may recommend a glucose tolerance test depending on the results. The glucose tolerance test includes eating a special diet prior to the test, then not eating or drinking anything except water for 14 hours, and finally consuming a sugary drink and having blood tested every hour for 3 hours.

                </Text>
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
            The Group B streptococcus infection test is done near the end of the pregnancy, at roughly 36 to 37 weeks. The purpose of this test is to identify bacteria that can cause pneumonia or an infection to the newborn. During this test, a swab is taken from the vagina and rectum. The cells from the swab are then tested for bacteria that may pose a threat. 

                </Text>
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
            The Nonstress Test is administered roughly 28 weeks in pregnancy to determine if the fetus is experiencing any type of stress. Most of the time, this test is only used if the baby is at risk. During this noninvasive test, the baby’s heart rate is measured by a belt placed on the mother’s belly. The baby’s heart rate will provide information about the baby’s oxygen supply and if further testing is needed.

                </Text>
              </View>


            </Card>
            <Card
              containerStyle={{
                flex: 1.3,
                backgroundColor: "#674b80",
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,
                width: 375,
                height: 600,
                elevation: 12,
              }}
            >
              <Text
                style={{
                  fontFamily: "System",
                  fontSize: 20,
                  color: "white",
                  paddingVertical: 8,
                  paddingHorizontal: 13,
                  fontWeight: "bold",
                }}
              >
                Baby’s Development

                </Text>
              <View style={{ flexDirection: "center" }}>

                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
                  The third trimester consists of approximately the 29th to 40th week of pregnancy. At this time, the baby’s bones are formed, weight gain is increasing, and the baby is slowly getting into position for delivery.{'\n'}{'\n'}During roughly the 39th week, the baby is full-term and is in the head down position. Although healthy babies can differ in size and weight, the average weight when a baby is delivered is approximately 6 pounds 2 ounces to 9 pounds 2 ounces with an average height of  19 to 21 inches.

                </Text>
              </View>
            </Card>
          </FadeInView>

        

        </ScrollView>
      </View>
    );
  }
}