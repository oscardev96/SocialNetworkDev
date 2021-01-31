import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Text,
  Title,
  Content,
} from 'native-base';
export default class ProfileDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      user: [],
    };
  }
  componentDidMount() {
    if (this.props.route.params?.item) {
      let itemData = this.props.route.params?.item;
      this.setState({
        item: itemData,
        user: itemData.user,
      });
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Text
                onPress={() => {
                  this.props.navigation.navigate('DevScreen');
                }}>
                Back
              </Text>
            </Button>
          </Left>
          <Body>
            <Title>{this.state.user.name}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>{JSON.stringify(this.state.item)}</Text>
        </Content>
      </Container>
    );
  }
}
