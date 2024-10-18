import React from 'react'
import { Outlet } from 'react-router-dom'
import SaitBar from '../../component/common/SaitBarPanel/SaitBar'
import HeaderPanel from '../../component/common/HeaderPanel'

const index = () => {
  return (
    <div>
      <HeaderPanel/>
      <Outlet/>
      <SaitBar/>
      
    </div>
  )
}

export default index
