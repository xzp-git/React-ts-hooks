import { AnyAction } from 'redux'
import * as types from '../action-types'

const actions = {
  setCurrentCategory(currentCategory:string):AnyAction{
    return {type: types.SET_CURRENT_CATEGORY , payload:currentCategory}
  }
}

export default actions