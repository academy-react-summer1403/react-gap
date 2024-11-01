import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPanel from '../../component/common/HeaderPanel'
import SaidPanel from '../../component/UserPanel/SaidPanel'



const index = () => {
  return (
    <div>
      <HeaderPanel/>
      <Outlet/>
      <SaidPanel/>
      
      
      
      
    </div>
  )
}

export default index
