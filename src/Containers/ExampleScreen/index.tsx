import * as React from 'react';
import { Text, View, Image } from 'react-native';
import styles from "./styles";
import { sample } from '../../Assets/Images';

interface ExampleScreenProps { }

const ExampleScreen = (props: ExampleScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ExampleScreen</Text>
      <Image source={sample} />
    </View>
  );
};

export default ExampleScreen;