import { AnyAction } from 'redux'

interface MineState{
    title:string
}

const initialState:MineState = {
  title:'购物车'
}

function reducer(state:MineState = initialState, action:AnyAction):MineState {

  switch (action.type) {
    
  default:
    return state
  }
}



export default reducer
export{
  MineState
}