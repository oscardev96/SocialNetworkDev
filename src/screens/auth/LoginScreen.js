import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AuthAction from '../../redux/actions/authActions';
const {width, height} = Dimensions.get('window');
const LoginScreen = ({navigation, loginAction}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const onLogin = () => {
    loginAction.signInAction(email, password);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={require('../../assets/logo.png')}
            style={{width: 80, height: 71}}
          />
        </View>
        <Text style={styles.textName}>LeadHub</Text>
        <Text style={styles.textLable}>Social network for developer</Text>
        <Image
          source={require('../../assets/person.png')}
          style={{bottom: 0, position: 'absolute'}}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <View style={styles.boxinput}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(text) => {
                setemail(text);
              }}
            />
            <Icon name="envelope" size={30} color="#999" />
          </View>
          <View style={styles.boxinput}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              value={password}
              onChangeText={(text) => {
                setpassword(text);
              }}
            />
            <Icon name="lock" size={30} color="#999" />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onLogin();
            }}>
            <Text style={styles.textLogin}>Log In</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textSocial}>Or login witd social network</Text>
        <View style={styles.social}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={() => {
              alert('login');
            }}>
            <Text style={{fontSize: 10, fontWeight: '900', color: 'white'}}>
              Login with Facebook
            </Text>
          </Icon.Button>
          <Icon.Button
            name="google"
            backgroundColor="#F53F3F"
            onPress={() => {
              alert('login');
            }}>
            <Text style={{fontSize: 10, fontWeight: '900', color: 'white'}}>
              Login with Google
            </Text>
          </Icon.Button>
        </View>
        <View style={styles.bottom}>
          <Text
            style={styles.signup}
            onPress={() => {
              navigation.navigate('SingUpScreen');
            }}>
            Sign Up
          </Text>
          <Text style={styles.forgot}>Forgot password</Text>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  loginAction: bindActionCreators(AuthAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width,
    height: height * 0.45,
    backgroundColor: '#6F41ED',
    borderBottomStartRadius: 60,
    borderBottomEndRadius: 60,
    paddingVertical: 50,
    alignItems: 'center',
  },
  textName: {
    fontSize: 60,
    fontWeight: '700',
    color: 'white',
    marginTop: 20,
  },
  textLable: {
    color: 'white',
    fontSize: 18,
  },
  body: {
    width,
    height: height * 0.55,
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
  boxinput: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 10,
    borderColor: '#999999',
    marginTop: 20,
  },
  input: {
    width: width * 0.7,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.7,
    backgroundColor: '#6F41ED',
    height: 50,
    borderRadius: 20,
  },
  textLogin: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
  textSocial: {
    color: '#999',
    fontSize: 14,
  },
  social: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexDirection: 'row',
    width,
    justifyContent: 'space-around',
  },
  signup: {
    color: '#6F41ED',
    fontWeight: '700',
    fontSize: 14,
  },
  forgot: {
    color: '#C4C4C4',
    fontWeight: '700',
    fontSize: 14,
  },
});
