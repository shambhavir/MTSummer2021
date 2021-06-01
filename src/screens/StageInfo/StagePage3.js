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


export default function StagePage1(props) {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e4bac2'
        }}>
            <ScrollView>
                <Text style={{
                    fontFamily: "System",
                    fontSize: 30,
                    color: "#674b80",
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    fontWeight: "bold",
                }}>Third Trimester Moms: You're Almost There!</Text>

                <Image
                    style={{
                        alignSelf: "flex-start",
                        justifyContent: "center",
                        width: 400,
                        height: 240,
                        flexWrap: "wrap",
                    }}
                    source={require("../../../assets/info3.png")}
                ></Image>
                <Text style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "#674b80",
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    fontWeight: "bold",
                    fontStyle: "italic"
                }}>General Information</Text>
                <Text
                    style={{
                        fontFamily: "System",
                        fontSize: 18,
                        color: "#674b80",
                        paddingVertical: 8,
                        paddingHorizontal: 15,

                    }}
                >
                    The third trimester of pregnancy consists of roughly week 27 to the end of the pregnancy, or months 7-9. At this time, your healthcare provider may suggest screening for any health conditions and may conduct prenatal tests. A few symptoms experienced during this trimester includes Braxton Hicks contractions, backaches, shortness of breath, varicose veins, and frequent urination. Maintaining recommended body weight and consuming enough calories is important at this stage. The baby continues to develop and may assume the head-down position for birth.
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
                    During the third trimester, individuals may experience Braxton Hicks contracts, backaches, shortness of breath, heartburn, frequent urination, and tender breasts. In particular, Braxton Hicks contractions are irregular and become more frequent and stronger as the pregnancy comes to an end. Individuals may also experience spider veins that appear as red-purplish veins that will fade after delivery, varicose veins that are swollen veins on legs, or hemorrhoids that appear on the rectal area. For swollen vein relief, elevate legs, include fiber in diet, and drink fluids. In relieving pain from hemorrhoids, soak in a warm tub or use witch hazel pads.

            </Text>


                <Text style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "white",
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    fontWeight: "bold",
                    fontStyle: "italic"
                }}>Visiting Your Healthcare Provider</Text>
                <Text
                    style={{
                        fontFamily: "System",
                        fontSize: 18,
                        color: "white",
                        paddingVertical: 8,
                        paddingHorizontal: 15,

                    }}
                >

                    Regular visits with your healthcare provider and prenatal checkups are suggested to ensure your health and your baby’s health. A few screenings your healthcare provider may recommend include screenings for gestational diabetes, iron deficiency anemia, and Group B strep. The screenings will provide additional information about your health and steps to take depending on your condition.

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
                    <View style={{ flexDirection: "center" }}>
                        <Text style={{
                            fontFamily: "System",
                            fontSize: 20,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }}>Monitor Your Health</Text>
                        <Text
                            style={{
                                fontFamily: "System",
                                fontSize: 18,
                                color: "white",
                                paddingVertical: 8,
                                paddingHorizontal: 15,

                            }}
                        >
                            <Text style={{

                                fontWeight: "bold",

                            }}>Gestational diabetes </Text>is a type of diabetes that can develop during pregnancy. Similar to other types of diabetes, gestational diabetes causes high blood sugar and this can impact both the mother’s health and baby’s health. If the mother had gestational diabetes, she is at risk of getting type 2 diabetes in the future.
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
                            Actions that may reduce risk of getting gestational diabetes includes eating healthy foods, staying active, and maintaining recommended weight during pregnancy.
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
                            <Text style={{

                                fontWeight: "bold",

                            }}>Iron deficiency anemia </Text>occurs when the body’s red blood cells do not provide enough oxygen to the body’s tissues. Symptoms include experiencing fatigue and short of breath. Complications that can arise during pregnancy are premature births and low birth weight in babies. Iron deficiency anemia can be prevented by taking iron supplements and eating iron rich foods.
                        </Text>

                    </View>

                </Card>

                <Card
                    containerStyle={{
                        flex: 1.3,
                        backgroundColor: "#cb7d8b",
                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.37,
                        shadowRadius: 7.49,
                        width: 375,
                        height: 820,
                        elevation: 12,
                    }}
                >
                    <View style={{ flexDirection: "center" }}>
                        <Text style={{
                            fontFamily: "System",
                            fontSize: 20,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }}>Diet and Nutrition</Text>
                        <Text style={{
                            fontFamily: "System",
                            fontSize: 18,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,

                        }} >
                            Most women will need to consume 300 calories more a day during the last 6 months of pregnancy. Weight gain during the second and third trimesters is typically around 3 to 4 pounds per month.

                        </Text>
                        <Text style={{
                            fontFamily: "System",
                            fontSize: 18,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,

                        }} >
                            Weight gain and maintaining weight is critical for a healthy pregnancy. Women who gain more than the recommended weight and do not lose weight within six months of giving birth may be at higher risk for being obese later in life.

                        </Text>

                        <Text style={{
                            fontFamily: "System",
                            fontSize: 20,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }}>Sleep</Text>
                        <Text style={{
                            fontFamily: "System",
                            fontSize: 18,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,

                        }} >
                            It is recommended for most adults to get 7 to 9 hours of sleep a night. Pregnant women may have difficulty sleeping and obtaining the recommended amount of sleep for adults for a variety of reasons.


                        </Text>
                        <Text style={{
                            fontFamily: "System",
                            fontSize: 18,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,

                        }} >
                            Commonly, women during their third trimester wake up more frequently due to any discomfort caused by the pregnancy or the need to use the restroom. A few suggestions to sleep better include exercise, keeping your bedroom dark and cool, and avoiding the use of technological devices that emit light.


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
                        height: 1130,
                        elevation: 12,
                    }}
                >
                    <View style={{ flexDirection: "center" }}>
                        <Text style={{
                            fontFamily: "System",
                            fontSize: 20,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }}>Prenatal Tests</Text>
                        <Text style={{
                            fontFamily: "System",
                            fontSize: 18,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,

                        }} >
                            <Text style={{

                                fontWeight: "bold",

                            }}>A biophysical profile (BPP) </Text>
                        is taken during the third trimester and includes an ultrasound and a nonstress test to monitor the baby’s health. Using these tests, the health care provider can monitor the baby’s breathing, movement, muscle tone, heart rate, and amount of amniotic fluid.

                        </Text>
                        <Text style={{
                            fontFamily: "System",
                            fontSize: 18,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,

                        }} >
                            <Text style={{

                                fontWeight: "bold",

                            }}>A glucose challenge screening </Text>
                        is taken at 26 to 28 weeks of the pregnancy to determine if the mother is at risk for gestational diabetes. During this test, the mother consumes a special sugary drink and a blood sample is taken an hour later. The health care provider taking the test may recommend a glucose tolerance test depending on the results. The glucose tolerance test includes eating a special diet prior to the test, then not eating or drinking anything except water for 14 hours, and finally consuming a sugary drink and having blood tested every hour for 3 hours.

                        </Text>
                        <Text style={{
                            fontFamily: "System",
                            fontSize: 18,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,

                        }} >
                            <Text style={{

                                fontWeight: "bold",

                            }}>The Group B streptococcus infection test </Text>
                        is done near the end of the pregnancy, at roughly 36 to 37 weeks. The purpose of this test is to identify bacteria that can cause pneumonia or an infection to the newborn. During this test, a swab is taken from the vagina and rectum. The cells from the swab are then tested for bacteria that may pose a threat.

                        </Text>
                        <Text style={{
                            fontFamily: "System",
                            fontSize: 18,
                            color: "white",
                            paddingVertical: 8,
                            paddingHorizontal: 15,

                        }} >
                            <Text style={{

                                fontWeight: "bold",

                            }}>The nonstress test </Text>
                        is administered roughly 28 weeks in pregnancy to determine if the fetus is experiencing any type of stress. Most of the time, this test is only used if the baby is at risk. During this noninvasive test, the baby’s heart rate is measured by a belt placed on the mother’s belly. The baby’s heart rate will provide information about the baby’s oxygen supply and if further testing is needed.

                        </Text>
                      

                       

                    </View>

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
                }}>Baby's Development</Text>
                <Text
                    style={{
                        fontFamily: "System",
                        fontSize: 18,
                        color: "#674b80",
                        paddingVertical: 8,
                        paddingHorizontal: 15,

                    }}
                >
                    At this time, the baby’s bones are formed, weight gain is increasing, and the baby is slowly getting into position for delivery. During roughly the 39th week, the baby is full-term and is in the head down position. Although healthy babies can differ in size and weight, the average weight when a baby is delivered is approximately 6 pounds 2 ounces to 9 pounds 2 ounces with an average height of  19 to 21 inches.

            </Text>
                <View style={{ justiftyContent: "center", alignItems: "center" }}>
                    <Text
                        style={{
                            fontFamily: "System",
                            fontSize: 18,
                            color: "#674b80",
                            paddingVertical: 8,
                            paddingHorizontal: 10,
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
                </View>

            </ScrollView>
        </View>
    )
}