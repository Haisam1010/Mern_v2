import {Outlet} from 'react-router-dom'
import Wrapper from "../wrappers/DashBoard"
import { SmallSideBar,BigSideBar,NavBar } from '../components'
import { createContext, useContext, useState } from 'react'

const DashBoardContext = createContext()

const Dashboard = () => {

  const user = ['mohamed']

  const [showSidebar,setShowSidebar] = useState(false)
  const [isDarkTheme,setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
    const newDarktheme = !isDarkTheme
    setIsDarkTheme(newDarktheme)
    console.log('toggle dark theme')
  }


  const toggleSidebar = () => { 
    setShowSidebar(!showSidebar)
    console.log('toggle')
  }


  const logoutUser = async () => {
    console.log('logout user')
  }

  return( 
    <DashBoardContext.Provider value={{user,showSidebar,isDarkTheme,toggleSidebar,toggleDarkTheme,logoutUser}}>
       <Wrapper>
  <main className='dashboard'>
    <SmallSideBar />
    <BigSideBar />

    <div>
      <NavBar />
      <div className='dashboard-page'>
        <Outlet />
      </div>
    </div>
  </main>

  </Wrapper>
    </DashBoardContext.Provider>
 )
}
export  const useDashBoardContext = () => useContext(DashBoardContext)
export default Dashboard
