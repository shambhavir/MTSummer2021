/*aka page5*/
import React, { useRef, useState } from "react";
import styles from "./styles";
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Card } from "react-native-elements";

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
            <Text style={{
              fontFamily: "System",
              fontSize: 30,
              color: "#674b80",
              paddingVertical: 8,
              paddingHorizontal: 15,
              fontWeight: "bold",
            }}>First Trimester General Information and{"\n"}Symptoms</Text>

            <Image
              style={{ alignSelf: 'flex-start', justifyContent: 'center', width: 400, height: 150, flexWrap: "wrap" }}
              source={require("../../../assets/care2.png")} /*ADD NEW PICTURE HERE PLEASE*/
            ></Image>

            <Text style={{
              fontFamily: "System",
              fontSize: 20,
              color: "white",
              paddingVertical: 8,
              paddingHorizontal: 15,
              fontWeight: "bold",
              fontStyle: "italic"
            }}>What is the first trimester?</Text>

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
              The first trimester, first twelve weeks or first three months, of your pregnancy is one of the most important stages of pregnancy for you as an expecting mother and your developing baby. Mothers who receive early and consistent prenatal care (PNC) have an increased likelihood of giving birth to a healthy baby.
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
              It is recommended by health care providers that mothers should begin their prenatal care in the first trimester itself. This is because right at the end of the first trimester, the baby will have developed all major organs and main body systems such as respiratory, circulatory, digestive, etc. The earliest stages are the most vulnerable for healthy development of the fetus. {'\n'}{'\n'} If you're trying to get pregnant, pregnancy tests can be taken on a regular basis. If you are not trying to get pregnant or do not have access to a pregnancy test, there are a few symptoms to look for such as: fatgiue, food cravings, frequent urination, morning sickness (nausea and vomiting), bloating (swelling of the abdomen). If you have any concerns, always reach out to your doctor. You can take first stage assesment at a doctor's office and get more information about your possible pregnancy. Lastly, there should also be a thorough evaluation of your and your partner's medical history, a physical exam, and an examination to check the status of the fetus.

            </Text>

            <Text style={{
              fontFamily: "System",
              fontSize: 20,
              color: "#674b80",
              paddingVertical: 8,
              paddingHorizontal: 15,
              fontWeight: "bold",
              fontStyle: "italic"
            }}>Expected Physical and Hormonal Symptoms During this Time
              </Text>
          </FadeInView>

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
              height: 600,
              elevation: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,

              }}
            >
              Swollen/tender breasts, swelling of areolas (dark colored area around nipples), development of small, white bumps around the nipple area, noticeable veins around breast area {'\n'}{'\n'}Fatigue, nausea, frequently vommiting, constipation, weight gain/loss {'\n'}{'\n'} Experiencing mood swings (this may be due to progesterone and estrogen hormones) {'\n'}This is a common indicator of pregnancy is a stop in your menstrual cycle or normal periods{'\n'}{'\n'}Routine changes may occur unexpectedly: bedtime changes, hunger changes, mood changes, etc.

            </Text>

          </Card>
            <Text>{'\n'}</Text>
          <Text style={{
            fontFamily: "System",
            fontSize: 20,
            color: "white",
            paddingVertical: 8,
            paddingHorizontal: 15,
            fontWeight: "bold",
            fontStyle: "italic"
          }}


          >Fetal Development
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
            Step 1: At conception, the sperm fertilizes the egg, and the egg plants into the lining of the uterus for healthy growth. During the early stages of your pregnancy, if you feel any intense pain in the abdomen, share your symptoms with your doctor for further evaluation.  {'\n'} {'\n'} Step 2: At 4 to 5 weeks, the baby's brain, spinal cord, and heart begin to form. {'\n'} {'\n'}
Step 3: At 8 weeks, major organs and external body structures begin to form. At this time, the heart will begin beating with regular rhythm. Arms, legs, fingers, and toes begin to form. The umbilical cord will also be visible at this time. At the end of the 8 weeks, the fetus will be almost 1 inch long, weighing less than ⅛ oz.  {'\n'} {'\n'} Step 4: At 12 weeks, nerves and muscles will be working-- the baby will be able to make a fist. At this milestone, your baby is about 3 inches long, weighing almost one ounce.

            </Text>
          {/* <Text   style={{
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
            </View>  */}
          {/* <Text
   Found this snippet useful? Favorite it!
    /> */}
        </ScrollView>
      </View>
    )
  }
}
