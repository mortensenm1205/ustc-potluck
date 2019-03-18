import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormHolder, Form, Input, Button, Title, SubTitle } from './css/form';
import { customModalStyles, OpenModalButton, CloseModalButton } from './css/modal';
import Modal from 'react-modal';

import { addPotluckItem } from '../List/ducks/actions';
import { loadFoodList } from '../Foods/ducks/actions';

Modal.setAppElement('#root');

class FormContainer extends Component {

    state = {
        modalIsOpen: false,
        entry: {}
    }

    // This allows the modal to open and close. 
    open = () => this.setState({ modalIsOpen: true });
    close = () => this.setState({ modalIsOpen: false });

    formChange = e => {
        const { entry } = this.state;
        let objToSend = { [e.target.name]: e.target.value };
        this.setState({ entry: { ...entry, ...objToSend } })
    }

    formSubmit = e => {
        const { entry } = this.state;
        const { addPotluckListItem, getFoodsList } = this.props;
        e.preventDefault();
        e.target.reset();
        addPotluckListItem(entry, () => {
            getFoodsList();
        });
        this.close();
    }

    render() {
        return(
            <div>
                {/* Using that state here */}
                <OpenModalButton onClick={this.open}><span>+</span></OpenModalButton>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.close}
                    shouldCloseOnOverlayClick={false}
                    // Using a custom style to handle height and width
                    style={customModalStyles}
                >
                    <FormHolder>
                        <Title>Enter your item</Title>
                        <SubTitle>Enter your name and the item you're bringing to the potluck.</SubTitle> 
                        <Form onSubmit={this.formSubmit}>
                                <Input type="text" placeholder="Name" name="name" onChange={this.formChange} />
                                <Input type="text" placeholder="Item" name="item" onChange={this.formChange} />
                                <Button>Sign up</Button>
                        </Form>
                    </FormHolder>
                    {/* Just using the same method as above to close. */}
                    <CloseModalButton onClick={this.close}>X</CloseModalButton>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        potluckList: state.loadPotluckData,
        foodList: state.loadFoodData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPotluckListItem: (potluckItem, callback) => dispatch(addPotluckItem(potluckItem, callback)),
        getFoodsList: () => dispatch(loadFoodList())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);