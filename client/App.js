import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Top from './Top'
import Page from './Page'

const App = () => (
  <>
    <Link to="/">Link to Top</Link>
    <br />
    <br />
    <Link to="/page">Link to Page</Link>
    <br />
    <br />
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/page" component={Page} />
    </Switch>
  </>
)

export default App
