import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppContainer } from './css';
import Foods from './Foods';
import List from './List';
import Form from './Form';
import { loadPotluckList, removePotluckItem } from './List/ducks/actions';
import { loadFoodList } from './Foods/ducks/actions';

class App extends Component {

  componentDidMount() {
    const { getPotluckList, getFoodsList } = this.props;
    getPotluckList();
    getFoodsList(); 
  }

  render() {
    const { potluckList, foodList, getFoodsList, removePotluckListItem } = this.props;
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
        <List people={potluckList} getFoodsList={getFoodsList} removePotluckListItem={removePotluckListItem}/>
        <Foods foods={foodList} getFoodsList={getFoodsList} />
      </AppContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    potluckList: state.potluckData.data,
    foodList: state.foodData
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