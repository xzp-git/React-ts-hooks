import React, {PropsWithChildren} from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import {RootState,HomeState} from '@/store/reducers'

type Prop = PropsWithChildren<RouteComponentProps> & HomeState

function Home(props:Prop) {
  return(
    <h1>
      {props.title}
    </h1>
  )
}

function mapStateToProps(state:RootState):HomeState{
  return state.home
}

export default connect(mapStateToProps)(Home)