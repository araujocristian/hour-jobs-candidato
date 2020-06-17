import React, { useEffect, useState } from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
// import api from '../../services/api';
import styles from './styles';
import Card from '../../components/Card';
import ProfilePhoto from '../../../assets/img/profile.jpeg';

const Home = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      // const response = await api.get('/vaga');

      setJobs([
        {
          id: '1',
          cargo: 'Vendedora',
          empresa: 'Vitória Restaurante',
          descricao:
            'Profissional responsável por executar atividades relacionadas à venda no restaurante.',
          bairro: 'Santana, SP',
          perfilDaVaga: true,
          periodo: 8,
          remuneracao: 150,
          status: 'ABERTO',
        },
        {
          id: '2',
          cargo: 'Vendedora',
          empresa: 'Mariana Silva ME',
          bairro: 'Vila Mariana, SP',
          descricao:
            'Irá executar atividades auxiliares na assistência de vendas e em atendimento na instituição, utilizando técnicas apropriadas.',
          perfilDaVaga: true,
          periodo: 6,
          remuneracao: 200,
          status: 'ABERTO',
        },
        {
          id: '3',
          cargo: 'Garçonete',
          empresa: 'Restaurante Tela',
          bairro: 'Vila Madalena, SP',
          descricao:
            'Realizar o mise-en-place da copa e do restaurante, utilizando as técnicas específicas para cada tipo de serviço; apresentar menus e cardápios aos clientes.',
          perfilDaVaga: true,
          periodo: 10,
          remuneracao: 80,
          status: 'ABERTO',
        },
        {
          id: '4',
          cargo: 'Vendedora',
          empresa: 'Lojas Guarda',
          bairro: 'Centro, SP',
          descricao:
            'Profissional responsável por executar atividades relacionadas à venda de pacotes de serviços celulares de uma operadora de celular.',
          perfilDaVaga: true,
          periodo: 9,
          remuneracao: 90,
          status: 'ABERTO',
        },
        {
          id: '5',
          cargo: 'Balconista',
          empresa: 'Drogaria Mateus',
          bairro: 'Paulista, SP',
          descricao:
            'Conferir quantidade de mercadorias e notificar as faltas via sistema para a reposição nas gôndolas.',
          perfilDaVaga: true,
          periodo: 8,
          remuneracao: 100,
          status: 'ABERTO',
        },
        {
          id: '6',
          cargo: 'Auxiliar de Escritório',
          empresa: 'Escritório Wiz',
          bairro: 'Centro, SP',
          descricao:
            'Atuar na área financeiro, contas a pagar, receber, conciliação bancário entre outras atividades pertinentes a área de atuação.',
          perfilDaVaga: true,
          periodo: 8,
          remuneracao: 120,
          status: 'ABERTO',
        },
      ]);
    })();
  }, []);

  return (
    <>
      <StatusBar animated backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.container, { paddingTop: 10 }]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <Text style={styles.title}>Olá, Eliane!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image style={styles.userImage} source={ProfilePhoto} />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Vagas disponíveis</Text>
          <FlatList
            data={jobs}
            renderItem={({ item }) => (
              <Card navigation={navigation} key={item.id} item={item} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
