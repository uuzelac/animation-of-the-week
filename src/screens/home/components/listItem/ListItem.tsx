import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import { ListItemProps } from './types';

const ListItem: React.FC<ListItemProps> = ({
  onPress,
  iconDefinition,
  iconColor,
  title,
}: ListItemProps): JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <FontAwesomeIcon
          icon={iconDefinition}
          color={iconColor}
          size={24}
          style={styles.iconStyle}
        />
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
