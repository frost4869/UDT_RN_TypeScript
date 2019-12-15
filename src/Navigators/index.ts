import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Containers/HomeScreen';
import ExampleScreen from '../Containers/ExampleScreen';

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Example: ExampleScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(StackNavigator);
