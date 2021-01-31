import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AuthAction from '../../redux/actions/authActions';
import * as UserAction from '../../redux/actions/userActions';
import ModalEditUser from '../../components/ModalEditUser';
import ModalEditEducation from '../../components/ModalEditEducation';
import ModalEitExperience from '../../components/ModalEitExperience';

const {width, height} = Dimensions.get('window');
const HomeScreen = ({navigation, logoutAction, userInfo, getUserAction}) => {
  const [showEdit, setshowEdit] = useState(false);
  const [showAddExp, setshowAddExp] = useState(false);
  const [showAddEdu, setshowAddEdu] = useState(false);
  let data = {showEdit, showAddEdu, showAddExp};
  useEffect(() => {
    fectData();
  }, []);
  const fectData = () => {
    getUserAction.getUser();

    // let user = JSON.stringify(userInfo.user);
    // setdata(user);
  };
  useEffect(() => {
    setshowEdit(false);
    setshowAddEdu(false);
    setshowAddExp(false);
  }, [userInfo]);
  console.log(data);
  const SignOut = async () => {
    await AsyncStorage.removeItem('@token');
    logoutAction.logOut();
  };
  const hiddenModalEdit = () => {
    setshowEdit(false);
    setshowAddEdu(false);
    setshowAddExp(false);
  };
  return (
    <View style={{flex: 1, paddingTop: 20}}>
      <View style={styles.header}>
        <Icon name="bars" size={25} color="#333" />
        <Text style={styles.titlescreen}>Dashboard</Text>
        <Icon
          name="sign-in"
          size={30}
          color="#333"
          onPress={() => {
            SignOut();
          }}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.tab}>
          <TouchableOpacity
            style={styles.tabTouch}
            onPress={() => {
              setshowEdit(true);
            }}>
            <Text style={styles.textTouch}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabTouch}
            onPress={() => {
              setshowAddExp(true);
            }}>
            <Text style={styles.textTouch}>Add Experience</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabTouch}>
            <Text
              style={styles.textTouch}
              onPress={() => {
                setshowAddEdu(true);
              }}>
              Add Education
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <ModalEditUser isShow={showEdit} hiddenModal={hiddenModalEdit} />
          <ModalEditEducation
            isShow={showAddEdu}
            hiddenModal={hiddenModalEdit}
          />
          <ModalEitExperience
            isShow={showAddExp}
            hiddenModal={hiddenModalEdit}
          />
          <Text>{JSON.stringify(userInfo.users)}</Text>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  userInfo: state.userReducer,
});
const mapDispatchToProps = (dispatch) => ({
  logoutAction: bindActionCreators(AuthAction, dispatch),
  getUserAction: bindActionCreators(UserAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
const styles = StyleSheet.create({
  header: {
    width,

    height: height * 0.1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  titlescreen: {
    fontSize: 30,
    fontWeight: '800',
    color: '#333',
  },
  body: {
    flex: 1,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width,
  },
  tabTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 15,
    width: width / 3 - 10,
    backgroundColor: '#333',
  },
  textTouch: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  info: {},
});
