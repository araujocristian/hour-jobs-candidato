import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { useAuth } from '../../contexts/auth';

const Home = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Button title="SignOut" onPress={signOut}>
        HOME
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
