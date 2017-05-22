import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import Root from '../containers/Root'
import Video from '../containers/Video'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Root}/>
    <Route path='/video/:id' component={Video}/>
  </Route>
)