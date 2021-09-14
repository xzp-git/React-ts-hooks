import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import history from './history'
import rootReducer from './reducers'

const store = applyMiddleware(routerMiddleware(history), thunk, promise, logger)(createStore)(rootReducer)

export default store