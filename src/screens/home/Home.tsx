import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import {
  faBell,
  faWindowMaximize,
  faBatteryHalf,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import ListItem from './components/listItem';
import { ListItemProps } from './components/listItem/types';
import HorizontalLine from './components/horizontalLine';
import styles from './styles';
import { blue } from '../../theme/colors';
import * as ROUTE_NAMES from '../../navigation/routeNames';
import { HomeNavProps } from '../../navigation/types';
import * as screenTitles from '../../navigation/screenTitles';

type Props = HomeNavProps;

const Home = ({ navigation }: Props): JSX.Element => {
  const renderItem: ListRenderItem<ListItemProps> = ({ item }): JSX.Element => (
    <ListItem
      id={item.id}
      onPress={item.onPress}
      iconDefinition={item.iconDefinition}
      iconColor={item.iconColor}
      title={item.title}
    />
  );

  const renderSeparator = () => <HorizontalLine />;

  const returnKeyExtractor = (item: ListItemProps): string => item.id;

  const data = [
    {
      id: '1',
      onPress: () => navigation.navigate(ROUTE_NAMES.NOTIFICATION_TOAST),
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
    {
      id: '3',
      onPress: () => navigation.navigate(ROUTE_NAMES.BATTERY_CHARGING),
      iconDefinition: faBatteryHalf,
      iconColor: blue,
      title: screenTitles.BATTERY_CHARGING,
    },
    {
      id: '4',
      onPress: () => navigation.navigate(ROUTE_NAMES.LOADING_ANIMATION),
      iconDefinition: faCircle,
      iconColor: blue,
      title: screenTitles.LOADING_ANIMATION,
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
