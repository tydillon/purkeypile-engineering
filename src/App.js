import React from 'react'
import './App.css'
import {
  AboutUs,
  Contact,
  Credentials,
  //Home,
  Projects,
  Services,
  NavBar,
} from './components'
import { Home } from './components/Home'
import {
  Router,
  Switch,
  Route,
  Redirect,
  withRouter,
  BrowserRouter,
} from 'react-router-dom'
import history from './utils/history'

const App = () => {
  return (
    <BrowserRouter history={history}>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/credentials' component={Credentials} />
        <Route exact path='/clients' component={Services} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/project-list'>
          <Redirect to='/projects' />
        </Route>
        <Route exact path='/' component={withRouter(Home)} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
