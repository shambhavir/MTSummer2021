/*screen3 button 3*/
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
              Post-Pregnancy Care 
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
              Post-Pregnancy Care 
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
              After giving birth, you will be very busy with your new family member! However, it is important that
              you take care of your mental health and body while nurturing your baby. 
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Breastfeeding
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
              Breastfeeding has numerous health benefits for both the mother and the infant.  Breastfeeding mothers
               have a lower risk of developing ovarian and breast cancers than those who have never breastfed. 
               Similarly, infants that are breastfed have a lower risk of asthma, ear infections, allergies, and 
               SIDS than those that are fed formula. Studies have found that the nutrients in breastmilk are optimal
                for infant nervous system development, strengthen the immune system, and are better absorbed by infants 
                than formula. The American Academy of Pediatrics recommends “exclusively breastfeeding for the first 6
                 months of life, and continuing to breastfeed, as solid foods are introduced, through at least 12 months.”
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
              Some mothers are unable to breastfeed due to Hypoplasia of the breast, which affects the development 
              of the mammary glands and affects milk production. The best alternative is using a baby formula that 
              provides the nutrients that your baby needs to grow. Doctors recommend using organic formulas when 
              possible because they might lack genetically modified ingredients that are usually found in non-organic 
              formulas. In the case that organic formulas are not easily accessible, several formula options remain. 
              Medical professionals recommend going with a standard store brand formula to begin with. Make sure to 
              research the formula you choose to see if it is FDA approved and will provide your baby the necessary
               nutrients for healthy growth. 

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
              Diet and Exercise:
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
              New mothers should strive to eat a balanced diet of fruits, vegetables, grains, protein foods, and 
              dairy every day. Protein-rich foods such as cheese, yogurt, meat, fish, and beans are especially 
              important in recovering from childbirth. New mothers should try to lose weight at a healthy pace, 
              otherwise rapid weight loss can affect breast milk supply. Taking prenatal vitamins and reducing 
              junk food will also help mothers maintain good health. Mothers should keep in mind that any harmful 
              substances they consume can be passed to their infant through breast milk; alcohol, caffeine, seafood
               with high mercury levels, and drug use should be avoided.
              
              
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
              Regular exercise after childbirth has numerous physical and psychological benefits for new mothers. 
              Staying active reduces backaches and constipation, builds muscle tone and strength, improves posture
               and mood, promotes restful sleep, and allows healthy loss of the weight gained during pregnancy. 
               Yoga and walking are low-impact exercises that can be enjoyed with the new baby, friends, or other
                new mothers. New mothers are encouraged to start exercising as soon as a doctor deems it safe.

            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Perinatal Mood Disorders
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
              10-20% of women develop a mood disorder between the time they become pregnant and up to a year after
               giving birth. This can result from changes in hormone levels, a difficult pregnancy or birth, medical 
               problems of the mother or baby, lack of sleep, perceived loss of freedom, or financial problems. A 
               personal or family history of depression also increases risk of perinatal mood disorders. Symptoms 
               may vary depending on the type and severity of the disorder.

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
              Perinatal mood disorders may be treatable. Susceptible women are recommended to attend support groups 
              or contact a psychotherapist. Psychotherapy, or “talk therapy,” teaches healthy coping mechanisms to 
              manage emotions and problems. Selecting a psychotherapist that is a “good fit” is extremely important
               to the recovery process. Medications such as antidepressants may also be prescribed to alleviate 
               symptoms.


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