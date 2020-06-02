import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import { useAuth } from '../contexts/auth';
import AppRoutes from './app.routes';

function Routes() {
  const { signed, loading } = useAuth();

  // TODO: Transformar isso em um component ou usar react-splash-screen
  if (loading) {
    return (
      <View style={{ flex: 1, justfyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#4a90e2" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
