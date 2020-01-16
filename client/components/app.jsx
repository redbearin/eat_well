import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './admin';
import User from './user';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path={['/', '/user/']} render={props => <User/>} />
          <Route path="/admin/" render={props => <Admin />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
