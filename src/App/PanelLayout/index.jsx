import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPanel from '../../component/common/HeaderPanel'
import Panel2 from "../../screens/Panel/Panel2"



const index = () => {
  return (
    <div>
      <HeaderPanel/>
      <Outlet/>
      <Panel2/>
     
    
      
      
      
      
    </div>
  )
}

export default index
