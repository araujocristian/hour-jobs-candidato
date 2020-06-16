import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../../components/NavBar';
import styles from './styles';
import Button from '../../components/Button';

const JobPage = ({ route, navigation }) => {
  const { item } = route.params;
  const { cargo, empresa, bairro, descricao, periodo, remuneracao } = item;
  const subTitle = `${empresa}, ${bairro}`;
  const footerText = `R$ ${remuneracao} - ${periodo} Horas`;

  const vaga = {
    experiencia: 'Não é necessário',
    habilidades: ['Comunicação', 'Organização', 'Proatividade'],
    inicio: 'Em 12 horas',
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
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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

          <View style={{ marginBottom: 30 }}>
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
            </View>
          </View>

          <Button
            label="Candidatar-se"
            onPress={() => {}}
            style={{ alignSelf: 'center' }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default JobPage;
