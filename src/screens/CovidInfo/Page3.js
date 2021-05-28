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
              COVID-19 Vaccinations{"\n"}and Pregnant Women
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
              Are the COVID-19 Vaccines Safe{"\n"}for Me to Receive?
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
              The COVID-19 vaccines have been approved by the FDA and authorized
              for emergency use by the US government. All vaccines have
              undergone very strict testing and abide by regulation standards,
              even more so than some other vaccines that have been approved for
              public use. To find vaccination locations near you:
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#F8F4FF",
                paddingVertical: 8,
                fontWeight: "bold",
                paddingHorizontal: 15,
              }}
            >
              1. Visit vaccines.gov
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#F8F4FF",
                paddingVertical: 8,
                fontWeight: "bold",
                paddingHorizontal: 15,
              }}
            >
              2. Text your ZIP code to 438829
            </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#F8F4FF",
                paddingVertical: 8,
                fontWeight: "bold",
                paddingHorizontal: 15,
              }}
            >
              3. Call 1(800)232-0233
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
              What are the Different{"\n"}Types of Vaccines?
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
            Pregnant Women May Experience{"\n"}Different Symptoms If Infected
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
            Studies have discovered that pregnant women may experience different
            symptoms if infected with COVID-19. It is also important to mention
            that this only applies to symptomatic pregnant women. A study found
            that pregnant women did not report headaches, muscle aches, fever,
            chills, and diarrhea nearly as much as non-pregnant women did.
            However, both pregnant and non-pregnant women had similar rates of
            coughing (~50%) and shortness of breath (30%). Thus, pregnant women
            should remain cautious and get tested even if they don't display all
            the symptoms common to COVID-19.
          </Text>
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
          <View style={{ justiftyContent: "center", alignItems: "center" }}>
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
