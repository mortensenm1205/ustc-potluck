import React from 'react';
import { connect } from 'react-redux';

import { List, Title, Section } from './css/list';
import FoodItem from './Item';

const FoodContainer = ({ foods, activeUser }) => {
    return(
        <List>
            <Title>What's left to bring: </Title>
            {foods.map(food => {
                return activeUser.activeUser ? 
                <textarea defaultValue={food.item} key={food._id} />
            :  
                <Section key={food._id}>
                    <FoodItem food={food} />
                </Section>
            })}
        </List>
    )
}

const mapStateToProps = state => {
    return {
        activeUser: state.activeUserBool
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);