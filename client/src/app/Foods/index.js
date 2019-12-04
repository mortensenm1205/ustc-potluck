import React, { Component } from 'react';

import { List, Title, Section } from './css/list';
import FoodItem from './Item';

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
                currentFoods: [...this.props.foods]
            });
        }
    }

    editList = () => {
        this.setState({ 
          editable: !this.state.editable
        });
    }

    handleChange = e => {
        // Turning text values into an array
        const foodArray = e.target.value.split(',');
        // Removing array item
        foodArray.map((removedFood, index, currentArr) => {
            if (removedFood === '') {
                return currentArr.splice(index, 1);
            }
            return currentArr;
        });
        // After the item is removed, we set the foodArray to the updated array
        this.setState({ updatedFoods: foodArray });
    }

    saveList = () => {
        // Currently testing how to save the updated array list
        console.log(this.state.updatedFoods);
        this.setState({
          editable: !this.state.editable
        });
    }

    render() {
        const { currentFoods, editable } = this.state;
        return (
          <List>
            <Title>What's left to bring: </Title>
            <Section>
              {/* Was able to finally produce array values in a single textArea*/}
              {!editable ? (
                  currentFoods.map(food => {
                      return <FoodItem food={food} key={food._id} />;
                  })
                ) : (
                  <textarea
                      value={currentFoods.map(food => food.item)}
                      onChange={this.handleChange}
                  />
              )}
              {/* Needing two different buttons because of the methods they perform */}
              {!editable ? (
                <button onClick={this.editList}>Edit List</button>
              ) : (
                <button onClick={this.saveList}>Save List</button>
              )}
            </Section>
          </List>
        );
    }
}


export default FoodContainer;