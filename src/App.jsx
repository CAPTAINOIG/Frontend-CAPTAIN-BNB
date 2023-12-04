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






// const clientId = "939523337752-cgh7jofh594cmpfa2thvco92tl5sj17o.apps.googleusercontent.com"



function App() {
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     }).then(() => {
  //       // Initialization successful, retrieve access token here
  //       const accessToken = gapi.auth.getToken().access_token;
  //       console.log(accessToken); // Ensure console.log is within the scope of the retrieved data
  //       // Use the access token for further actions here
  //       // eg navigate to
  //     }).catch(error => {
  //       console.error("Error initializing gapi: ", error);
  //     });
  //   }

  //   gapi.load('client:auth2', start);
  // }, []);

  // <Route path="/dashboard" element={ token ? <Dashboard/> : <navigate to="/login"/>} />
  // const token = localStorage.token;
  const navigate = useNavigate();
  

  
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
    </Routes>
    </>
  )
}

export default App
