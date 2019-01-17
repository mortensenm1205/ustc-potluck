import React, { Component } from 'react';
import { AppContainer } from './App_css';
import Form from './components/Form/';
import Items from './components/Items/';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Form />
        <Items />
        <List />
      </AppContainer>
    );
  }
}

export default App;