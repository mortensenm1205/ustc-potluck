import React from 'react';
import { connect } from 'react-redux';

import { Card, CardName, CardItem, CloseCard } from './css/card';

const ListCard = ({ person, remove, index, activeUser }) => {
    return(
        <Card>
            { activeUser.success && <CloseCard onClick={e => remove(e, person, index)}>x</CloseCard> }
            <CardName>Name: {person.name}</CardName>
            <CardItem>Item: {person.item}</CardItem>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        activeUser: state.activeUser
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(ListCard);