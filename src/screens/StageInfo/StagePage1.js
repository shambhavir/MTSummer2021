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


export default function StagePage1(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{
          fontFamily: "System",
          fontSize: 30,
          color: "#674b80",
          paddingVertical: 8,
          paddingHorizontal: 15,
          fontWeight: "bold",
        }}>What You Need to Know in Your First Trimester</Text>

        <Image
          style={{
            alignSelf: "flex-start",
            justifyContent: "center",
            width: 390,
            height: 190,
            flexWrap: "wrap",
          }}
          source={require("../../../assets/stage1.png")}
        ></Image>
         <Text style={{
          fontFamily: "System",
          fontSize: 20,
          color: "#674b80",
          paddingVertical: 8,
          paddingHorizontal: 15,
          fontWeight: "bold",
          fontStyle: "italic"
        }}>Pregnancy Education: First Signs and Assessment</Text>
         <Text
          style={{
            fontFamily: "System",
            fontSize: 18,
            color: "#674b80",
            paddingVertical: 8,
            paddingHorizontal: 15,

          }}
        >
          You may experience the following changes in the first trimester: extreme tiredness, swollen or tender breasts, swelling of the areolas (the dark colored area around the nipples), and development of small, white bumps . Additionally, your veins may become more noticeable around your breasts, you might have to urinate frequently (due to your uterus exerting more pressure on your bladder), and you may experience mood swings (due to surges in your progesterone and estrogen hormones).
            </Text>
        <Text style={{
          fontFamily: "System",
          fontSize: 20,
          color: "#674b80",
          paddingVertical: 8,
          paddingHorizontal: 15,
          fontWeight: "bold",
          fontStyle: "italic"
        }}>What should you expect during{'\n'}this period?</Text>
        <Text
          style={{
            fontFamily: "System",
            fontSize: 18,
            color: "#674b80",
            paddingVertical: 8,
            paddingHorizontal: 15,

          }}
        >
          You may experience the following changes in the first trimester: extreme tiredness, swollen or tender breasts, swelling of the areolas (the dark colored area around the nipples), and development of small, white bumps . Additionally, your veins may become more noticeable around your breasts, you might have to urinate frequently (due to your uterus exerting more pressure on your bladder), and you may experience mood swings (due to surges in your progesterone and estrogen hormones).
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
          You may also feel nauseous more often and vomit more frequently, which is a sign of hyperemesis-- the act of vomiting excessively. Some women also experience constipation, weight gain or weight loss, and heartburn and gas.
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
          Hormonal changes will affect almost every organ in your body - heart, lungs, kidneys. These changes lead to symptoms in the first week of pregnancy. Furthermore, a stop to your menstrual cycle (period) is a serious indicator of pregnancy. Changes to your routine may also occur, such as going to bed earlier, and eating more frequent, small meals.

              </Text>
        <Text style={{
          fontFamily: "System",
          fontSize: 20,
          color: "white",
          paddingVertical: 8,
          paddingHorizontal: 15,
          fontWeight: "bold",
          fontStyle: "italic"
        }}>Infant Development</Text>
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
            height: 870,
            elevation: 12,
          }}
        >
          <View style={{ flexDirection: "center" }}>
            <Text
              style={{
                fontFamily: "System",
                fontSize: 18,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,

              }}
            >
              At conception, the sperm fertilizes the egg, and the egg plants into the lining of the uterus for healthy growth. One thing to look out for is an ectopic pregnancy -- when fertilized eggs fail to plant in the uterus and instead implants in fallopian tubes. Watch out for intense pain in the abdomen. This is a potentially fatal occurrence if medical attention is not given.

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
              At 4-5 weeks, the baby’s brain and spinal cord have begun to form, and the heart begins to form where the baby is now an embryo
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
              At 8 weeks, major organs and external body structures begin to form. The heart beats with regular rhythm, the arms and legs grow longer, fingers and toes begin to form, and the umbilical cord is visible. The baby fetus will start to look more like a human, and will be nearly 1 inch long, weighing less than ⅛ oz

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
             At 12 weeks, nerves and muscles work together-- the baby can make a fist. The baby is about 3 inches long, weighing almost an ounce. 

              </Text>
          </View>
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
            Check out our custom visualizer for more information! 
          </Text>

        </Card>



        {/* <Text    style={{
                fontFamily: "System",
                fontSize: 20,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: "bold",
                fontStyle:"italic"
              }}>What should you expect during{'\n'}this period?</Text> */}
      </ScrollView>
    </View>
  )
}