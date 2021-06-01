import * as React from "react";
import {
  Button,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
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
// import { Card } from 'react-native-shadow-cards';
import { Card } from "react-native-elements";
const user = firebase.auth().currentUser;
import styles from "./styles";
export default class Screen1 extends React.Component {
    
    onpress1 = () => {
        this.props.navigation.navigate("StagePage1", { user });
        //this.componentDidsMount2
      };
      onpress2 = () => {
        this.props.navigation.navigate("StagePage2", { user });
        //this.componentDidsMount2
      };
    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
              <Card
                containerStyle={{
                  flex: 1.3,
                  backgroundColor: "#e4bad4",
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
                <View style={{ flexDirection: "row" }}>
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
                    What You Need to Know in Your First Trimester
                  </Text>
                  {/* <Card.Image
                    style={{ width: 50, height: 59, flexWrap: "wrap" }}
                    source={require("../../../assets/belly.png")}
                  ></Card.Image> */}
                </View>
                <Card.Divider style={{ backgroundColor: "white" }} />
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 18,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
                  Women who receive early and consistent prenatal care (PNC) increase their likelihood of giving birth to a healthy child. Health care providers recommend that women begin prenatal care in the first trimester of their pregnancy. 
                </Text>
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "white",
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                  }}
                  onPress={this.onpress1}
                >
                  Learn More
                </Text>
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
                  height: 400,
                  elevation: 12,
                }}
              >
                <View style={{ flexDirection: "row" }}>
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
                    Important Information for{'\n'}Your Second Trimester
                  </Text>
                  {/* <Card.Image
                    style={{ width: 110, height: 59, flexWrap: "wrap" }}
                    source={require("../../../assets/babyclothes.png")}
                  ></Card.Image> */}
                </View>
                <Card.Divider style={{ backgroundColor: "white" }} />
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 18,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
                  The second trimester encompasses the thirteenth through twenty-eighth weeks of pregnancy. During this period, morning sickness symptoms generally diminish and women often begin to feel more prepared for the challenges of pregnancy.
                </Text>
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "white",
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                  }}
                  onPress={this.onpress2}
                >
                  Learn More
                </Text>
              </Card>
    
              <Card
                containerStyle={{
                  flex: 1.3,
                  backgroundColor: "#e4bac2",
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowOpacity: 0.37,
                  shadowRadius: 7.49,
                  width: 375,
                  height: 400,
                  elevation: 12,
                }}
              >
                <View style={{ flexDirection: "row" }}>
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
                    Third Trimester Moms:{'\n'}You're Almost There!
                  </Text>
                  {/* <Card.Image
                    style={{ width: 110, height: 59, flexWrap: "wrap" }}
                    source={require("../../../assets/needle.png")}
                  ></Card.Image> */}
                </View>
                <Card.Divider style={{ backgroundColor: "white" }} />
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 18,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
                  The third trimester of pregnancy consists of roughly week 27 to the end of the pregnancy, or months 7-9. At this time, your healthcare provider may suggest screening for any health conditions and may conduct prenatal tests.
                </Text>
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "white",
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                  }}
                  onPress={this.onpress3}
                >
                  Learn More
                </Text>
              </Card>
    
              {/* <Card
                containerStyle={{
                  flex: 1.3,
                  backgroundColor: "#c197d2",
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowOpacity: 0.37,
                  shadowRadius: 7.49,
                  width: 375,
                  height: 400,
                  elevation: 12,
                }}
              >
                <View style={{ flexDirection: "row" }}>
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
                    Mom's Mental Health{"\n"}During the Pandemic
                  </Text>
                  <Card.Image
                    style={{ width: 140, height: 59, flexWrap: "wrap" }}
                    source={require("../../../assets/mh.png")}
                  ></Card.Image>
                </View>
                <Card.Divider style={{ backgroundColor: "white" }} />
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 18,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                  }}
                >
                  The COVID-19 pandemic adds yet another source of stress and
                  anxiety for pregnant women. Telehealth has grown increasingly
                  popular, and this is especially important for pregnant women as
                  daily stress due to the pandemic leads to higher stress and
                  anxiety than non-pregnant women.
                </Text>
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "white",
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                  }}
                  onPress={this.onpress4}
                >
                  Learn More
                </Text>
              </Card> */}
            </ScrollView>
          </View>
        )
    }
}