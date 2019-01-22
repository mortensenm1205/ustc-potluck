import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { AppContainer } from './app_css';
import Foods from './Foods/';
import List from './List/';
import Form from './Form/';
import { loadPotluckList } from './List/actions';

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
        {console.log(this.props)}
      </AppContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    potluckList: state.loadPotluckData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPotluckList: () => dispatch(loadPotluckList())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);