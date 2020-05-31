import React from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import NavBar from '../../components/NavBar';
import RegisterForm from '../../components/RegisterForm';

function Register({ navigation }) {
  return (
    <>
      <StatusBar animated barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <NavBar
          leftIcon="md-arrow-back"
          leftOnPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.logo} />

        <View style={styles.textWraper}>
          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subTitle}>Conta pra gente quem é você!</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <RegisterForm navigation={navigation} />

          <TouchableOpacity style={styles.footer} onPress={() => {}}>
            <Text style={styles.footerText}>Termos e condições</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default Register;
