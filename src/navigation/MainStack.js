import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/home/ProfileScreen';
import DevScreen from '../screens/home/DevScreen';
import PostScreen from '../screens/home/PostScreen';

import ProfileDetailScreen from '../screens/home/ProfileDetailScreen';
// import EditProfileScreen from '../screens/home/EditProfileScreen';
import Edit from '../screens/home/EditScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import EditScreen from '../screens/home/EditScreen';

const Tab = createBottomTabNavigator();
const StackProfile = createStackNavigator();
const DevStack = createStackNavigator();
const MainStack = () => {
  const tabBarOption = {
    showLabel: false,
    style: {
      backgroundColor: '#6F41ED',
      paddingBottom: 20,
    },
  };
  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let iconName;
      switch (route.name) {
        case 'Home':
          iconName = 'home';
          break;
        case 'Dev':
          iconName = 'id-card';
          break;
        case 'Post':
          iconName = 'plus-circle';
          break;
        default:
          iconName = 'home';
          break;
      }
      return (
        <Icon
          name={iconName}
          size={focused ? 45 : 35}
          color={focused ? '#fff' : '#333'}
        />
      );
    },
  });
  return (
    <Tab.Navigator tabBarOptions={tabBarOption} screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Dev" component={DevStackScreen} />
    </Tab.Navigator>
  );
};

export default MainStack;

const DevStackScreen = ({navigation}) => {
  return (
    <DevStack.Navigator headerMode={false}>
      <DevStack.Screen name="DevScreen" component={DevScreen} />
      <DevStack.Screen
        name="ProfileDetailScreen"
        component={ProfileDetailScreen}
      />
    </DevStack.Navigator>
  );
};
