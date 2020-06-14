import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/auth';
import api from '../../services/api';
import styles from './styles';

const Home = () => {
  const { signOut } = useAuth();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      // const response = await api.get('/vaga');

      setJobs([
        {
          id: 0,
          perfilDaVaga: true,
          periodo: 0,
          remuneracao: 0,
          status: 'ABERTO',
        },
      ]);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={({ item }) => <Text style={styles.item}>{item.nome}</Text>}
      />
    </View>
  );
};

export default Home;
