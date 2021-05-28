import React, { Component, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {  LoginScreen, HomeScreen, Resource4} from './src/screens'

import { firebase } from './src/firebase/config'

const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()

function getHeaderTitle(route) {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'HomeScreen'
  
    switch (routeName) {
      case 'HomeScreen':
        return 'HomesCreen'
      case 'Resource4':
        return 'Resource4'
    }
  }

function MainTabNavigator() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#101010',
          style: {
            backgroundColor: '#ffd700'
          }
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName
            if (route.name == 'HomeScreen') {
              iconName = 'ios-home'
            } else if (route.name == 'Profile') {
              iconName = 'ios-person'
            }
            return <Ionicons name={iconName} color={color} size={size} />
          }
        })}>
        <Tab.Screen name='HomeScreen' component={HomeScreen} />
        <Tab.Screen name='Resource4' component={Resource4} />
      </Tab.Navigator>
    )
  }

  function MainStackNavigator() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [loggedin, setLoggedIn] = useState(false)
  
    useEffect(() => {
      const usersRef =  firebase.firestore().collection('users')
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          usersRef
            .doc(user.uid)
            .get()
            .then((document) => {
              const userData = document.data()
              setUser(userData)
              setLoading(false)
            })
            .catch((error) => {
              setLoading(false)
            });
        } else {
          setLoading(false)
        }
      });
      //return firebase.auth().onAuthStateChanged(setLoggedIn);
    }, []);
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
    headerShown: false
  }} initialRouteName={user ? 'Home' : 'Login'}>

        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} extraData={user} component={MainScreen}/>}
        </Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen}  />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
  export default MainStackNavigator