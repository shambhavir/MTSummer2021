import React from 'react'
import { Card } from "react-native-elements";
import {
  Button,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
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
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


export default function StagePage2(props) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#a0829b'
    }}>
      <ScrollView>
        <Text style={{
          fontFamily: "System",
          fontSize: 28,
          color: "#ebdef0",
          paddingVertical: 8,
          paddingHorizontal: 15,
          fontWeight: "bold",
        }}>Important Information for Your Second Trimester</Text>

        <Image
          style={{
            alignSelf: "flex-start",
            justifyContent: "center",
            width: 400,
            height: 190,
            flexWrap: "wrap",
          }}
          source={require("../../../assets/info2.png")}
        ></Image>
        <Text style={{
          fontFamily: "System",
          fontSize: 20,
          color: "#ebdef0",
          paddingVertical: 8,
          paddingHorizontal: 15,
          fontWeight: "bold",
          fontStyle: "italic"
        }}>What should you expect{'\n'}during this period?</Text>
        <Text
          style={{
            fontFamily: "System",
            fontSize: 18,
            color: "#ebdef0",
            paddingVertical: 8,
            paddingHorizontal: 15,

          }}
        >
          The second trimester encompasses the thirteenth through twenty-eighth weeks of pregnancy. During this period, morning sickness symptoms generally diminish and women often begin to feel more prepared for the challenges of pregnancy. The fetus has developed all major organ systems and will continue to grow.

            </Text>
        <Text
          style={{
            fontFamily: "System",
            fontSize: 18,
            color: "#ebdef0",
            paddingVertical: 8,
            paddingHorizontal: 15,

          }}
        >
          This trimester is characterized by rapid and noticeable changes, and pregnant women should continue to schedule prenatal visits and bring up any concerns to their healthcare provider. If a fetus is born prematurely at the end of 24 weeks, they may still survive in a neonatal intensive care unit.
            </Text>
        <Text style={{
          fontFamily: "System",
          fontSize: 20,
          color: "#674b80",
          paddingVertical: 8,
          paddingHorizontal: 15,
          fontWeight: "bold",
          fontStyle: "italic"
        }}>Symptoms</Text>
        <Text
          style={{
            fontFamily: "System",
            fontSize: 18,
            color: "#674b80",
            paddingVertical: 8,
            paddingHorizontal: 15,

          }}
        >
          The second trimester is considered the most physically enjoyable period for most women. Nausea and fatigue generally diminish, but rapid growth of the fetus will cause stretch marks and body aches in the back, abdomen, buttocks, and thighs. Pregnant women usually start to feel fetal movement, called quickening, around 18 to 20 weeks.
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
          Women may experience a continuation of heartburn, indigestion, constipation, increased appetite, leukorrhea (white-colored discharge), and frequent urination. Increased total blood volume may cause compression of the median nerve, causing pain or numbness in the hands (carpal tunnel syndrome). The increase in estrogen and progesterone levels may cause spongier gums and patches of darker skin on the face, which is often called the “mask of pregnancy.”
              </Text>

        <Text style={{
          fontFamily: "System",
          fontSize: 20,
          color: "#ebdef0",
          paddingVertical: 8,
          paddingHorizontal: 15,
          fontWeight: "bold",
          fontStyle: "italic"
        }}>Possible Complications{'\n'}(Throughout Pregnancy)
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
            height: 2010,
            elevation: 12,
          }}
        >
          <View style={{ flexDirection: "center" }}>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#ebdef0",
                paddingVertical: 8,
                paddingHorizontal: 15,

              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Hyperemesis Gravidarum (HG)</Text> is severe nausea that typically occurs during the first trimester and may continue into the second trimester. The vomiting and reduced appetite causes weight loss and dehydration.

              </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#ebdef0",
                paddingVertical: 8,
                paddingHorizontal: 15,

              }}
            >
              HG is significantly more severe than typical morning sickness and results in weight loss of 5 percent or more of a woman’s pre-pregnancy weight. This condition can also can lead to a nutrient deficiency for both a woman and the fetus and cause further complications. Although HG is not preventable, it can be treated with a strict diet of bland foods and fluids or nausea medication if necessary.
              </Text>

            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#ebdef0",
                paddingVertical: 8,
                paddingHorizontal: 15,

              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Preeclampsia </Text>
             is characterized by high blood pressure and signs of damage to another organ system, usually the liver and kidneys. Common signs include excess protein in urine, severe headaches, vision changes, and upper abdominal pain.

              </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#ebdef0",
                paddingVertical: 8,
                paddingHorizontal: 15,

              }}
            >
              During prenatal care visits, providers will check blood pressure and test for kidney and liver function to watch for signs or preeclampsia. Preeclampsia only ceases after the baby is born, so mothers and physicians may face a difficult decision regarding delivery time; if the baby is delivered too early, he/she can be at increased risk for health problems.
              </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#ebdef0",
                paddingVertical: 8,
                paddingHorizontal: 15,

              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Gestational diabetes mellitus (GDM) </Text>
          Gestational diabetes mellitus (GDM) is a type of diabetes that occurs during pregnancy due to changes in hormone levels. This may cause the fetus to grow larger than normal, which can complicate a natural delivery and require a cesarean section.
              </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#ebdef0",
                paddingVertical: 8,
                paddingHorizontal: 15,

              }}
            >

              Women who are overweight or have a history of GDM  in previous pregnancies are at higher risk of developing it. GDM can be both prevented and treated with a healthy diet and regular exercise, although some women may require medications to control blood sugar levels.
              </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#ebdef0",
                paddingVertical: 8,
                paddingHorizontal: 15,

              }}
            >
              While the placenta normally attaches to the upper part of the uterus, it either partially or completely covers the cervix in<Text style={{ fontWeight: 'bold' }}>placenta previa</Text>. The main symptom is vaginal bleeding with no accompanying cramping or other pain, although some women do not experience any symptoms.
              </Text>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "#ebdef0",
                paddingVertical: 8,
                paddingHorizontal: 15,

              }}
            >
              Physicians can only confirm a diagnosis with an ultrasound or physical exam. Women that have previously undergone uterine surgery or have fibroids are at higher risk of developing placenta previa. Women with placenta previa will require a cesarean section that is usually scheduled two to four weeks before their due date.
              </Text>

          </View>
          <Text
            style={{
              fontFamily: "System",
              fontSize: 18,
              color: "#ebdef0",
              paddingVertical: 8,
              paddingHorizontal: 15,
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            Check out our custom visualizer for more information!
          </Text>

        </Card>

        <Text>{'\n'}</Text>

        <Text style={{
          fontFamily: "System",
          fontSize: 20,
          color: "#674b80",
          paddingVertical: 8,
          paddingHorizontal: 15,
          fontWeight: "bold",
          fontStyle: "italic"
        }}>Fetus Development</Text>
        <Text
          style={{
            fontFamily: "System",
            fontSize: 18,
            color: "#674b80",
            paddingVertical: 8,
            paddingHorizontal: 15,

          }}
        >
          By the second trimester, all major organs and systems have formed in the fetus and it continues to grow in length and weight. The fetus will be able to kick, move, turn from side to side, and hear the mother’s voice. A creamy white substance, known as vernix caseosa, begins to develop on the fetus and helps to protect the fetal skin. During this time, the fingers and toes separate and the placenta fully develops. By the end of this trimester, the fetus will be about 13 to 16 inches long and weigh about 2 to 3 pounds.
            </Text>

        {/* <View style={{ justiftyContent: "center", alignItems: "center" }}>
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
              // onPress={this.updateInfo1}
            />
            <Text>{"\n"}</Text>
          </View> */}

      </ScrollView>
    </View>
  )
}