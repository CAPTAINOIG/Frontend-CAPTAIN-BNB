// import React, { useState } from 'react'
// import {GoogleLogin} from 'react-google-login'
// import pic from '../assets/image/pic.png'
// import { useNavigate } from 'react-router-dom'




// // secret "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"

// const clientId = "939523337752-cgh7jofh594cmpfa2thvco92tl5sj17o.apps.googleusercontent.com"

// const Customerhost = () => {
//   let navigate = useNavigate()
//   const [message, setMessage] = useState("")

//     // const onSuccess =(res)=>{
//     //     console.log(res.tokenId);
//     //     console.log("LOGIN SUCCESS! Current user:" , res.profileObj);
//     // }



//     const onSuccess = (res) => {
//   console.log("LOGIN SUCCESSFUL! Current user:", res.profileObj);
//   console.log("User's email:", res.profileObj.email);
//   setMessage('LOGIN SUCCESSFUL!')
//   if(res.profileObj.email){
//     // navigate('/hosting')
//   }
// };

//     const onFailure =(res)=>{
//         console.log("LOGIN FAIlED! res:" , res);
//   setMessage('LOGIN FAIlED!')

//     }
//   return (
//     <section>
//     <div className='grid lg:grid-cols-2 cols-1 font-serif bg-violet-900 h-screen'>
//     <div><img className='lg:h-[80%] lg:w-[85%] h-[55%] w-[60%] mt-[20%] lg:ms-20 lg:mt-20 ms-[20%]' src={pic} alt="" /></div>
//     <div id='signInButton' className='lg:mt-[20%] lg:ms-[20%]'>
//     <p id='cap' className='lg:text-6xl font-bold border p-2 rounded-full lg:w-[70%] lg:ms-0 ms-20 w-[60%] bg-violet-900'>Captainbnb</p>
//     <GoogleLogin className='lg:mt-20 lg:w-[70%] mt-10 w-[60%] lg:ms-0 ms-20 text-center' clientId={clientId}
//     buttonText="Login with email"
//     onSuccess={onSuccess} 
//     onFailure={onFailure}
//     cookiePolicy={"single_host_origin"}
//     isSignedIn={true}/>
//     <div className='lg:text-6xl text-3xl font-bold mt-20 text-center lg:ms-0 ms-10 w-[70%] bg-violet-900'>2023</div>
//     </div>
//     </div>
//     </section>
//   )
// }

// export default Customerhost