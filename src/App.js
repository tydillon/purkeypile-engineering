import React from 'react'
import './App.css'
import {
  AboutUs,
  Contact,
  Credentials,
  Home,
  Projects,
  Services,
  NavBar,
} from './components'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './utils/history'

const App = () => {
  return (
    <Router history={history}>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/credentials' component={Credentials} />
        <Route exact path='/clients' component={Services} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/project-list'>
          <Redirect to='/projects' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
