import { Outlet } from 'react-router-dom'
import AdminSideBar from '../components/admin/AdminSideBar'
import "../styles/app.scss"


const AdminLayout = () => {
  return (
    <div className='appLayoutContainer'>
      <AdminSideBar />
      <div className='applayout-outlet'>
      <Outlet/>
      </div>
      <div className='bg-blur'></div>
    </div>
  )
}

export default AdminLayout
