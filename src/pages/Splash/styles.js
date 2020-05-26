import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';

export const SafeAreaViewWrapper = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 25px;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const PrincipalText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 36px;
  font-family: 'roboto-regular';
`;

// export default StyleSheet.create({
//   logo: {
//
//   },
//   text: {
//
//   },
//   createButton: {
//     width: 310,
//     height: 70,
//     backgroundColor: 'rgba(74,144,226,1)',
//     borderRadius: 100,
//     justifyContent: 'center',
//   },
//   createButtonText: {
//     color: 'rgba(255,255,255,1)',
//     fontSize: 24,
//     fontWeight: 'bold',
//     fontFamily: 'roboto-700',
//     alignSelf: 'center',
//   },
//   footer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   footerText: {
//     color: 'rgba(0,0,0,1)',
//     fontSize: 20,
//     // fontFamily: "roboto-regular",
//   },
//   footerLink: {
//     marginLeft: 5,
//   },
//   footerLinkText: {
//     color: 'rgba(74,144,226,1)',
//     fontSize: 20,
//     // fontFamily: "roboto-regular",
//   },
// });
