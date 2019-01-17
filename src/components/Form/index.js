import React from 'react';
import { Form, Input, Button, Title, SubTitle } from './Form_css';

const FormContainer = () => {
    return(
        <Form>
           <Title>Enter your item</Title>
           <SubTitle>Enter your name and the item you're bringing to the potluck.</SubTitle> 
           <form>
               <Input type="text" placeholder="Name" />
               <Input type="text" placeholder="Item" />
           </form>
           <Button>Sign up</Button>
        </Form>
    )
}

export default FormContainer;