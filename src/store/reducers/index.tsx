import { combineReducers, ReducersMapObject } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../history'
// import home from './home'
// import mine from './mine'
// import profile from './profile'



// 定义一个映射对象 key是字符串 值是一个reducer

const reducers:ReducersMapObject = {
  router:connectRouter(history),
  // home,
  // mine,
  // profile
}

const rootReducer = combineReducers(reducers)


export default rootReducer