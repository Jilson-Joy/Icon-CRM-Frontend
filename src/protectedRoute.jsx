import { Navigate, Outlet } from 'react-router-dom'

 const PrivateRoutes = () => {
  let auth = localStorage.getItem('user')
return (
    auth ? <Outlet/> : <Navigate to='/authentication/sign-in'/>
  )
}

export default PrivateRoutes