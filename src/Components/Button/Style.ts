import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Props} from './Types/PropsButton';

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
`;
