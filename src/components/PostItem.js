import React, {Component} from 'react';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class PostItem extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: `${this.props.image}`}} />
            <Body>
              <Text>{this.props.name}</Text>
              <Text note>{this.props.post}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon name="thumbs-up" size={30} />
              <Text>{this.props.like} likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon name="comment" size={30} />
              <Text>{this.props.comment} comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>{this.props.time}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
