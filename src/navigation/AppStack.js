import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AuthAction from '../redux/actions/authActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();
const AppStack = ({auth, setLogin}) => {
  const [isLogin, setisLogin] = useState(false);
  // useEffect(() => {
  //   checkToken();
  // }, []);
  const checkToken = async () => {
    let token = await AsyncStorage.getItem('@token');
    if (token) {
      setLogin.setLogin();
    }
  };
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <Stack.Navigator headerMode="none">
      {auth.isLogin ? (
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
const mapDispatchToProps = (dispatch) => ({
  setLogin: bindActionCreators(AuthAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppStack);
