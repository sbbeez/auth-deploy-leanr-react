import React, { Component } from "react";
import "./App.css";
import "./assets/animate.css/animate.css";
import "./assets/font-awesome/css/font-awesome.min.css";
import "./assets/simple-line-icons/css/simple-line-icons.css";
import "./jquery/bootstrap/dist/css/bootstrap.css";
import { Route,BrowserRouter,Switch,Redirect } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/" component={() => <Redirect to="/login"/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
