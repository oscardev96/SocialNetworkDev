import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = ({navigation}) => {
  const logOut = async () => {
    await AsyncStorage.removeItem('@token');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <Text
        onPress={() => {
          logOut();
        }}>
        Log out
      </Text>
    </View>
  );
};

export default HomeScreen;
