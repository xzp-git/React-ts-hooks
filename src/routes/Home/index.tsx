import React, {PropsWithChildren} from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

type Prop = PropsWithChildren<RouteComponentProps>

function Home(props:Prop) {
  return(
    <h1>
      Home
    </h1>
  )
}
export default connect()(Home)