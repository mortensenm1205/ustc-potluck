import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { AppContainer } from './app_css';
import Foods from './Foods/';
import List from './List/';
import Form from './Form/';
import { loadPotluckList, addPotluckItem } from './List/actions';

class App extends Component {

  state = {
    foods: [
      { id: uniqid(), name: 'Hamburger Buns' },
      { id: uniqid(), name: 'Chips' }
    ],
    entry: {}
  }

  componentDidMount() {
    const { getPotluckList } = this.props;
    getPotluckList();
  }

  formChange = e => {
    const { entry } = this.state;
    this.setState({ entry: {...entry, [e.target.name]: e.target.value}})
  }

  formSubmit = e => {
    const { entry } = this.state;
    const { addPotluckListItem } = this.props;
    e.preventDefault();
    e.target.reset();
    addPotluckListItem(window.location, entry);
    this.setState({ entry: {}})
  }

  render() {
    const { foods, entry } = this.state;
    const { potluckList } = this.props;
    return (
      <AppContainer>
        <Form formChange={this.formChange} formSubmit={this.formSubmit} />
        <List people={potluckList} remove={this.removePerson} />
        <Foods foods={foods} entry={entry} />
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
    getPotluckList: () => dispatch(loadPotluckList()),
    addPotluckListItem: (location, potluckItem) => dispatch(addPotluckItem(location, potluckItem))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);