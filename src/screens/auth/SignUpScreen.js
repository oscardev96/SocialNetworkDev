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
const SignUpScreen = ({navigation, signupAction}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignUp = () => {
    signupAction.signUpAction(name, email, password);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Create</Text>
        <Text style={styles.text}>Account</Text>
        <Text style={styles.secondText}>It’s easier to sign up now!</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <View style={styles.boxinput}>
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
            />
            <Icon name="user" size={30} color="#999" />
          </View>

          <View style={styles.boxinput}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
            <Icon name="envelope" size={30} color="#999" />
          </View>
          <View style={styles.boxinput}>
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={styles.input}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            <Icon name="lock" size={30} color="#999" />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onSignUp();
            }}>
            <Text style={styles.textLogin}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textSocial}>Or login witd social network</Text>
        <View style={styles.social}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={() => {}}>
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
          <Text style={styles.forgot}>Already have acount ?</Text>
          <Text
            style={styles.signup}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            Log In
          </Text>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  signupAction: bindActionCreators(AuthAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width,
    height: height * 0.35,
    paddingTop: 150,
    marginLeft: 50,
  },
  text: {
    fontSize: 50,
    fontWeight: '700',
    color: '#333',
  },
  secondText: {
    color: '#333',
    marginTop: 10,
  },
  body: {
    width,
    height: height * 0.65,
    alignItems: 'center',

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
    justifyContent: 'center',
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
    paddingRight: 10,
  },
});
