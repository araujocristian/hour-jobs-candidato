import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const Card = ({ navigation, item }) => {
  const { cargo, empresa, bairro, descricao, periodo, remuneracao } = item;
  const subTitle = `${empresa}, ${bairro}`;
  const footerText = `R$ ${remuneracao} - ${periodo} Horas`;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('JobPage', { item })}
      style={styles.container}
    >
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#4a90e2',
            borderRadius: 5,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 40 }}>
            {empresa.charAt(0)}
          </Text>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.title}>{cargo}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
      <Text style={styles.description}>{descricao}</Text>
      <Text style={styles.footerText}>{footerText}</Text>
    </TouchableOpacity>
  );
};

export default Card;
