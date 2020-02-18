import React, { Component } from 'react';

import { Items, Title } from './css/items';
import ListCard from './Card';

class ListContainer extends Component {

    potLuckItemRemoval = (e, plLuckPerson, index) => {
        const { removePotluckListItem, getFoodsList } = this.props;
        removePotluckListItem(plLuckPerson, index, () => {
            getFoodsList();
        });
    }

    render () {
        const { people } = this.props;
        return(
            <Items>
                <Title>What people are bringing: </Title>
                {people.map((personObj, index) => (
                    <ListCard 
                        person={personObj} 
                        key={personObj._id} 
                        remove={this.potLuckItemRemoval} 
                        index={index} 
                    />
                ))}
            </Items>
        )
    }
}
export default ListContainer;