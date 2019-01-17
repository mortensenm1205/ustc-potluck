import React from 'react';

const Form = () => {
    return(
        <div>
           <p>Enter your item</p>
           <p>Enter your name and the item you're bringing to the potluck.</p> 
           <form>
               <input type="text" placeholder="Name" />
               <input type="text" placeholder="Item" />
           </form>
           <button>Sign up</button>
        </div>
    )
}

export default Form;