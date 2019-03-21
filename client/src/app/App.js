import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppContainer } from './css';
import Foods from './Foods';
import List from './List';
import Form from './Form';
import Login from './Login';
import { loadPotluckList, removePotluckItem } from './List/ducks/actions';
import { loadFoodList } from './Foods/ducks/actions';

class App extends Component {

  componentDidMount() {
    const { getPotluckList, getFoodsList, activeUser } = this.props;
    getPotluckList();
    getFoodsList();

    // testing to see how i can set localstorage to save activeUser
    // currently this isn't working
    // will have to use this in another lc method.
    if(activeUser.success && activeUser.expires !== 0) {
      window.localStorage.setItem('acitveUser', JSON.stringify(activeUser));
    } else {
      window.localStorage.removeItem('activeUser');
    }
  }

  potLuckItemRemoval = (e, plLuckPerson, index) => {
    const { removePotluckListItem, getFoodsList } = this.props;
    removePotluckListItem(plLuckPerson, index, () => {
      getFoodsList();
    });
  }

  render() {
    const { potluckList, foodList, activeUser } = this.props;
    return (
      <AppContainer>
        {/* 
          This is for the blue background divder. 
          Felt like it was easier to do this way than a styled-component
        */}
        {console.log(activeUser)}
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
    foodList: state.loadFoodData,
    activeUser: state.activeUser
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