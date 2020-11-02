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
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  BrowserRouter,
} from 'react-router-dom'
//import history from './utils/history'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
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
