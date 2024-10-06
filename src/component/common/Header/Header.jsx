import React from 'react'
import { Fragment } from 'react'
import Login from '../../../screens/Login/Login'

const Header = () => {
  return (
   <Fragment>
    <div className='Header' style={{border:'1px solid red', width:'100%',}} >

     <Login/>
    </div>

   </Fragment>
  )
}

export default Header
