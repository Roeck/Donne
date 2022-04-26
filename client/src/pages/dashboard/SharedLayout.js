import { Outlet, Link } from 'react-router-dom'
import { Navbar, BigSidebar } from '../../components'

const SharedLayout = () => {
  return (
    <>
      <BigSidebar />
      <Navbar />
    </>

  )
}

export default SharedLayout
