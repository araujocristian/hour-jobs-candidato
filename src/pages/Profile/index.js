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
    nome: 'Roberto Victor',
    cargo: 'Auxiliar de Escritório',
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
          {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: '#4a90e2',
                borderRadius: 5,
                marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 40 }}>
                {empresa.charAt(0)}
              </Text>
            </View>
            <Text style={styles.title}>{cargo}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            <Text style={styles.footerText}>{footerText}</Text>
          </View>

          <Text style={styles.description}>{descricao}</Text>

          <View style={{ marginBottom: 15 }}>
            <Text style={styles.label}>Experiência: </Text>
            <Text style={styles.text}>{vaga.experiencia}</Text>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={styles.label}>Habilidades: </Text>
            {vaga.habilidades.map(habilidade => (
              <Text key={habilidade} style={styles.text}>
                - {habilidade}
              </Text>
            ))}
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={styles.label}>Início previsto: </Text>
            <Text style={styles.text}>{vaga.inicio}</Text>
          </View> */}
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
