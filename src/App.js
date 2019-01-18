import React, { Component } from 'react';
import uniqid from 'uniqid';

import { AppContainer } from './App_css';
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

  removePerson = person => {
    let people = [ ...this.state.people ];
    people.map(personObj => {
      if(person.name === personObj.name) {
        people.splice(people.indexOf(person), 1);
        return this.setState({ people: people })
      }

      return this.setState({ people: people });
    })
  }

  handleChange = e => {
      this.setState({ 
        entry: {...this.state.entry, [e.target.name]: e.target.value }
      })
  }

  handleSubmit = e => {
    const { entry } = this.state;
    let peopleArr = [ ...this.state.people ];
    entry.id = uniqid();
    peopleArr.push(entry);
    e.preventDefault();
    e.target.reset();
    this.setState({
      people: peopleArr
    });
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