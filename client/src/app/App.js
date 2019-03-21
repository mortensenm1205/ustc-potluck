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


  state = {
    activeUser: {}
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.activeUser !== prevState.activeUser) {
      return { activeUser: nextProps.activeUser }
    }
    else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const currentTime = Date.now() / 1000;
    if ((prevState.activeUser !== this.state.activeUser) && prevProps.activeUser.expires < currentTime) {
      this.setState({ activeUser: prevProps.activeUser })
    }

    // if (this.state.activeUser.success && this.state.activeUser.expires !== 0) {
    //   window.localStorage.setItem('acitveUser', JSON.stringify(this.state.activeUser));
    // } else {
    //   window.localStorage.removeItem('activeUser');
    // }
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
        {console.log("PROPS: ", this.props.activeUser, "STATE: ", this.state.activeUser)}
        <div 
          style={{ 
            height: '300px', 
            backgroundColor: 'rgb(13, 75, 153)', 
            gridColumn: '1 / -1', 
            gridRow: '1 / -1'
        }}/>
        <Form />
        <Login />
        <List people={potluckList} remove={this.potLuckItemRemoval} activeUser={this.state.activeUser} />
        <Foods foods={foodList} activeUser={this.state.activeUser}/>
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