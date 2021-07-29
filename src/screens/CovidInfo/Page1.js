import React, { useRef, useState } from "react";
import styles from "./styles";
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
const user = firebase.auth().currentUser;
var infostorage = [];
infostorage[0] = "Page1"
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
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}
export default class Page1 extends React.Component {
    updateInfo1 = () => {
        const keys = []
        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const favRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "FavoritesResource1")
        const path = favRef.toString();
        favRef.push({
            testpush: infostorage[0]
        })

    }
 
    render() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <FadeInView>
           
            <Text    style={{
                fontFamily: "System",
                fontSize: 30,
                color: "#674b80",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
              }}>What are the Risks to{"\n"}Pregnant Women?</Text>
             
                <Image
                  style={{  alignSelf: 'flex-start',justifyContent: 'center', width: 400, height: 150, flexWrap: "wrap" }}
                  source={require("../../../assets/care2.png")}
                ></Image>
                
              {/* <AntDesign name="hearto" size={24} style={{color: "white", paddingHorizontal: 40, paddingVertical: 8}} onPress={this.updateInfo1} /> */}
              {/* <Text style={{
                fontFamily: "System",
                fontSize: 30,
                paddingVertical: 8,
                paddingHorizontal: 40,
                fontWeight: "bold",
              }}  onPress={this.updateInfo1}>❤️</Text> */}
               {/* <View style={{ flexDirection: "row" }}> */}
               <Text    style={{
                fontFamily: "System",
                fontSize: 20,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
                fontStyle:"italic"
              }}>Why do pregnant women need{"\n"}to be more careful?</Text>
             
              {/* </View> */}
               <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#F8F4FF",
                paddingVertical: 8,
                paddingHorizontal: 15,
               
              }}
            >
              Pregnant women must remain especially vigilant with regard to COVID-19 as multiple studies have found that infected pregnant women are potentially at an increased risk for adverse birth outcomes.
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
              Nearly a third (30%) of pregnant women who become infected with COVID-19 need to be hospitalized. However, these are only short-term impacts as the full impact of COVID-19 on pregnant women is unknown. There is still not enough research to know if COVID-19 can be passed from mother to fetus (during pregnancy), or mother to infant (during delivery). Since COVID-19 is a novel virus, it will be years before we will know how the virus impacts people in the long run.

            </Text>
            
            <Text    style={{
                fontFamily: "System",
                fontSize: 20,
                color: "#674b80",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
                fontStyle:"italic"
              }}>Are Pregnant Women More{'\n'}Susceptible to COVID-19?
              </Text>
              </FadeInView>
              <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#674b80",
                paddingVertical: 8,
                paddingHorizontal: 15,
               
              }}
            >
              While there is no evidence that pregnant women are more susceptible to COVID-19, pregnant women are more susceptible to respiratory pathogens. The virus causing COVID-19, SARS-CoV-2, is a respiratory pathogen. A respiratory pathogen is a virus, bacteria, or other organism that causes illness to someone’s respiratory system: the parts of the body used for breathing.{'\n'}{'\n'}Thus, there is the possibility that pregnant women may be more at-risk of contracting COVID-19. More research is needed to ensure proper protection and safety for the mother and child. It is important to remember that pregnant women are naturally at a higher risk for respiratory infections, so to follow social distancing and mask-wearing as much as possible.

            </Text>
            <Text    style={{
                fontFamily: "System",
                fontSize: 20,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
                fontStyle:"italic"
            }}>Pregnant Women May Experience{'\n'}Different Symptoms If Infected
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
              Studies have discovered that pregnant women may experience different symptoms if infected with COVID-19. It is also important to mention that this only applies to symptomatic pregnant women. A study found that pregnant women did not report headaches, muscle aches, fever, chills, and diarrhea nearly as much as non-pregnant women did. However, both pregnant and non-pregnant women had similar rates of coughing (~50%) and shortness of breath (30%). Thus, pregnant women should remain cautious and get tested even if they don't display all the symptoms common to COVID-19.


            </Text>
           
            {/* <Text
   Found this snippet useful? Favorite it!
    /> */}
              </ScrollView>
        </View>
    )
    }
}