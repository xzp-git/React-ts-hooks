import React, {PropsWithChildren} from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

type Prop = PropsWithChildren<RouteComponentProps>

function Mine(props:Prop) {
  return(
    <h1>
      Mine
    </h1>
  )
}
export default connect()(Mine)