import { Outlet, Link } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
      <nav>
        <Link to='add-job'>Add Job</Link>
        <Link to='all-jobs'>All Jobs</Link>
      </nav>
      <Outlet />
    </>

  )
}

export default SharedLayout
