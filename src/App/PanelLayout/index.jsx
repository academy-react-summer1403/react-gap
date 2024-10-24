import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPanel from '../../component/common/HeaderPanel'
import SaidePanel from '../../component/UserPanel/SaidePanel'



const index = () => {
  return (
    <div>
      <HeaderPanel/>
      <Outlet/>
      <SaidePanel/>
      
      
      
      
    </div>
  )
}

export default index
