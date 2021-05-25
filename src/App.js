import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LoginForm from './login/LoginForm';
import Dashboard from './Dashboard';
import Report from './components/report/Report'

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
