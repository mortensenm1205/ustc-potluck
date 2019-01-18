import React, { Component } from 'react';
import { AppContainer } from './App_css';
import Form from './components/Form/';
import Items from './components/Items/';
import List from './components/List/';

class App extends Component {

  state = {
    people: [
      { id: 0, name: 'Bobby Hill', item: 'Drinks' },
      { id: 1, name: 'Hank Hill', item: 'Hamburgers' },
      { id: 2, name: 'Peggy Hill', item: 'Brown Betty Pie' },
      { id: 3, name: 'Dale Gribble', item: 'Forks and Spoons'}
    ],
    foods: [
      { id: 0, name: 'Hamburger Buns' },
      { id: 1, name: 'Chips' }
    ]
  }

  removePerson = person => {
    let people = [ ...this.state.people ];
    people.map(personObj => {
      if(person.name === personObj.name) {
        let start = people.indexOf(personObj);
        return people.splice(start, 1, 0);
      }

      return this.setState({ people: people });
    })
  }

  render() {
    const { people, foods } = this.state;
    return (
      <AppContainer>
        <Form  />
        <Items people={people} remove={this.removePerson} />
        <List foods={foods} />
      </AppContainer>
    );
  }
}

export default App;