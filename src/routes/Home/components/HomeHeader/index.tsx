import React from 'react'

import {BarsOutlined} from '@ant-design/icons'
import logo from '@/assets/images/logo.jpg'

import classname from 'classnames'
import './index.less'
interface Props{
    currentCategory:string; //表示当前选中的分类，这个值会被存放在redux中
    setCurrentCategory:(currentCategory:string)=>void
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function HomeHeader(props:Props) {

  const [isMenuVisible, setIsMenuVisible] = React.useState(false)

  const setCurrentCategory = (event:React.MouseEvent<HTMLUListElement>) => {
    const target:HTMLUListElement = event.target as HTMLUListElement
    const category = target.dataset.category
    props.setCurrentCategory(category)
    setIsMenuVisible(false)
  }

  return(
    <header className="home-header">
      <div className="logo-header">
        <img src={logo} alt="" />
        <BarsOutlined onClick={() => setIsMenuVisible(!isMenuVisible)} />
      </div>
      {
        isMenuVisible && <ul
          className="category"
          onClick={setCurrentCategory}
        >
          <li data-category="all" className={
            classname({
              active:props.currentCategory === 'all'
            })
          }>全部课程</li>
          <li data-category="react" className={
            classname({
              active:props.currentCategory === 'react'
            })
          }>经济金融</li>
          <li data-category="vue" className={
            classname({
              active:props.currentCategory === 'vue'
            })
          }>自然科学</li>
        </ul>
      }
      
    </header>
  )
}

export default HomeHeader