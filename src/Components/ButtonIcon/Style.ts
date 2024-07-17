import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {MaterialIcons} from 'react-native-vector-icons';

type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export type Props = {
  type: ButtonIconTypeStyleProps;
};

export default ButtonIconTypeStyleProps;

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLOR.GREEN_700 : theme.COLOR.RED,
}))``;
