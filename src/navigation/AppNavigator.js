import * as React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '.../HomeScreen/HomeScreen.js'
import Resource4 from '.../Resources/Resource4.js'
import LoginScreen from '.../LoginScreen/LoginScreen.js'

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
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
    headerShown: false
  }} initialRouteName={user ? 'Home' : 'Login'}>

        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} extraData={user} component={MainScreen}/>}
        </Stack.Screen>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen}  />
        {/* <Stack.Screen name="MoreInfo" component={MoreInfo} /> */}
        {/* <Stack.Screen name="Dashboard">
          {props => <DashBoard {...props}/>}
        </Stack.Screen> */}
        {/* <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
     
        <Stack.Screen name="InfoScreen1" component={InfoScreen1} />
        <Stack.Screen name="Resource1" component={Resource1} />
        <Stack.Screen name="Resource2" component={Resource2} />
        <Stack.Screen name="Resource3" component={Resource3} />
        <Stack.Screen name="Resource4" component={Resource4} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
        <Stack.Screen name="InterestForm1" component={InterestForm1} />
        <Stack.Screen name="InterestForm2" component={InterestForm2} />
        <Stack.Screen name="Screen1" component={Screen1} /> */}

      </Stack.Navigator>
      </NavigationContainer>
    )
  }