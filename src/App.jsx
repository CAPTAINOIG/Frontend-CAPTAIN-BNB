import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Layout from './Layout'
import Leasedetail from './component/Leasedetail'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Arrow from './component/Arrow'
import Map from './component/Map'
// import Customerhost from './host/Customerhost'
import Passwordrecovery from './component/Passwordrecovery'
// import { useEffect } from 'react'
// import {gapi} from 'gapi-script'
import Resetpassword from './component/Resetpassword'
import Hosting from './host/Hosting'
import Intro from './host/Intro'
import Errorpage from './pages/Errorpage'
import Rootlayout from './layout/Rootlayout'
import Allusers from './user/Allusers'
import Homepage from './user/Homepage'
import Userplace from './user/Userplace'






// const clientId = "939523337752-cgh7jofh594cmpfa2thvco92tl5sj17o.apps.googleusercontent.com"



function App() {
  // Simulated authentication and admin status
  const isAuthenticated = true; // Change this based on your authentication logic
  const isAdmin = true; // Change this based on admin status

  const navigate = useNavigate();

  // Custom Admin Route component
  const AdminRoute = ({ element, ...rest }) => {
    if (isAuthenticated && isAdmin) {
      return <Route {...rest} element={element} />;
    } else {
      // If user is not authenticated or not an admin, redirect to login or error page
      navigate('/login'); // Redirect to login or any other page
      return null; // Render nothing or an error message
    }
  };
  
  return (
    <>
    <Routes>  
      <Route path='/' element={<Layout/>}/>
      <Route path='/map' element={<Map/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/captainoigdetail' element={<Arrow/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/hosting" element={<Hosting/>} />
      <Route path="/password" element={<Passwordrecovery/>} />
      <Route path="/reset" element={<Resetpassword/>} />
      <Route path="/intro" element={<Intro/>} />
      <Route path="admin-captain-bnb-dev-oig/*" element={<Rootlayout />} />
      
      <Route path="/userplace" element={<Userplace />} />
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Errorpage/>} />
    </Routes>
    </>
  )
}

export default App
