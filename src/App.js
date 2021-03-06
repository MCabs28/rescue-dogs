import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/index'
import SigninPage from './pages/signin'


const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signin" component={SigninPage} />
        </Switch>
    </Router>
  )
}

export default App