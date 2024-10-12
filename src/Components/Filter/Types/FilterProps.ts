import {TouchableOpacityProps} from 'react-native';

export type FilterStyleProps = {
  isActive?: boolean;
};

export type PropsFilter = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };
