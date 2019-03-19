import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormHolder, Form, Input, Button, Title, SubTitle } from './css/form';
import { customModalStyles, OpenModalButton, CloseModalButton } from './css/modal';
import Modal from 'react-modal';

import { loginUser } from './ducks/actions';

Modal.setAppElement('#root');

class LoginContainer extends Component {

    state = {
        modalIsOpen: false,
        authEntry: {}
    }

    // This allows the modal to open and close. 
    open = () => this.setState({ modalIsOpen: true });
    close = () => this.setState({ modalIsOpen: false });

    formChange = e => {
        const { authEntry } = this.state;
        let objToSend = { [e.target.name]: e.target.value };
        this.setState({ authEntry: { ...authEntry, ...objToSend } })
    }

    formSubmit = e => {
        const { authEntry } = this.state;
        const { login, activeUser } = this.props;
        e.preventDefault();
        login(authEntry);
        console.log(activeUser);
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
                        <Title>Credentials</Title>
                        <SubTitle>Enter username and password to access editable list.</SubTitle> 
                        <Form onSubmit={this.formSubmit}>
                                <Input type="text" placeholder="Username" name="username" onChange={this.formChange} />
                                <Input type="password" placeholder="Password" name="password" onChange={this.formChange} />
                                <Button>Login</Button>
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
        activeUser: state.activeUserBool
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: userData => dispatch(loginUser(userData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);