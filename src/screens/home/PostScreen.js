import React, {useState, useEffect} from 'react';

import {
  Container,
  Header,
  Text,
  Content,
  Textarea,
  Button,
  Body,
} from 'native-base';
import {TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PostActions from '../../redux/actions/postActions';
import PostItem from '../../components/PostItem';
const PostScreen = ({postAction, listPost}) => {
  const [post, setpost] = useState('');
  useEffect(() => {
    postAction.getAllPost();
  }, []);
  return (
    <Container>
      <Header>
        <Body>
          <Text>POST</Text>
        </Body>
      </Header>
      <Content padder>
        <Textarea
          rowSpan={5}
          bordered
          placeholder="Textarea"
          onChangeText={(text) => {
            setpost(text);
          }}
        />
        <Button
          success
          style={{marginTop: 10}}
          onPress={() => {
            postAction.submitPost(post);
          }}>
          <Text> Submit </Text>
        </Button>
        {listPost.map((item, index) => {
          return (
            <TouchableHighlight
              key={index}
              onPress={() => {
                alert(JSON.stringify(item));
              }}>
              <PostItem
                image="https://picsum.photos/200/300"
                name={item.name}
                post={item.text}
                time={item.date}
                like={item.likes.length}
                comment={item.comments.length}
              />
            </TouchableHighlight>
          );
        })}
      </Content>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  listPost: state.postReducer.listPost,
});
const mapDispatchToProps = (dispatch) => ({
  postAction: bindActionCreators(PostActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
