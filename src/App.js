import React, { Component } from 'react';
import idGen from 'react-id-generator';

import { AppContainer } from './App_css';
import Form from './components/Form/';
import Items from './components/Items/';
import List from './components/List/';

class App extends Component {

  state = {
    people: [],
    foods: [
      { id: idGen(), name: 'Hamburger Buns' },
      { id: idGen(), name: 'Chips' }
    ],
    entry: {}
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

  handleChange = e => {
    this.setState({ 
      entry: {...this.state.entry, [e.target.name]: e.target.value }
    })
  }

  handleSubmit = e => {
    const { entry } = this.state;
    let peopleArr = [ ...this.state.people ];
    entry.id = idGen();
    peopleArr.push(entry)
    e.preventDefault();
    e.target.reset();
    this.setState({
      people: peopleArr
    });
  }

  render() {
    const { people, foods } = this.state;
    return (
      <AppContainer>
        <Form entry={this.handleChange} submitEntry={this.handleSubmit} />
        <Items people={people} remove={this.removePerson} />
        <List foods={foods} />
      </AppContainer>
    );
  }
}

export default App;