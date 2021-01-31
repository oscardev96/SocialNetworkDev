import React, {useEffect, useState} from 'react';
import {
  Container,
  Header,
  Text,
  Content,
  Title,
  Thumbnail,
  List,
  Button,
} from 'native-base';
import DevItem from '../../components/DevItem';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import {bindActionCreators} from 'redux';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
const DevScreen = ({navigation, getAllAction, listProfile}) => {
  useEffect(() => {
    getAllAction.getAllProfile();
  }, []);
  return (
    <Container>
      <Header noLeft>
        <Title>List Developer</Title>
      </Header>
      <Content>
        <List>
          {listProfile.map((item, index) => {
            return (
              <TouchableHighlight
                key={index}
                onPress={() => {
                  navigation.navigate('ProfileDetailScreen', {item: item});
                }}>
                <DevItem
                  image="https://picsum.photos/200/300"
                  name={item.user.name}
                  status={item.status}
                  skills={item.skills}
                />
              </TouchableHighlight>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  listProfile: state.userReducer.listProfile,
});
const mapDispatchToProps = (dispatch) => ({
  getAllAction: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(DevScreen);
