import React from 'react'
import logo from './assets/Group.svg'
import pablo from './assets/pablo.svg'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='md:flex md:w-10/12 w-full m-auto items-center'>
      <div className='md:w-1/2 md:px-10 m-5 md:m-0'>
        <img src={logo} alt=''  className='md:mb-32 mb-10'/>
        <img src={pablo} alt='' />
      </div>

      <div className='md:w-1/2 w-10/12 m-auto md:ml-20 md:mt-32 mt-10'>
        <div className='form-main'>
          <h1 className='text-4xl font-bold text-[#213f7d] text-center md:text-left'>Welcome!</h1>
          <p className='mt-3 mb-8 text-lg text-slate-400 text-center md:text-left'>Enter details to login.</p>
          <form action='./Dash.jsx' method='post'>
            <input type="email" placeholder="Email" className='md:w-9/12 w-full p-3 outline mb-4 outline-slate-300' required /> <br/>
            <input type='password' placeholder='Password' className='md:w-9/12 w-full p-3 outline outline-slate-300 mb-4' required/> <br />
            <a href='' className='text-[#39cdcc]'>FORGOT PASSWORD?</a> <br />
            <button type="submit" className='bg-[#39cdcc] text-white md:w-9/12 w-full p-3 rounded-lg mt-6'>LOG IN</button>
          </form>
          <Link to='/dash'>
            <p className='mt-3 mb-8 text-lg text-[#39cdcc]'>Go to dashboard</p>
          </Link>
        </div>
      </div>
    </div>
  )
} 

export default Login