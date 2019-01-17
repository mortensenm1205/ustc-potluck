import React from 'react';
import { Form, Input, Button } from './Form_css';

const FormContainer = () => {
    return(
        <Form>
           <p>Enter your item</p>
           <p>Enter your name and the item you're bringing to the potluck.</p> 
           <form>
               <Input type="text" placeholder="Name" />
               <Input type="text" placeholder="Item" />
           </form>
           <Button>Sign up</Button>
        </Form>
    )
}

export default FormContainer;