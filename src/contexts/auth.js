import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setSigned(true);
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  // TODO: ADD TRY/CATCH
  async function signIn(data) {
    const response = await api.post('/auth', { ...data });
    const { tipo, token } = response.data;

    setSigned(true);

    api.defaults.headers.Authorization = `${tipo} ${token}`;

    await AsyncStorage.setItem('@RNAuth:token', token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
