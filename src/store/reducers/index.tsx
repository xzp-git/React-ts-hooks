import { combineReducers, ReducersMapObject, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../history'
import home, {HomeState} from './home'
import mine, {MineState} from './mine'
import profile, {ProfileState} from './profile'



// 定义一个映射对象 key是字符串 值是一个reducer

const reducers:ReducersMapObject = {
  router:connectRouter(history),
  home,
  mine,
  profile
}
// 根状态等于

type RootState = {
  [key in keyof typeof reducers]:ReturnType<typeof reducers[key]>
}

const rootReducer:Reducer<RootState> = combineReducers<RootState>(reducers)

export {
  RootState,
  HomeState,
  MineState,
  ProfileState
}

export default rootReducer