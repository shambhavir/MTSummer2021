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
              The third trimester of pregnancy begins around week 27 until the end of the pregnancy, or months 7-9.
               At this time, your healthcare provider may suggest screening for any health conditions and may 
               conduct prenatal tests. A few symptoms experienced during this trimester are Braxton Hicks contractions, 
               backaches, shortness of breath, varicose veins, and frequent urination. Maintaining recommended body weight 
               and consuming enough calories is important at this stage. The baby continues to develop and may assume the 
               head-down position for birth.
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
              Symptoms
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
                height: 380,
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
                  Pfizer-Biontech Vaccine
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
                  Dosage: 2 doses, 3 weeks apart
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
                  Age Requirement: 12+
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
                  Injection site reactions: pain, redness, swelling
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
                  General side effects: tiredness, headache, muscle and/or joint
                  pain, chills, fever, nausea, feeling unwell, swollen lymph
                  nodes (lymphadenopathy)
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
                height: 380,
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
                  Moderna Vaccine
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
                  Dosage: 2 doses, 4 weeks apart
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
                  Age Requirement: 18+
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
                  Injection site reactions: pain, tenderness/swelling in the same arm of the injection

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
                  General side effects: fatigue, headache, muscle pain, joint pain, chills, nausea and vomiting, and fever

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
                height: 380,
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
                  Johnson & Johnson Vaccine
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
                  Dosage: 1 dose
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
                  Age Requirement: 18+
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
                  Injection site reactions: pain, redness of the skin and swelling
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
                  General side effects: headache, feeling very tired, muscle aches, nausea, and fever
                </Text>
              </View>

              
            </Card>
          </FadeInView>

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
            Should I be Concerned About Any Side Effects?
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
            You can see a list of the possible side effects associated with each vaccine in the cards above. Clicking the link to each vaccine will bring you to a file with more information about each vaccine, provided by the FDA. Here are some important terms to know when discussing the COVID-19 vaccine.
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
            While symptoms may vary for each individual, it is important to consider the risks and rewards for your own body (for example, the risk of these vaccine symptoms compared to the reward of being protected from COVID-19). If you are concerned about side effects, be sure to consult your doctor before moving forward.

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
            Should I Talk to My Doctor About Receiving the Vaccine? 
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
           You should always consult your healthcare provider about major health decisions. For the COVID-19 Vaccine, be sure to talk to your doctor before receiving it if you: 

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
           - Have allergies  

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
           - Have a bleeding disorder or on a blood thinner   

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
           - Are immunocompromised or take a medicine that affects your immune system   

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
           - Are pregnant or plan to become pregnant

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
           - Are breastfeeding 

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
            Do I Have to Pay to Receive the Vaccine?
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
          All individuals may receive the vaccine for free, regardless of whether or not they have insurance. Healthcare providers are not allowed to charge recipients or bill their balance. For individuals with Medicare Part B or Medicare Advantage Plan, there is no copayment, coinsurance or deductible for the COVID-19 vaccine. If you are covered by NJ FamilyCare (Medicaid or CHIP), the vaccine is also given without a copay. In other words, you will not have to pay any amount in order to get the COVID-19 vaccine. 


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
            Is the Vaccine Actually Effective Against COVID-19? 
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
         Each type of vaccine has been proven to prevent recipients from getting COVID-19. However, the duration of protection, or how long this prevention lasts, is still unknown. Even if individuals are immune to the virus, they may still be carriers, or able to spread the illness to others. After receiving the vaccine, individuals must still wear a mask, wash their hands, and take other precautions against possibly infecting others with COVID-19.

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
Current Thoughts on the Safety of the Vaccine for Pregnant Women
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
         From the CDC: “Based on how mRNA vaccines work, experts believe they are unlikely to pose a specific risk for people who are pregnant.” Even though there is no conclusive data currently available, scientists believe that the vaccine should be safe for pregnant women. Current COVID-19 vaccines are mRNA vaccines. These types of vaccines do not carry the live COVID-19 virus and expecting mothers cannot contract the virus or pass it to their child solely through getting vaccinated. 
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
        Our bodies break down the mRNA in the vaccine within hours/days, which means that it is unlikely that these particles will reach the placenta and affect the child in any way. Of course, these thoughts are simply speculation because no vaccine trials involving pregnant women have concluded yet. If you live in a setting where you are particularly susceptible to COVID, such as a group home, or are particularly at risk for complications, consider speaking to a health professional to weigh your options.
          </Text>
          <View style={{ justiftyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "System",
              fontSize: 18,
              color: "#674b80",
              paddingVertical: 8,
              paddingHorizontal: 15,
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