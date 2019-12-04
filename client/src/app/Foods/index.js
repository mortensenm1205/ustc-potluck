import React, { Component } from 'react';

import { List, Title, Section } from './css/list';
import FoodItem from './Item';

class FoodContainer extends Component {

    state = {
        editable: false,
        foodsState: []
    }

    componentDidUpdate(prevProps) {
        if(prevProps.foods !== this.props.foods) {
            this.setState({
                foodsState: [...this.props.foods]
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
            console.log(currentArr);
            return currentArr;
        })
    }

    render() {
        const { foodsState, editable } = this.state;
        return (
          <List>
            <Title>What's left to bring: </Title>
            <Section>
                {editable ? 
                    <textarea value={foodsState.map(food => food.item)} onChange={this.handleChange} />
                 : 
                    foodsState.map(food => {
                         return <FoodItem food={food} key={food._id} />;
                    })
                }
            </Section>
            <button onClick={this.editList}>{editable ? 'Save List' : 'Edit List'}</button>
          </List>
        );
    }
}


export default FoodContainer;