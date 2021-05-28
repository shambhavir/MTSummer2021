import React, {Component} from 'react';
import {LoginScreen, HomeScreen, RegistrationScreen, Resource4, Screen1, Screen2, Screen3, Screen4, Page1, Page2, Page3, Page4} from './src/screens'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './src/firebase/config'
// import Splash from './src/screens/splash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

function TabsStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeScreen' component={HomeScreen} />
      {/* <Tab.Screen name='Resource4' component={Resource4} /> */}
    </Tab.Navigator>
  )
}
export default class AppNavi extends Component {

    constructor(props){
      super(props);
      this.state = {
        loggedIn : null,
      }
    }
  
    componentDidMount(){
      this.authListner();
    }
  
    componentWillUnmount(){
      // unsubscribe
      this.setState({
        loggedIn:null,
      })
    }
  
    authListner(){
      fire.auth().onAuthStateChanged(user => {
        //console.log(user)
        if (!user){
          this.setState({
            loggedIn:false,
          })
        } else if (user){
          this.setState({
            loggedIn:true,
          }) 
        }    
      }
      )
    }
  
    render = () => {
      if (this.state.loggedIn == null) {
        // We haven't finished checking for the token yet
        // return <Splash />;
        console.log('hi')
      }
  
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              {
                this.state.loggedIn == false ? (
                  <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Registration" component={RegistrationScreen} />
  
                  </>
                ) : 
                  <>
                    {/* <Stack.Screen name="StackTwoScreen" component={StackTwoScreen} /> */}
                    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                   
                    <Stack.Screen name="Resource4" component={Resource4}/>
                 {/* <Stack.Screen name = "TabsStack" component={TabsStack}/> */}
                 <Stack.Screen name="Screen1" component={Screen1} />
                 <Stack.Screen name="Screen2" component={Screen2} />
                 <Stack.Screen name="Screen3" component={Screen3} />
                 <Stack.Screen name="Screen4" component={Screen4} />
                 <Stack.Screen name="Page1" component={Page1} />
                 <Stack.Screen name="Page2" component={Page2}  options={{ title: '', headerStyle: {
              backgroundColor: '#F8F4FF'
           } }}/>
            <Stack.Screen name="Page3" component={Page3}  />
            <Stack.Screen name="Page4" component={Page4}  />
                  </>
                  
                  

             }
  
            </Stack.Navigator>
        
          </NavigationContainer>
        )
  }}

