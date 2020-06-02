import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../pages/Splash';
import SignIn from '../pages/SignIn';

// import Login from './pages/Login';
// import Register from './pages/Register';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Splash" component={Splash} />
    <AuthStack.Screen name="SignIn" component={SignIn} />
    {/*
        <AppStack.Screen name="Register" component={Register} />
        */}
  </AuthStack.Navigator>
);

export default AuthRoutes;
