import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../components/page/Home'
import Material from '../components/page/Material'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/material">
        <Material />
      </Route>
    </Switch>
  )
}