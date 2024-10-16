import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import icon from 'react-native-vector-icons/MaterialIcons';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(icon).attrs<Props>(({theme, type}) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
