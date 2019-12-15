import * as React from 'react';
import { View } from 'react-native';
import AppNavigator from "../../Navigators";
import NavigationService from "../../Services/NavigationServices";
import styles from './styles';

interface RootScreenProps { }

const RootScreen = (props: RootScreenProps) => {
  return (
    <View style={styles.container}>
      <AppNavigator
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    </View>
  );
};

export default RootScreen;
