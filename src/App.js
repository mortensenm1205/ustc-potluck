import React, { Component } from 'react';
import Form from './components/Form';
import Items from './components/Items';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Items />
        <List />
      </div>
    );
  }
}

export default App;