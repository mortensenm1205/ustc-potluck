import React, { Component } from 'react';
import uniqid from 'uniqid';

import { AppContainer } from './app_css';
import Foods from './Foods/';
import List from './List';
import Form from './List/Form';

class App extends Component {

  state = {
    people: [],
    foods: [
      { id: uniqid(), name: 'Hamburger Buns' },
      { id: uniqid(), name: 'Chips' }
    ],
    entry: {}
  }

  render() {
    const { people, foods, entry } = this.state;
    return (
      <AppContainer>
        <Form entry={this.handleChange} submitEntry={this.handleSubmit} />
        <List people={people} remove={this.removePerson} />
        <Foods foods={foods} entry={entry} />
      </AppContainer>
    );
  }
}

export default App;