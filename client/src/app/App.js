import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { AppContainer } from './css';
import Foods from './Foods';
import List from './List';
import Form from './Form';
import Login from './Login';
import { loadPotluckList, removePotluckItem } from './List/ducks/actions';
import { loadFoodList } from './Foods/ducks/actions';

class App extends Component {

  state = {
    foods: [
      { id: uniqid(), name: 'Hamburger Buns' },
      { id: uniqid(), name: 'Chips' }
    ],
  }

  componentDidMount() {
    const { getPotluckList, getFoodsList } = this.props;
    getPotluckList();
    getFoodsList();
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
        {/* 
          This is for the blue background divder. 
          Felt like it was easier to do this way than a styled-component
        */}
        <div 
          style={{ 
            height: '300px', 
            backgroundColor: 'rgb(13, 75, 153)', 
            gridColumn: '1 / -1', 
            gridRow: '1 / -1'
        }}/>
        <Form />
        <Login />
        <List people={potluckList} remove={this.potLuckItemRemoval} />
        <Foods foods={foodList} />
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
    removePotluckListItem: (potluckItem, index, callback) => dispatch(removePotluckItem(potluckItem, index, callback)),
    getFoodsList: () => dispatch(loadFoodList())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);