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
        // Currently testing how to save the updated array list
        console.log(this.state.updatedFoods);
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
              {!editable ? (
                currentFoods.map(food => {
                  return <FoodItem food={food} key={food._id} />;
                })
              ) : (
                <div>
                  <p>Seperate each food by comma:</p>
                  <textarea
                    placeholder={updatedFoods.map(food => food.item)}
                    onChange={this.handleChange}
                  />
                </div>
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