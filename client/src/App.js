import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { AppContainer } from './app_css';
import Foods from './Foods/';
import List from './List/';
import Form from './Form/';
import { loadPotluckList, addPotluckItem, removePotluckItem } from './List/actions';
import { loadFoodList } from './Foods/actions';

class App extends Component {

  state = {
    foods: [
      { id: uniqid(), name: 'Hamburger Buns' },
      { id: uniqid(), name: 'Chips' }
    ],
    entry: {}
  }

  componentDidMount() {
    const { getPotluckList, getFoodsList } = this.props;
    getPotluckList();
    getFoodsList();
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
    this.setState({ entry: {}});
    addPotluckListItem(entry);
  }

  potLuckItemRemoval = (e, plLuckPerson) => {
    const { removePotluckListItem } = this.props;
    removePotluckListItem(plLuckPerson);
  }

  render() {
    const { potluckList, foodList } = this.props;
    return (
      <AppContainer>
        <Form formChange={this.formChange} formSubmit={this.formSubmit} />
        <List people={potluckList} remove={this.potLuckItemRemoval} />
        <Foods foods={foodList} />
        {console.log(potluckList)}
      </AppContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    potluckList: state.loadPotluckData,
    foodList: state.loadFoodData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPotluckList: () => dispatch(loadPotluckList()),
    addPotluckListItem: potluckItem => dispatch(addPotluckItem(potluckItem)),
    removePotluckListItem: potluckItem => dispatch(removePotluckItem(potluckItem)),
    getFoodsList: () => dispatch(loadFoodList())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);