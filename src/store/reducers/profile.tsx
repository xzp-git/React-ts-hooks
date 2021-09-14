import { AnyAction } from 'redux'

 interface ProfileState{
    title:string
}

const initialState:ProfileState = {
  title:'个人中心'
}

function reducer(state:ProfileState = initialState, action:AnyAction):ProfileState {

  switch (action.type) {
    
  default:
    return state
  }
}



export default reducer
export{
  ProfileState
}
