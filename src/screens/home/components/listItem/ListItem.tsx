import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

interface Props {
  onPress: () => void;
  iconDefinition: IconDefinition;
  iconColor: string;
  itemTitle: string;
}

const ListItem: React.FC<Props> = ({
  onPress,
  iconDefinition,
  iconColor,
  itemTitle,
}: Props): JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <FontAwesomeIcon
          icon={iconDefinition}
          color={iconColor}
          size={24}
          style={styles.iconStyle}
        />
        <Text style={styles.textStyle}>{itemTitle}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
