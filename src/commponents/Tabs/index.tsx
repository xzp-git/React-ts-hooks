import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import {HomeOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons'
import './index.less'

function Tabs() {
  return(
    <footer>
      <NavLink exact to="/">
        <HomeOutlined />
        <span>首页</span>
      </NavLink>
      <NavLink  to="/mine">
        <ShoppingCartOutlined />
        <span>购物车</span>
      </NavLink>
      <NavLink  to="/profile">
        <UserOutlined />
        <span>个人中心</span>
      </NavLink>
    </footer>
  )
}

export default withRouter(Tabs)