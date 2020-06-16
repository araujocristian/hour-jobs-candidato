import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import JobPage from '../pages/JobPage';
import Profile from '../pages/Profile';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="JobPage" component={JobPage} />
    <AppStack.Screen name="Profile" component={Profile} />
  </AppStack.Navigator>
);

export default AppRoutes;
