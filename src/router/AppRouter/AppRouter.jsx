import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import AirLine from '../../layouts/AirLine'
import Home from '../../layouts/Home'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/avianca" component={AirLine} />
      <Route exact path="/vivair" component={AirLine} />
      <Redirect to="/home" />
    </Switch>
  </Router>
)

export default AppRouter
