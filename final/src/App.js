import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PersonalForms from './pages/PersonalForms';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={ PersonalForms } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
