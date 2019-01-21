import React, { Component } from 'react';
import uniqid from 'uniqid';

import { AppContainer } from './css/app';
import Form from './components/Form/';
import Items from './components/Items/';
import List from './components/List/';

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
        <Items people={people} remove={this.removePerson} />
        <List foods={foods} entry={entry} />
      </AppContainer>
    );
  }
}

export default App;