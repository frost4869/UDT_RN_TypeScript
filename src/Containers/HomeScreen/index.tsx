import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation';
import styles from "./styles";

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

const HomeScreen = (props: HomeScreenProps) => {

  const navigateToExampleScreen = () => props.navigation.navigate('Example')

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button onPress={navigateToExampleScreen} title="To Example screen" />
    </View>
  );
};

export default HomeScreen;