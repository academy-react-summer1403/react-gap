import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPanel from '../../component/common/HeaderPanel'
import UserPanel from "../../component/UserPanel"


const index = () => {
  return (
    <div>
      <HeaderPanel/>
      <Outlet/>
      <UserPanel/>
      
      
      
    </div>
  )
}

export default index
