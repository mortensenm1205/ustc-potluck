import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List, Title, Section } from './css/list';
import FoodItem from './Item';
import { addFoodItem } from './ducks/actions';

class FoodContainer extends Component {

    state = {
        editable: false,
        // Updated to include two arrays for current and updated foodList
        currentFoods: [],
        updatedFoods: []
    }

    componentDidUpdate(prevProps) {
        if(prevProps.foods !== this.props.foods) {
            this.setState({
                currentFoods: [...this.props.foods],
                updatedFoods: [...this.props.foods]
            });
        }
    }

    
    handleChange = e => {
      // Turning text values into an array
      const foodArray = e.target.value.split(',');
      // Saving the new text array into updatedFoods
      this.setState({ updatedFoods: foodArray });
      
    }
    
    editList = () => {
        this.setState({ 
          editable: !this.state.editable
        });
    }

    saveList = () => {
        const { addFood } = this.props;

        addFood(this.state.updatedFoods);
        this.setState({
          editable: !this.state.editable
        });
    }

    render() {
        const { updatedFoods, currentFoods, editable } = this.state;
        return (
          <List>
            <Title>What's left to bring: </Title>
            <Section>
              {/* Was able to finally produce array values in a single textArea*/}
              {currentFoods.map(food => {
                  return <FoodItem food={food} key={food._id} editable={editable} />;
                })
              }
              {editable &&  
                <div>
                  <p>Seperate each food by comma:</p>
                  <textarea
                    placeholder={updatedFoods.map(food => food.item)}
                    onChange={this.handleChange}
                  />
                </div>
              }
              {/* Needing two different buttons because of the methods they perform */}
              {editable ? (
                <button onClick={this.saveList}>Save List</button>
              ) : (
                <button onClick={this.editList}>Edit List</button>
              )}
            </Section>
          </List>
        );
    }
}

const mapStateToProps = state => { return {} }

const mapDispatchToProps = dispatch => {
  return {
    addFood: foodItem => dispatch(addFoodItem(foodItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);