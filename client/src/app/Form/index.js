import React, { Component } from 'react';
import { Form, Input, Button, Title, SubTitle } from './css/form';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class FormContainer extends Component {

    state = {
        modalIsOpen: false
    }
    
    open = () => this.setState({ modalIsOpen: true })
    close = () => this.setState({ modalIsOpen: false })

    render() {
        const { formChange, formSubmit } = this.props;
        return(
            <div>
                <button onClick={this.open}>+</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.close}
                >
                    <Form>
                        <Title>Enter your item</Title>
                        <SubTitle>Enter your name and the item you're bringing to the potluck.</SubTitle> 
                        <form onSubmit={formSubmit}>
                                <Input type="text" placeholder="Name" name="name" onChange={formChange} />
                                <Input type="text" placeholder="Item" name="item" onChange={formChange} />
                                <Button>Sign up</Button>
                        </form>
                    </Form>
                    <button onClick={this.close}>close modal</button>
                </Modal>
            </div>
        )
    }
}

export default FormContainer;