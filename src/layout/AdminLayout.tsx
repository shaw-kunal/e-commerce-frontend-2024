import { Outlet } from 'react-router-dom'
import AdminSideBar from '../components/admin/AdminSideBar'
import "../styles/app.scss"


const AdminLayout = () => {
  return (
    <div className='appLayoutContainer'>
      <AdminSideBar/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
