import React, {PropsWithChildren} from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import {RootState,ProfileState} from '@/store/reducers'
type StateProps = ReturnType<typeof mapStateToProps>

type Prop = PropsWithChildren<RouteComponentProps> & StateProps 

function Profile(props:Prop) {
  return(
    <h1>
      {props.title}
    </h1>
  )
}

function mapStateToProps(state:RootState):ProfileState{
  return state.profile
}

export default connect(mapStateToProps)(Profile)