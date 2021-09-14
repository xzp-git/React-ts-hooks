import React, {PropsWithChildren} from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

type Prop = PropsWithChildren<RouteComponentProps>

function Profile(props:Prop) {
  return(
    <h1>
      Profile
    </h1>
  )
}
export default connect()(Profile)