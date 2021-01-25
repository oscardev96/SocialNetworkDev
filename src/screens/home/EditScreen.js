import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserAction from '../../redux/actions/userActions';
const EditScreen = ({navigation, postAction}) => {
  const [status, setstatus] = useState('');
  const [skills, setskills] = useState([]);
  const [exp, setexp] = useState('');
  const [edu, setedu] = useState('');
  const [company, setcompany] = useState('');
  const [github, setgithub] = useState('');
  const [location, setlocation] = useState('');
  const [website, setwebsite] = useState('');
  const onsubmit = () => {
    let data = {status, skills, exp, edu, company, github, location, website};
    postAction.postUser(
      status,
      skills,
      exp,
      edu,
      company,
      github,
      location,
      website,
    );
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={{fontSize: 25, fontWeight: '700'}}>
            EDIT YOUR PROFILE
          </Text>
          <Text style={{marginTop: 10}}>Add some changes to your profile</Text>
        </View>

        <ScrollView>
          <TextInput
            placeholder="Status"
            style={styles.input}
            onChangeText={(text) => {
              setstatus(text);
            }}
          />
          <TextInput
            placeholder="Skills"
            style={styles.input}
            onChangeText={(text) => {
              let cover = text.split(', ');
              setskills(cover);
            }}
          />
          <TextInput
            placeholder="Experience"
            style={styles.input}
            onChangeText={(text) => {
              setexp(text);
            }}
          />
          <TextInput
            placeholder="Education"
            style={styles.input}
            onChangeText={(text) => {
              setedu(text);
            }}
          />
          <TextInput
            placeholder="Company"
            style={styles.input}
            onChangeText={(text) => {
              setcompany(text);
            }}
          />
          <TextInput
            placeholder="GitHub"
            style={styles.input}
            onChangeText={(text) => {
              setgithub(text);
            }}
          />
          <TextInput
            placeholder="Location"
            style={styles.input}
            onChangeText={(text) => {
              setlocation(text);
            }}
          />
          <TextInput
            placeholder="WebSite"
            style={styles.input}
            onChangeText={(text) => {
              setwebsite(text);
            }}
          />
        </ScrollView>
        <View style={styles.boxbtn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              onsubmit();
            }}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  postAction: bindActionCreators(UserAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxbtn: {
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 20,
  },
});
