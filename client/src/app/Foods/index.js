import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List, Title, Section } from './css/list';
import { FoodListButton, FoodStyleContainer } from "./css/food";
import FoodItem from './Item';
import { addFoodItem, removeFoodItem } from './ducks/actions';

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

    removalOfFFoodItem = index => {
      const { removeFood, getFoodsList } = this.props;
      removeFood(this.state.currentFoods, index, () => getFoodsList());
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
              <FoodStyleContainer>
                {/* Was able to finally produce array values in a single textArea*/}
                {currentFoods.map((food, index) => {
                  return (
                    <FoodItem
                      food={food}
                      key={food._id}
                      editable={editable}
                      index={index}
                      remove={this.removalOfFFoodItem}
                    />
                  );
                })}
                {editable && (
                  <div>
                    <p>Seperate each food by comma:</p>
                    <textarea
                      placeholder={updatedFoods.map(food => food.item)}
                      onChange={this.handleChange}
                    />
                  </div>
                )}
              </FoodStyleContainer>
              {/* Needing two different buttons because of the methods they perform */}
              {editable ? (
                <FoodListButton onClick={this.saveList}>
                  Save List
                </FoodListButton>
              ) : (
                <FoodListButton onClick={this.editList}>
                  Edit List
                </FoodListButton>
              )}
            </Section>
          </List>
        );
    }
}

const mapStateToProps = state => { return {} }

const mapDispatchToProps = dispatch => {
  return {
    addFood: foodItem => dispatch(addFoodItem(foodItem)),
    removeFood: (foodItem, index, callback) => dispatch(removeFoodItem(foodItem, index, callback))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);