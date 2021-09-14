import React, {PropsWithChildren} from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import {RootState,MineState} from '@/store/reducers'
type Prop = PropsWithChildren<RouteComponentProps> & MineState

function Mine(props:Prop) {
  return(
    <h1>
      {props.title}
    </h1>
  )
}

function mapStateToProps(state:RootState):MineState{
  return state.mine
}

export default connect(mapStateToProps)(Mine)