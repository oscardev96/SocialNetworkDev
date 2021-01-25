import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {set} from 'react-native-reanimated';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ModalEditUser from '../../components/ModalEditUser';
import * as UserAction from '../../redux/actions/userActions';
const ProfileScreen = ({navigation, getUserAction, userInfo}) => {
  const [data, setdata] = useState(null);
  const [isShow, setisShow] = useState(false);
  useEffect(() => {
    fectData();
  }, []);
  const fectData = () => {
    getUserAction.getUser();

    // let user = JSON.stringify(userInfo.user);
    // setdata(user);
  };
  useEffect(() => {
    console.log(userInfo);
    setisShow(false);
    // if (userInfo.user._id) {
    //   setisShow(false);
    //   console.log({userInfo, isShow});
    // }
  }, [userInfo]);
  const hiddenModal = (data) => {
    let hidden = !isShow;
    setisShow(hidden);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {userInfo.users.hasOwnProperty('msg') ? (
        <View>
          <Text> {userInfo.users.msg}</Text>
        </View>
      ) : (
        <View>
          <Text>{JSON.stringify(userInfo.users)}</Text>
        </View>
      )}

      <Button
        title="Edit"
        onPress={() => {
          setisShow(true);
        }}
      />

      <ModalEditUser isShow={isShow} hiddenModal={hiddenModal} />
    </View>
  );
};
const mapStateToProps = (state) => ({
  userInfo: state.userReducer,
});
const mapDispatchToProps = (dispatch) => ({
  getUserAction: bindActionCreators(UserAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
