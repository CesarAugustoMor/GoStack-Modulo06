import React, {Component} from 'react';
import {Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {Container, Form, Input, SubmitButton} from './styles';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      newUser: '',
      users: [],
    };
  }

  hanldeAddUser = async () => {
    const {newUser, users} = this.state;

    const response = await api.get(`/users/${newUser}`);
    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };
    this.setState({
      users: [...users, data],
      newUser: '',
    });
    Keyboard.dismiss();
  };

  render() {
    const {users, newUser} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitaliaze="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={(text) => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.hanldeAddUser}
          />
          <SubmitButton onPress={this.hanldeAddUser}>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
