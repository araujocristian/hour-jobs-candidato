import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../pages/Splash';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Splash" component={Splash} />
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="Register" component={Register} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
