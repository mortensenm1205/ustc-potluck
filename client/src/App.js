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
    let objToSend = {[e.target.name]: e.target.value};
    this.setState({ entry: {...entry, ...objToSend}})
  }

  formSubmit = e => {
    const { entry } = this.state;
    const { addPotluckListItem, getFoodsList } = this.props;
    e.preventDefault();
    e.target.reset();
    addPotluckListItem(entry, () => {
      getFoodsList();
    });
  }

  potLuckItemRemoval = (e, plLuckPerson, index) => {
    const { removePotluckListItem, getFoodsList } = this.props;
    removePotluckListItem(plLuckPerson, index, () => {
      getFoodsList();
    });
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
    addPotluckListItem: (potluckItem, callback) => dispatch(addPotluckItem(potluckItem, callback)),
    removePotluckListItem: (potluckItem, index, callback) => dispatch(removePotluckItem(potluckItem, index, callback)),
    getFoodsList: () => dispatch(loadFoodList())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);