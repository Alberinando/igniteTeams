import {TouchableOpacityProps} from 'react-native';
import {ButtonIconTypeStyleProps} from '../Style';

export type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
  icon: string;
};
