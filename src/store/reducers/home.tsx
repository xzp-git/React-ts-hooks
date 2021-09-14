import { AnyAction } from 'redux'

interface HomeState{
    title:string
}

const initialState:HomeState = {
  title:'首页'
}

function reducer(state:HomeState = initialState, action:AnyAction):HomeState {

  switch (action.type) {
    
  default:
    return state
  }
}



export default reducer

export{
  HomeState
}