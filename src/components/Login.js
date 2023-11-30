import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)

  const handleToggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div >
        <Header/>
        <div>
    <img  className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
     alt ="logo"/>
     </div>
     <form className=' bg-black bg-opacity-80 absolute mx-auto my-36 p-12  w-3/12 right-0 left-0'>
      <h1 className='font-bold text-3xl text-white py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm&&<input type="text" placeholder='Full Name' className='p-4 my-2 w-full rounded-md bg-gray-800'/>}
      <input type="text" placeholder='Email or phone number' className='p-4 my-2 w-full rounded-md bg-gray-800'/>
      <input type='password' placeholder='password' className='p-4 my-2 w-full rounded-md bg-gray-800'/>
      <button className='bg-red-800 w-full p-4 my-6  rounded-md'>{isSignInForm?"Sign In":"Sign Up"}</button>
      <p className='text-white cursor-pointer' onClick={handleToggleSignInForm}>{isSignInForm?"New to Netflix? Sign up now.":"Already Registered, Please Sign In now!."}</p>
     </form>
   
    </div>
  )
}

export default Login
