import React from 'react';
import { StatusBar, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/auth';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import styles from './styles';
import ProfilePhoto from '../../../assets/img/profile.jpeg';

const Profile = ({ navigation }) => {
  const { signOut } = useAuth();

  const usuario = {
    nome: 'Eliane Lopes',
    cargo: 'Vendedora',
  };

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavBar
          leftIcon="md-arrow-back"
          leftOnPress={() => {
            navigation.goBack();
          }}
        />
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
          centerContent
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flexDirection: 'row', marginVertical: 20 }}>
            <Image style={styles.userImage} source={ProfilePhoto} />
            <View style={{ marginLeft: 10, alignSelf: 'center' }}>
              <Text style={styles.title}>{usuario.nome}</Text>
              <Text style={styles.subTitle}>{usuario.cargo}</Text>
            </View>
          </View>

          <Button
            label="Sair"
            onPress={signOut}
            style={{ alignSelf: 'center' }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
