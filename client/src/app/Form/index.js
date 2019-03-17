import React, { Component } from 'react';
import { FormHolder, Form, Input, Button, Title, SubTitle } from './css/form';
import { customModalStyles, OpenModalButton, CloseModalButton } from './css/modal';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class FormContainer extends Component {

    state = {
        modalIsOpen: false
    }

    // This allows the modal to open and close. 
    open = () => this.setState({ modalIsOpen: true })
    close = () => this.setState({ modalIsOpen: false })

    render() {
        const { formChange, formSubmit } = this.props;
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
                        <Form onSubmit={formSubmit}>
                                <Input type="text" placeholder="Name" name="name" onChange={formChange} />
                                <Input type="text" placeholder="Item" name="item" onChange={formChange} />
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

export default FormContainer;