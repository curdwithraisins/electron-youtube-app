import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import store from './store'
import routes from './routes'

const appHistory = useRouterHistory(createHashHistory)()

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)
