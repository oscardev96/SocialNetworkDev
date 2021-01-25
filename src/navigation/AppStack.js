import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();
const AppStack = ({auth}) => {
  const [isLogin, setisLogin] = useState(false);
  // useEffect(() => {
  //   checkToken();
  // }, []);
  const checkToken = async () => {
    let token = await AsyncStorage.getItem('@token');
    if (token) {
      setisLogin(true);
      console.log(token);
    }
  };
  useEffect(() => {
    console.log(auth);
    checkToken();
  });
  return (
    <Stack.Navigator headerMode="none">
      {isLogin ? (
        <Stack.Screen name="Main" component={MainStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(AppStack);
