import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const ContainerButton = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`;
