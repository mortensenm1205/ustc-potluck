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

    render() {
        const { foodsState, editable } = this.state;
        return (
          <List>
            <Title>What's left to bring: </Title>
            <Section>
                {editable ? 
                    <textarea value={foodsState.map(food => food.item)} />
                 : 
                    foodsState.map(food => {
                         return <FoodItem food={food} key={food._id} />;
                    })
                }
            </Section>
            <button onClick={this.editList}>Edit List</button>
          </List>
        );
    }
}


export default FoodContainer;