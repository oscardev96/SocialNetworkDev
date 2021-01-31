import React, {useState} from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Modal from 'react-native-modal';

import InputText from './Input';
import * as UserAction from '../redux/actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const ModalEditExperience = ({isShow, hiddenModal, updateUser}) => {
  const [status, setstatus] = useState('');
  const [skills, setskills] = useState('');
  const [exp, setexp] = useState('');
  const [edu, setedu] = useState('');
  const [company, setcompany] = useState('');
  const [github, setgithub] = useState('');
  const [location, setlocation] = useState('');
  const [website, setwebsite] = useState('');
  const submitForm = () => {
    updateUser.postUser(
      status,
      skills,
      exp,
      edu,
      company,
      github,
      location,
      website,
    );
    let data = {
      status,
      skills,
      exp,
      edu,
      company,
      github,
      location,
      website,
    };
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SafeAreaView>
        <Modal isVisible={isShow}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Hello!</Text>
            <ScrollView>
              <InputText
                value={status}
                placeholder="Status"
                onChangeText={(text) => {
                  setstatus(text);
                }}
              />
              <InputText
                value={skills}
                placeholder="Skills"
                onChangeText={(text) => {
                  setskills(text);
                }}
              />
              <InputText
                value={exp}
                placeholder="Exp"
                onChangeText={(text) => {
                  setexp(text);
                }}
              />
              <InputText
                value={edu}
                placeholder="Edu"
                onChangeText={(text) => {
                  setedu(text);
                }}
              />
              <InputText
                value={company}
                placeholder="Company"
                onChangeText={(text) => {
                  setcompany(text);
                }}
              />
              <InputText
                value={location}
                placeholder="Location"
                onChangeText={(text) => {
                  setlocation(text);
                }}
              />
              <InputText
                value={github}
                placeholder="GitHub"
                onChangeText={(text) => {
                  setgithub(text);
                }}
              />
              <InputText
                value={website}
                placeholder="WebSite"
                onChangeText={(text) => {
                  setwebsite(text);
                }}
              />
            </ScrollView>
            <Button
              title="Submit"
              onPress={() => {
                submitForm();
              }}
            />
            <Button title="Close" onPress={hiddenModal} />
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  updateUser: bindActionCreators(UserAction, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalEditExperience);
