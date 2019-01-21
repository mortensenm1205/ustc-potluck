import React from 'react';
import { Form, Input, Button, Title, SubTitle } from './form_css';

const FormContainer = ({ entry, submitEntry }) => {
    return(
        <Form>
           <Title>Enter your item</Title>
           <SubTitle>Enter your name and the item you're bringing to the potluck.</SubTitle> 
           <form onSubmit={submitEntry}>
                <Input type="text" placeholder="Name" name="name" onChange={entry} />
                <Input type="text" placeholder="Item" name="item" onChange={entry} />
                <Button>Sign up</Button>
           </form>
        </Form>
    )
}

export default FormContainer;