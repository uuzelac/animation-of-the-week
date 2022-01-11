import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList } from 'react-native';
import { faBell, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import ListItem from './components/listItem';
import HorizontalLine from './components/horizontalLine';
import styles from './styles';
import { blue } from '../../theme/colors';
import { NOTIFICATION_TOAST } from '../../navigation/routeNames';
import { HomeNavProps } from '../../navigation/types';
import * as screenTitles from '../../navigation/screenTitles';

type Props = HomeNavProps;

const Home = ({ navigation }: Props): JSX.Element => {
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

  const data = [
    {
      id: '1',
      onPress: () => navigation.navigate(NOTIFICATION_TOAST),
      iconDefinition: faBell,
      iconColor: blue,
      title: screenTitles.NOTIFICATION_TOAST,
    },
    {
      id: '2',
      onPress: () => {},
      iconDefinition: faWindowMaximize,
      iconColor: blue,
      title: screenTitles.BOTTOM_SHEET,
    },
  ];

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
