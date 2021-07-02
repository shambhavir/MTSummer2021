import * as React from "react";
import {
  ImageBackground,
  Button,
  View,
  Text,
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
var infostorage = [];
infostorage[0] = "this is some data 1";
infostorage[1] = "this is some data 2";
infostorage[2] = "this is some data 3";


export default class Resource4 extends React.Component {
   onLinkPress1 = () => {
    this.props.navigation.navigate("Screen1");
  }
  onLinkPress2 = () => {
    this.props.navigation.navigate("Screen2");
  }
  onLinkPress3 = () => {
    this.props.navigation.navigate("Screen3");
  }
  /*onLinkPress4 = () => {
    this.props.navigation.navigate("Screen4");
  }*/
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        {/* <Text>{'\n'}</Text>
        <Text>{'\n'}</Text> */}
           <Text  style={{
              fontFamily: "System",
              fontSize: 50,
              color: "#e4bad4",
              fontWeight: "bold",
              paddingVertical: 1,
              paddingHorizontal: 10,
            }}>Explore</Text>

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
              height: 150,

              elevation: 12,
            }}
            
          >
            {/* <View style={styles.innerContainer}> */}
              <View style={{  
    flexDirection:"row"
   
   }}>
                <Text
                  style={{
                    fontFamily: "System",
                    fontSize: 20,
                    color: "#F8F4FF",
                    paddingVertical: 8,
                    paddingHorizontal: 13,
                    fontWeight: "bold",
                  
                  }}
                  onPress={this.onLinkPress1}
                >
                  Stages of{'\n'}Pregnancy{"\n"}and You
                </Text>
                <Card.Image
                  style={{ paddingVertical: 8, paddingHorizontal: 4, width: 300, height: 130}}
                  source={require("../../../assets/secondpic.png")}
                ></Card.Image>
              </View>
              {/* <View
                style={{ flexDirection: "row", alignContent: "stretch" }}
              >
               
              </View> */}
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
              height: 150,

              elevation: 12,
            }}
          >
            <View style={styles.innerContainer}>
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
                  onPress={this.onLinkPress2}
                >
                  COVID-19 and{"\n"}Pregnant{'\n'}Women
                </Text>
                <Card.Image
                  style={{width: 230, height: 120, flexWrap: "wrap"   }}
                  source={require("../../../assets/doc.png")}
                ></Card.Image>
              </View>
              <View style={{ flex: 1, height: 100, width: 1000 }}></View>
            </View>
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
              height: 150,

              elevation: 12,
            }}
          >
            <View style={styles.innerContainer}>
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
                  onPress={this.onLinkPress3}

                >
                  Your General{'\n'}Health
                </Text>
                <Card.Image
                  style={{ width: 260, height: 100, flexWrap: "wrap" }}
                  source={require("../../../assets/third.png")}
                ></Card.Image>
              </View>
              <View style={{ flex: 1, height: 100, width: 1000 }}></View>
            </View>
          </Card>

      

          
        </ScrollView>
      </View>
    );
  }
}
