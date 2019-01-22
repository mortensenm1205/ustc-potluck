import React from 'react';
import { Form, Input, Button, Title, SubTitle } from './css/form';

const FormContainer = ({ formChange, formSubmit }) => {
    return(
        <Form>
           <Title>Enter your item</Title>
           <SubTitle>Enter your name and the item you're bringing to the potluck.</SubTitle> 
           <form onSubmit={formSubmit}>
                <Input type="text" placeholder="Name" name="name" onChange={formChange} />
                <Input type="text" placeholder="Item" name="item" onChange={formChange} />
                <Button>Sign up</Button>
           </form>
        </Form>
    )
}

export default FormContainer;