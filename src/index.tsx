import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import  store from './store'
import Tabs from './commponents/Tabs'
import Home from './routes/Home'
import Mine from './routes/Mine'
import Profile from './routes/Profile'
import history from './store/history'
import  './assets/style/global.less'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <main className="main-container">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/mine" component={Mine} />
          <Route path="/profile" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Tabs />
    </ConnectedRouter>
  </Provider>
  ,document.getElementById('root'))