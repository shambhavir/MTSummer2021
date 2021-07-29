/*pregnancy = screen 3 button 2*/
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
              During your pregnancy
            </Text>

            <Image
              style={{
                alignSelf: "flex-start",
                justifyContent: "center",
                width: 400,
                height: 170,
                flexWrap: "wrap",
              }}
              source={require("../../../assets/duringpreg.png")}
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
              During your Pregnancy
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
              There are many factors that will affect your pregnancy such as your nutrition, mental and physical health, 
              and your sleep schedule. It is important to follow a routine or schedule to ensure a smooth pregnancy. 
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
              Mental Health
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
              Perinatal Mood Disorders are one type of mood disorder that may be experienced during pregnancy and may 
              seriously affect behavior and mood. The exact causes are unknown. There are many options available to
               discuss and diagnose mood disorders. Perinatal Mood Disorders are one type of mood disorder that may be
                experienced during pregnancy and may seriously affect behavior and mood. The exact causes are unknown. 
                There are many options available to discuss and diagnose mood disorders. 


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
              Getting help can take the form of three different forms: Support groups, psychotherapy, and medication.
              It is important to know that you are not alone in this endeavor, and may access many resources. 



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
              A. Support groups include women with similar problems who meet with trained professionals who can 
              listen with empathy and compassion

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
              B. Psychotherapy is like “talk therapy”, where you may be able to meet with Psychiatrists, Psychologists,
               Advanced Practice Nurses, or Social Workers
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
              C. Medication includes antidepressants that may be prescribed. Talk with your OB/GYN or family 
              physician to determine if this is the right option for you.
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
              Physical Health
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
              Drug and alcohol use while pregnant is strongly discouraged due to the developmental effects it has 
              on a child, especially within the first trimester of pregnancy. Tobacco, alcohol, and other controlled 
              substances can have adverse effects on the baby. This includes recreational marijuana use as well. 
              In fact, the use of tobacco and marijuana by pregnant women is associated with lower birth weight, 
              small size for gestational age, small head circumference, and other birth defects in their infants.

              
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
              Smoking during pregnancy is the single most preventable cause of illness and death among mothers and infants. 
              Click here to learn more about the dangers of smoking and find help to quit. Leading medical bodies strongly 
              warn expecting mothers against drinking alcohol, which can cause birth defects and complications. Marijuana
             use during pregnancy can also be harmful to your baby’s health. The chemicals in marijuana (in particular,
              tetrahydrocannabinol or THC) pass through your system to your baby and can harm your baby’s development.  
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
              Diet/Nutrition
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
              A. Food portions and your routine may change. You may need to develop a new routine of smaller meal
               sizes, and more frequent meals when pregnant-- food portions may be smaller for the comfort of the 
               mother to accommodate for the baby.


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
              B. High caffeine consumption during pregnancy is linked to low birth weight of neonates and higher 
              chances of pregnancy loss. It is recommended to drink no more than 200 mg of caffeine a day.
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
              C.Necessary vitamins/minerals/nutrients include folic acid. Folic acid is a B vitamin that can help
               prevent major birth defects. Take a vitamin with 400 micrograms (mcg) of folic acid every day, 
               before and during pregnancy.

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
              Sleep and Exercise
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
              There is a link between decreased sleep and depressed mood. There is increased daytime sleepiness
               during the first trimester, and during the third trimester because of interrupted sleep. Medical
                professionals suggest laying on your left side while sleeping for better circulation. 

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
              Exercise is also really important during pregnancy. Pregnant or postpartum women should do at least 
              150 minutes (for example, 30 minutes a day, five days a week) of moderate-intensity aerobic physical
               activity, such as brisk walking, per week during and after their pregnancy. It is best to spread 
               this activity throughout the week.
            </Text>
            
            
            
          </FadeInView>
        </ScrollView>
      </View>
    );
  }
}