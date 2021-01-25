import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/home/ProfileScreen';
// import EditProfileScreen from '../screens/home/EditProfileScreen';
import Edit from '../screens/home/EditScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import EditScreen from '../screens/home/EditScreen';

const Tab = createBottomTabNavigator();
const StackProfile = createStackNavigator();
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
        case 'Profile':
          iconName = 'id-card';
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
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default MainStack;
const ProfileStackScreen = ({navigation}) => {
  return (
    <StackProfile.Navigator>
      <StackProfile.Screen
        options={{
          title: '',
          headerRight: () => (
            <Icon.Button
              name="user"
              size={25}
              backgroundColor="white"
              color="#333"
              onPress={() => navigation.navigate('EditProfile')}
            />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <StackProfile.Screen
        options={{
          title: '',
          headerLeft: () => (
            <Icon.Button
              name="long-arrow-left"
              size={25}
              backgroundColor="white"
              color="#333"
              onPress={() => navigation.navigate('ProfileScreen')}
            />
          ),
        }}
        name="EditProfile"
        component={EditScreen}
      />
    </StackProfile.Navigator>
  );
};
