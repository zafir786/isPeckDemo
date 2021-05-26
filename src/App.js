import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LoginForm from './login/LoginForm';
import Dashboard from './Dashboard';

const App = () => {
  return(
    <>
      <Switch>
        <Route exact path = "/" component = {LoginForm} />
        <Route path = "/Dashboard" component = {Dashboard} />
      </Switch>
    </>
  )
}
export default App;
