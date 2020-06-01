import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Splash from './pages/Splash';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Home from './pages/Home';

import SignIn from './test_comp/Login';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {/* <AppStack.Screen name="Splash" component={Splash} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="Home" component={Home} /> */}
        <AppStack.Screen name="Home" component={SignIn} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
