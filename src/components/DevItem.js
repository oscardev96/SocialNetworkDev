import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
export default class DevItem extends Component {
  render() {
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail source={{uri: `${this.props.image}`}} />
        </Left>
        <Body>
          <Text>{this.props.name}</Text>
          <Text note>{this.props.status}</Text>
          <Text>{this.props.skills + ' '}</Text>
        </Body>
      </ListItem>
    );
  }
}
