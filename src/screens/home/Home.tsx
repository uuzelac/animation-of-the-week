import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList } from 'react-native';
import { faBell, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import ListItem from './components/listItem';
import HorizontalLine from './components/horizontalLine';
import styles from './styles';
import { blue } from '../../theme/colors';

const data = [
  {
    id: '1',
    onPress: () => {},
    iconDefinition: faBell,
    iconColor: blue,
    title: 'Notification toast',
  },
  {
    id: '2',
    onPress: () => {},
    iconDefinition: faWindowMaximize,
    iconColor: blue,
    title: 'Bottom sheet',
  },
];

const Home = (): JSX.Element => {
  const renderItem = ({ item }): JSX.Element => (
    <ListItem
      onPress={item.onPress}
      iconDefinition={item.iconDefinition}
      iconColor={item.iconColor}
      itemTitle={item.title}
    />
  );

  const renderSeparator = () => <HorizontalLine />;

  const returnKeyExtractor = (item) => item.id;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.textLogo}>Animation of the {'\n'}Week</Text>
      </View>
      <FlatList
        ItemSeparatorComponent={renderSeparator}
        data={data}
        renderItem={renderItem}
        keyExtractor={returnKeyExtractor}
      />
    </SafeAreaView>
  );
};

export default Home;
