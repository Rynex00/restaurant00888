import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Conponents/Navber/Navber'

const Main = () => {
  return (
    <div>
      <Navber/>
      <Outlet/>
    </div>
  )
}

export default Main