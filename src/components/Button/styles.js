import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity`
  width: 310px;
  height: 70px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 100px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: 'roboto-700';
  font-size: 24px;
  font-weight: bold;
  align-self: center;
`;
